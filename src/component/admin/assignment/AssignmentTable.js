import { useGetAssignmentsQuery } from '../../../features/assignment/assignmentApi';
import AssignmentRow from './AssignmentRow';

const AssignmentTable = () => {

    //getting the assignments
    const { data: assignments, isLoading, isError, error } = useGetAssignmentsQuery() || {};

    //what to render
    let content = null;

    if (isLoading) {
        content = <tr><td className="text-center">Loading...</td></tr>;
    } else if (!isLoading && isError) {
        content = <tr><td className="text-center"> {error?.error}</td></tr>;
    } else if (!isLoading && !isError && assignments?.length === 0) {
        content = <tr><td className="text-center">No assignments found!</td></tr>;
    } else if (!isLoading && !isError && assignments?.length > 0) {
        content = assignments.map(assignment => <AssignmentRow key={assignment.id} assignment={assignment} />)
    };

    return (
        <div className="overflow-x-auto mt-4">
            <table className="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                    <tr>
                        <th className="table-th">Title</th>
                        <th className="table-th">Video Title</th>
                        <th className="table-th">Mark</th>
                        <th className="table-th">Action</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-slate-600/50">
                    {content}
                </tbody>
            </table>
        </div>
    );
};

export default AssignmentTable;