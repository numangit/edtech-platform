import AssignmentMarkRow from './AssignmentMarkRow';

const AssignmentMarkTable = () => {
    return (
        <table className="divide-y-1 text-base divide-gray-600 w-full">
            <thead>
                <tr>
                    <th className="table-th">Assignment</th>
                    <th className="table-th">Date</th>
                    <th className="table-th">Student Name</th>
                    <th className="table-th">Repo Link</th>
                    <th className="table-th">Mark</th>
                </tr>
            </thead>

            <tbody className="divide-y divide-slate-600/50">
                <AssignmentMarkRow />
                <tr>
                    <td className="table-td">Assignment 2 - Implement Best Practices</td>
                    <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                    <td className="table-td">Akash Ahmed</td>
                    <td className="table-td">https://github.com/Learn-with-Sumit/assignment-1</td>
                    <td className="table-td">50</td>
                </tr>
                <tr>
                    <td className="table-td">Assignment 1 - Scoreboard Application</td>
                    <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                    <td className="table-td">Ferdous</td>
                    <td className="table-td">https://github.com/Learn-with-Sumit/assignment-1</td>
                    <td className="table-td">100</td>
                </tr>
                <tr>
                    <td className="table-td">Assignment 1 - Scoreboard Application</td>
                    <td className="table-td">10 Mar 2023 10:58:13 PM</td>
                    <td className="table-td">Saad Hasan</td>
                    <td className="table-td">https://github.com/Learn-with-Sumit/assignment-1</td>
                    <td className="table-td">100</td>
                </tr>
            </tbody>
        </table>
    );
};

export default AssignmentMarkTable;