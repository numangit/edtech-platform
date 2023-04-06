import React from 'react';
import { useSelector } from 'react-redux';
import { selectAuth } from '../../../features/auth/authSelector';
import useRanksData from '../../../hooks/useRanksData';

const CurrentUserRank = () => {

    //getting rank data
    const ranksData = useRanksData() || [];

    //getting info related to current student
    const { user } = useSelector(selectAuth) || {};

    //current student rank data
    const myRank = ranksData?.find((data) => data?.id === user?.id);
    const { rank, name, totalQuizMark, totalAssignmentMark, total } = myRank || {};

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
                        <td className="table-td text-center">{rank}</td>
                        <td className="table-td text-center">{name}</td>
                        <td className="table-td text-center">{totalQuizMark}</td>
                        <td className="table-td text-center">{totalAssignmentMark}</td>
                        <td className="table-td text-center"> {total} </td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default CurrentUserRank;