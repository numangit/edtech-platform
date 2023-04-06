const Rank = ({ rankData }) => {

    const { rank, name, totalQuizMark, totalAssignmentMark, total } = rankData || {};

    return (
        <tr className="border-b border-slate-600/50">
            <td className="table-td text-center">{rank}</td>
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