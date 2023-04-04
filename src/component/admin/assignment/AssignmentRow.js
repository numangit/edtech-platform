import { useDeleteAssignmentMutation } from "../../../features/assignment/assignmentApi";
import DeleteButton from "../../common/DeleteButton";
import EditButton from "./EditButton";

const AssignmentRow = ({ assignment }) => {

    //getting delete mutation
    const [deleteAssignment] = useDeleteAssignmentMutation();

    //destructuring assignment info
    const { id, title, totalMark, video_title } = assignment || {};

    return (
        <tr>
            <td className="table-td">{title}</td>
            <td className="table-td">{video_title}</td>
            <td className="table-td">{totalMark}</td>
            <td className="flex gap-x-2 justify-center text-gray-500">
                <DeleteButton id={id} mutation={deleteAssignment} />
                <EditButton id={id} />
            </td>
        </tr>
    );
};

export default AssignmentRow;