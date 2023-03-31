import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../features/auth/authSelector';
import { useGetUsersQuery } from '../../../features/users/usersApi';
import { useGetAssignmentMarkQuery } from '../../../features/assignmentMark/assignmentMarkApi';
import { useGetQuizMarksQuery } from '../../../features/quizMark/quizMarkApi';
import { current } from '@reduxjs/toolkit';
import TableRow from './TableRow';

const StudentsRankList = () => {

    //get all users
    const { data: users, isLoading: isUsersLoading } = useGetUsersQuery() || {};

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
                    {
                        users?.map(user => {
                            return <TableRow key={user?.id} user={user} />
                        })
                    }
                </tbody>
            </table>
        </div>
    );
};
export default StudentsRankList;

