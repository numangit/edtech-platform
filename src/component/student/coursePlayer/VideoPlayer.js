import React, { useState } from 'react';
import { useGetVideoQuery } from '../../../features/videos/videoApi';
import { Link, useParams } from 'react-router-dom';
import { useGetQuizByVideoIdQuery } from '../../../features/quiz/quizApi';
import { useGetAssignmentByVideoIdQuery } from '../../../features/assignment/assignmentApi';
import AssignmentModal from './AssignmentModal';
import Error from '../../common/Error';
import VideoLoad from '../../common/loader/VideoLoad';
import NoData from '../../common/NoData';
import { useGetAssignmentMarkQuery } from '../../../features/assignmentMark/assignmentMarkApi';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../features/auth/authSelector';
import Result from './Result';
import { useGetQuizMarkQuery } from '../../../features/quizMark/quizMarkApi';

const VideoPlayer = () => {

    //getting the video id from url 
    const { id } = useParams();

    //toggle state
    const [showModal, setShowModal] = useState(false);

    //getting video data
    const { data: video, isLoading, isError, error } = useGetVideoQuery(id) || {};
    const { id: videoId, title, createdAt, description, url } = video || {};

    //getting quizzes and assignment by videoId
    const { data: quizzes, } = useGetQuizByVideoIdQuery(id) || {};
    const { data: assignments, isLoading: assignmentLoading } = useGetAssignmentByVideoIdQuery(id) || {};

    //check student assignment and quiz submission
    const { user } = useSelector(selectAuth) || [{}];

    const { data: quizMarks, } = useGetQuizMarkQuery(user?.id) || {};
    const { data: assignmentMarks } = useGetAssignmentMarkQuery(user?.id) || {};

    const quizSubmitted = quizMarks?.find((mark) => (mark?.video_id === videoId));
    let assignmentSubmitted = false;
    if (!assignmentLoading) {
        assignmentSubmitted = assignmentMarks?.find((mark) => mark?.assignment_id === assignments[0]?.id);
    };

    //date format
    const date = new Date(createdAt);
    const longMonth = date.toLocaleString('en-us', { month: 'long' })
    const formattedDate = date.toDateString().slice(4).split(' ');

    return (
        <>
            {
                isLoading && <VideoLoad />
            }
            {
                (!isLoading && isError) && <Error message={error?.data} />
            }
            {
                (!isLoading && !isError && !video?.id) && <NoData data={"video"} />
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

                        <div className={`flex gap-4 ${quizSubmitted && "justify-between"}`}>
                            {/* assignment */}
                            <div>
                                {
                                    (assignments?.length !== 0 && !assignmentSubmitted)
                                    && <button
                                        onClick={() => setShowModal(true)}
                                        className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                        এসাইনমেন্ট
                                    </button>
                                }
                                {
                                    (assignments?.length !== 0 && assignmentSubmitted)
                                    && <Result result={assignmentSubmitted} />
                                }
                                {
                                    //modal
                                    showModal
                                    && <AssignmentModal assignment={assignments[0]} setShowModal={setShowModal} />
                                }
                            </div>
                            {/* quiz  */}
                            <div>
                                {
                                    (quizzes?.length !== 0 && !quizSubmitted)
                                    && <Link to={`/quiz/${id}`}
                                        className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                        কুইজে অংশগ্রহণ করুন
                                    </Link>
                                }
                                {(quizzes?.length !== 0 && quizSubmitted)
                                    && <div
                                        className="px-3 flex items-center font-bold py-1 border border-teal-600 text-cyan rounded-full text-sm text-teal-400">
                                        <svg stroke="currentColor" fill="currentColor" strokeWidth="0" viewBox="0 0 16 16" className="h-5 w-5" height="1em" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 8a5.5 5.5 0 0 1 8.25-4.764.5.5 0 0 0 .5-.866A6.5 6.5 0 1 0 14.5 8a.5.5 0 0 0-1 0 5.5 5.5 0 1 1-11 0z"></path><path d="M15.354 3.354a.5.5 0 0 0-.708-.708L8 9.293 5.354 6.646a.5.5 0 1 0-.708.708l3 3a.5.5 0 0 0 .708 0l7-7z"></path></svg>
                                        <span className='ml-1'>কুইজ দিয়েছেন</span>
                                    </div>
                                }

                            </div>
                        </div>
                        <p className="mt-4 text-sm text-slate-400 leading-6">
                            {description}
                        </p>

                    </div>
                </>
            }
        </>
    );
};

export default VideoPlayer;