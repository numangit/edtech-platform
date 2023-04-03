import React from 'react';
import { useParams } from 'react-router-dom';
import { useGetVideoQuery } from '../../features/videos/videoApi';
import QuizForm from '../../component/student/quizzes/QuizForm';

const Quizzes = () => {

    //getting video id from url
    const { id } = useParams();

    //getting video data
    const { data: video, isLoading: isTitleLoading } = useGetVideoQuery(id) || {};
    const { title } = video || {};

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
                    <QuizForm />
                </div>
            </div>
        </section>
    );
};

export default Quizzes;