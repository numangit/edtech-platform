import { useGetAssignmentMarkQuery } from "../../../features/assignmentMark/assignmentMarkApi";
import { useGetQuizMarkQuery } from "../../../features/quizMark/quizMarkApi";

const TableRow = ({ student }) => {

    const { id, name } = student || {};

    //getting student quiz mark
    const { data: quizMarks, isLoading: isQuizLoading } = useGetQuizMarkQuery(id) || {};
    const totalQuizMark = quizMarks?.reduce((total, current) => total + current.mark, 0);

    //getting student assignment mark
    const { data: assignmentMarks, isLoading: isAssignmentLoading } = useGetAssignmentMarkQuery(id) || {};
    const totalAssignmentMark = assignmentMarks?.reduce((total, current) => total + current.mark, 0);

    //calculate grand total
    const grandTotal = totalQuizMark + totalAssignmentMark;

    return (
        <tr className="border-b border-slate-600/50">
            <td className="table-td text-center">4</td>
            <td className="table-td text-center">{name}</td>
            <td className="table-td text-center">
                {isQuizLoading ? 'loading..' : totalQuizMark}
            </td>
            <td className="table-td text-center">
                {isAssignmentLoading ? 'loading..' : totalAssignmentMark}
            </td>
            <td className="table-td text-center">
                {isNaN(grandTotal) ? 'loading..' : grandTotal}
            </td>
        </tr>
    );
};

export default TableRow;