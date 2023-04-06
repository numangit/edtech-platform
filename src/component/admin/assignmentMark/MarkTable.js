import { useGetAssignmentMarksQuery } from '../../../features/assignmentMark/assignmentMarkApi';
import Error from '../../common/Error';
import TableLoader from '../../common/loader/TableLoader';
import MarkRow from './MarkRow';

const MarkTable = () => {

    //getting the assignment marks
    const { data: marks, isLoading, isError, error } = useGetAssignmentMarksQuery() || {};

    return (
        <>
            {
                (isLoading) && <TableLoader />
            }
            {
                (!isLoading && isError) && <Error message={error?.error} />
            }
            {
                (!isLoading && !isError && marks?.length === 0)
                && <tr><td className="text-center">No videos found!</td></tr>
            }
            {
                (!isLoading && !isError && marks?.length > 0)
                && <table className="divide-y-1 text-base divide-gray-600 w-full">
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
                        {
                            marks?.map(markData => <MarkRow key={markData.id} markData={markData} />)
                        }
                    </tbody>
                </table>
            }

        </>
    );
};

export default MarkTable;