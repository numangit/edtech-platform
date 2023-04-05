import { useGetAssignmentsQuery } from '../../../features/assignment/assignmentApi';
import Error from '../../common/Error';
import Assignment from './Assignment';
const Assignments = () => {

    //getting the assignments
    const { data: assignments, isLoading, isError, error } = useGetAssignmentsQuery() || {};

    //what to render
    let content = null;

    if (isLoading) {
        content = <tr><td className="text-center">Loading...</td></tr>;
    } else if (!isLoading && isError) {
        content = <tr><td><Error message={error?.error} /></td></tr>;
    } else if (!isLoading && !isError && assignments?.length === 0) {
        content = <tr><td className="text-center">No assignments found!</td></tr>;
    } else if (!isLoading && !isError && assignments?.length > 0) {
        content = assignments.map(assignment => <Assignment key={assignment.id} assignment={assignment} />)
    };

    return (
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
    );
};

export default Assignments;