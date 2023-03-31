import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../features/auth/authSelector';
import { useGetQuizMarkQuery } from '../../../features/quizMark/quizMarkApi';

const StudentRank = () => {

    //getting info related to current student
    const { user: { id, name } } = useSelector(selectAuth) || {};

    //getting student quiz mark
    const { data: quizMarks } = useGetQuizMarkQuery(id) || {};
    const totalQuizMark = quizMarks?.reduce((total, current) => total + current.totalMark, 0);

    //getting student quiz mark
    const { data: quizMarks } = useGetQuizMarkQuery(id) || {};
    const totalQuizMark = quizMarks?.reduce((total, current) => total + current.totalMark, 0);

    return (
        <div>
            <h3 className="text-lg font-bold">Your Position in Leaderboard</h3>
            <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
                <thead>
                    <tr>
                        <th className="table-th !text-center">Rank</th>
                        <th className="table-th !text-center">Name</th>
                        <th className="table-th !text-center">Quiz Mark</th>
                        <th className="table-th !text-center">Assignment Mark</th>
                        <th className="table-th !text-center">Total</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-2 border-cyan">
                        <td className="table-td text-center font-bold">4</td>
                        <td className="table-td text-center font-bold">{name}</td>
                        <td className="table-td text-center font-bold">{totalQuizMark}</td>
                        <td className="table-td text-center font-bold">50</td>
                        <td className="table-td text-center font-bold">100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StudentRank;