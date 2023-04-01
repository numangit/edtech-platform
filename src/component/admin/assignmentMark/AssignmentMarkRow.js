const AssignmentMarkRow = ({ markData }) => {

    //destructuring video info
    const { id, student_id, student_name, assignment_id, title, createdAt, repo_link, status, mark } = markData || {};

    //date format
    const date = new Date(createdAt);
    const fullDate = date.toDateString().split(' ');
    const day = fullDate[2];
    const month = fullDate[1];
    const year = fullDate[3];
    const time = date.toLocaleTimeString();

    return (
        <tr>
            <td className="table-td">{title}</td>
            <td className="table-td">{`${day} ${month} ${year} ${time}`}</td>
            <td className="table-td">{student_name}</td>
            <td className="table-td">{repo_link}</td>
            {
                status === "pending" && <td
                    className="table-td input-mark">
                    <input max="100" value="100" />
                    <svg fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor"
                        className="w-6 h-6 text-green-500 cursor-pointer hover:text-green-400">
                        <path strokeLinecap="round" strokeLinejoin="round"
                            d="M4.5 12.75l6 6 9-13.5" />
                    </svg>
                </td>
            }
            {
                status === "published" && <td className="table-td">{mark}</td>
            }
        </tr >
    );
};

export default AssignmentMarkRow;