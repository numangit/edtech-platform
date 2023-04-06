import { useGetAssignmentsQuery } from '../../../features/assignment/assignmentApi';
import Error from '../../common/Error';
import TableLoader from '../../common/loader/TableLoader';
import Assignment from './Assignment';
const Assignments = () => {

    //getting the assignments
    const { data: assignments, isLoading, isError, error } = useGetAssignmentsQuery() || {};

    return (
        <>
            {
                (isLoading) && <TableLoader />
            }
            {
                (!isLoading && isError) && <Error message={error?.error} />
            }
            {
                (!isLoading && !isError && assignments?.length === 0)
                && <tr><td className="text-center">No videos found!</td></tr>
            }
            {
                (!isLoading && !isError && assignments?.length > 0)
                && <table className="divide-y-1 text-base divide-gray-600 w-full">
                    <thead>
                        <tr>
                            <th className="table-th">Title</th>
                            <th className="table-th">Video Title</th>
                            <th className="table-th">Mark</th>
                            <th className="table-th">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-600/50">
                        {
                            assignments?.map(assignment => <Assignment key={assignment.id} assignment={assignment} />)
                        }
                    </tbody>
                </table>
            }

        </>
    );
};

export default Assignments;