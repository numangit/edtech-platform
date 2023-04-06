import React, { useState } from 'react';
import { useGetVideoQuery } from '../../../features/videos/videoApi';
import { Link, useParams } from 'react-router-dom';
import { useGetQuizByVideoIdQuery } from '../../../features/quiz/quizApi';
import { useGetAssignmentByVideoIdQuery } from '../../../features/assignment/assignmentApi';
import AssignmentModal from './AssignmentModal';
import Error from '../../common/Error';
import VideoLoad from '../../common/loader/VideoLoad';

const VideoPlayer = () => {

    //getting the video id from url 
    const { id } = useParams();

    //toggle state
    const [showModal, setShowModal] = useState(false);

    //getting video data
    const { data: video, isLoading, isError, error } = useGetVideoQuery(id) || {};
    const { title, createdAt, description, url } = video || {};

    //getting quizzes and assignment by videoId
    const { data: quizzes, } = useGetQuizByVideoIdQuery(id) || {};
    const { data: assignments, } = useGetAssignmentByVideoIdQuery(id) || {};

    //date format
    const date = new Date(createdAt);
    const longMonth = date.toLocaleString('en-us', { month: 'long' })
    const formattedDate = date.toDateString().slice(4).split(' ');

    return (
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {
                isLoading && <VideoLoad />
            }
            {
                (!isLoading && isError) && <Error message={error?.error} />
            }
            {
                (!isLoading && !isError && !video?.id) && <div className="text-center">No video found!</div>
            }
            {
                (!isLoading && !isError && video?.id)
                && <>
                    <iframe width="100%" className="aspect-video" src={url}
                        title={title}
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen></iframe>

                    <div>
                        <h1 className="text-lg font-semibold tracking-tight text-slate-100">
                            {title}
                        </h1>
                        <h2 className=" pb-4 text-sm leading-[1.7142857] text-slate-400">
                            Uploaded on {formattedDate[1]} {longMonth} {formattedDate[2]}
                        </h2>

                        <div className="flex gap-4">
                            {
                                assignments?.length !== 0
                                && <button
                                    onClick={() => setShowModal(true)}
                                    className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                    এসাইনমেন্ট
                                </button>
                            }
                            {
                                //modal
                                showModal
                                && <AssignmentModal assignment={assignments[0]} setShowModal={setShowModal} />

                            }
                            {
                                quizzes?.length !== 0
                                && <Link to={`/quiz/${id}`}
                                    className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                    কুইজে অংশগ্রহণ করুন
                                </Link>
                            }

                        </div>
                        <p className="mt-4 text-sm text-slate-400 leading-6">
                            {description}
                        </p>

                    </div>
                </>
            }
        </div>
    );
};

export default VideoPlayer;