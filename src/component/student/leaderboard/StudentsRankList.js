import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../features/auth/authSelector';

const StudentsRankList = () => {

    //getting info related to current student
    const { user } = useSelector(selectAuth) || {};
    const { id, name } = user || {};

    //getting student quiz mark
    const { data: quizMarks, isLoading: isQuizLoading } = useGetQuizMarkQuery(id) || {};
    const totalQuizMark = quizMarks?.reduce((total, current) => total + current.mark, 0);

    //getting student assignment mark
    const { data: assignmentMarks, isLoading: isAssignmentLoading } = useGetAssignmentMarkQuery(id) || {};
    const totalAssignmentMark = assignmentMarks?.reduce((total, current) => total + current.mark, 0);

    //calculate grand total
    const grandTotal = totalQuizMark || 0 + totalAssignmentMark || 0

    return (
        <div className="my-8">
            <h3 className="text-lg font-bold">Top 20 Result</h3>
            <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
                <thead>
                    <tr className="border-b border-slate-600/50">
                        <th className="table-th !text-center">Rank</th>
                        <th className="table-th !text-center">Name</th>
                        <th className="table-th !text-center">Quiz Mark</th>
                        <th className="table-th !text-center">Assignment Mark</th>
                        <th className="table-th !text-center">Total</th>
                    </tr>
                </thead>

                <tbody>
                    <tr className="border-b border-slate-600/50">
                        <td className="table-td text-center">4</td>
                        <td className="table-td text-center">Saad Hasan</td>
                        <td className="table-td text-center">50</td>
                        <td className="table-td text-center">50</td>
                        <td className="table-td text-center">100</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default StudentsRankList;