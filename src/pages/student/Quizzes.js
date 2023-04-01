import React from 'react';
import Quiz from '../../component/student/quizzes/Quiz';
import { useParams } from 'react-router-dom';
import { useGetQuizByVideoIdQuery } from '../../features/quiz/quizApi';
import { useGetVideoQuery } from '../../features/videos/videoApi';

const Quizzes = () => {

    //getting video id from url
    const { id } = useParams();

    //getting quizzes by videoId
    const { data: quizzes, isLoading, isError, error } = useGetQuizByVideoIdQuery(id) || {};

    //getting video data
    const { data: video, isLoading: isTitleLoading } = useGetVideoQuery(id) || {};
    const { title } = video || {};

    //what to render
    let content = null;

    if (isLoading) {
        content = <div className="text-center">Loading...</div>;
    } else if (!isLoading && isError) {
        content = <div className="text-center"> {error?.error}</div>;
    } else if (!isLoading && !isError && quizzes?.length > 0) {
        content = quizzes?.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
    };

    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-7xl px-5 lg:px-0">
                {
                    !isTitleLoading
                    && <div className="mb-8">
                        <h1 className="text-2xl font-bold">Quizzes for "{title}"</h1>
                        <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
                    </div>
                }

                <div className="space-y-8 ">
                    {content}
                </div>

                <button
                    className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit</button>
            </div>
        </section>
    );
};

export default Quizzes;