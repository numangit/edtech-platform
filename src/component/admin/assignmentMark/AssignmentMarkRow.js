import { useState } from "react";
import { useUpdateAssignmentMarkMutation } from "../../../features/assignmentMark/assignmentMarkApi";

const AssignmentMarkRow = ({ markData }) => {

    //hooks
    const [updateAssignmentMark] = useUpdateAssignmentMarkMutation();

    //input state
    const [newMark, setNewMark] = useState(0);

    //destructuring assignment details 
    const { id, student_name, title, createdAt, repo_link, status, mark } = markData || {};

    //date format
    const date = new Date(createdAt);
    const submitDate = date.toDateString().split(' ');
    const submitTime = date.toLocaleTimeString();

    //function to handle mark update
    const handleMark = () => {
        const data = { status: "published", mark: Number(newMark) }
        updateAssignmentMark({ id, data });
    };

    return (
        <tr>
            <td className="table-td">{title}</td>
            <td className="table-td">{`${submitDate[2]} ${submitDate[1]} ${submitDate[3]} ${submitTime}`}</td>
            <td className="table-td">{student_name}</td>
            <td className="table-td">{repo_link}</td>
            {
                status === "pending"
                && <td className="table-td input-mark">
                    <input max="100" value={newMark} onChange={(e) => setNewMark(e.target.value)} />
                    <button onClick={handleMark}>
                        <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                            className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                d="M4.5 12.75l6 6 9-13.5" />
                        </svg>
                    </button>
                </td>
            }
            {
                status === "published" && <td className="table-td">{mark}</td>
            }
        </tr >
    );
};

export default AssignmentMarkRow;