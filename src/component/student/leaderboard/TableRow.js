import { useGetAssignmentMarkQuery } from "../../../features/assignmentMark/assignmentMarkApi";
import { useGetQuizMarkQuery } from "../../../features/quizMark/quizMarkApi";

const TableRow = ({ user }) => {

    const { id } = user || {};

    //getting student quiz mark
    const { data: quizMarks, isLoading: isQuizLoading } = useGetQuizMarkQuery(id) || {};
    const totalQuizMark = quizMarks?.reduce((total, current) => total + current.mark, 0);

    //getting student assignment mark
    const { data: assignmentMarks, isLoading: isAssignmentLoading } = useGetAssignmentMarkQuery(id) || {};
    const totalAssignmentMark = assignmentMarks?.reduce((total, current) => total + current.mark, 0);

    //calculate grand total
    const grandTotal = totalQuizMark || 0 + totalAssignmentMark || 0;

    return (
        <tr className="border-b border-slate-600/50">
            <td className="table-td text-center">4</td>
            <td className="table-td text-center">{user.name}</td>
            <td className="table-td text-center">
                {isQuizLoading ? 'loading..' : totalQuizMark}
            </td>
            <td className="table-td text-center">
                {isAssignmentLoading ? 'loading..' : totalAssignmentMark}
            </td>
            <td className="table-td text-center">
                {isQuizLoading && isAssignmentLoading ? 'loading..' : grandTotal}
            </td>
        </tr>
    );
};

export default TableRow;