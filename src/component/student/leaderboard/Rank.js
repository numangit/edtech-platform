import { useSelector } from "react-redux";
import { selectAuth } from "../../../features/auth/authSelector";

const Rank = ({ rankData }) => {

    const { id, rank, name, totalQuizMark, totalAssignmentMark, total } = rankData || {};

    //getting info related to current student
    const { user } = useSelector(selectAuth) || {};

    return (
        <tr
            className={
                `${user?.id === id
                    ? "bg-sky-950 font-semibold"
                    : "border-b border-slate-600/50"}`
            }>
            <td className="table-td text-center">{rank === 1 ? "🏆" : rank}</td>
            <td className="table-td text-center">{name}</td>
            <td className="table-td text-center">
                {totalQuizMark}
            </td>
            <td className="table-td text-center">
                {totalAssignmentMark}
            </td>
            <td className="table-td text-center"> {total} </td>
        </tr>
    );
};

export default Rank;