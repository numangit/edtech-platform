import React from 'react';
import { useGetVideoQuery } from '../../../features/videos/videoApi';
import { Link, useParams } from 'react-router-dom';
import { useGetQuizByVideoIdQuery } from '../../../features/quiz/quizApi';
import { useGetAssignmentByVideoIdQuery } from '../../../features/assignment/assignmentApi';

const VideoPlayer = () => {

    //getting the video id from url 
    const { id } = useParams();

    //getting video data
    const { data: video, isLoading, isError, error } = useGetVideoQuery(id) || {};
    const { title, createdAt, description, url } = video || {};

    //getting quizzes by videoId
    const { data: quizzes, } = useGetQuizByVideoIdQuery(id) || {};

    //getting assignments by videoId
    const { data: assignments, } = useGetAssignmentByVideoIdQuery(id) || {};

    //date format
    const longMonth = new Date(createdAt).toLocaleString('en-us', { month: 'long' })
    const date = new Date(createdAt).toDateString().slice(4).split(' ');

    return (
        <div className="col-span-full w-full space-y-8 lg:col-span-2">
            {
                isLoading && <div className="text-center">Loading...</div>
            }
            {
                (!isLoading && isError)
                && <div className="text-center"> {error?.error}</div>
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
                            Uploaded on {date[1]} {longMonth} {date[2]}
                        </h2>

                        <div className="flex gap-4">
                            {
                                assignments?.length !== 0
                                && <Link to="/"
                                    className="px-3 font-bold py-1 border border-cyan text-cyan rounded-full text-sm hover:bg-cyan hover:text-primary">
                                    এসাইনমেন্ট
                                </Link>
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