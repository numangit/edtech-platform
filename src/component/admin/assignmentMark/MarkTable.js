import { useGetAssignmentMarksQuery } from '../../../features/assignmentMark/assignmentMarkApi';
import MarkRow from './MarkRow';

const MarkTable = () => {
    //getting the assignment marks
    const { data: marks, isLoading, isError, error } = useGetAssignmentMarksQuery() || {};

    //what to render
    let content = null;

    if (isLoading) {
        content = <tr><td className="text-center">Loading...</td></tr>;
    } else if (!isLoading && isError) {
        content = <tr><td className="text-center"> {error?.error}</td></tr>;
    } else if (!isLoading && !isError && marks?.length === 0) {
        content = <tr><td className="text-center">No marks found!</td></tr>;
    } else if (!isLoading && !isError && marks?.length > 0) {
        content = marks.map(markData => <MarkRow key={markData.id} markData={markData} />)
    };

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
                {content}
            </tbody>
        </table>
    );
};

export default MarkTable;