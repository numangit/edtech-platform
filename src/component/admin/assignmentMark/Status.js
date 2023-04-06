import { useGetAssignmentMarksQuery } from '../../../features/assignmentMark/assignmentMarkApi';
import Error from '../../common/Error';
import Loader from '../../common/loader/Loader';

const Status = () => {

    //getting the assignment marks
    const { data: marks, isLoading, isError, error } = useGetAssignmentMarksQuery() || {};

    //data to render
    const total = marks?.length;
    const pending = marks?.filter(mark => mark.status === "pending").length;
    const markSent = marks?.filter(mark => mark.status === "published").length;

    return (
        <>
            {
                (isLoading) && <Loader />
            }
            {
                (!isLoading && isError) && <Error message={error?.data} />
            }
            {
                (!isLoading && !isError && marks?.length > 0)
                && <ul className="assignment-status">
                    <li>Total <span>{total}</span></li>
                    <li>Pending <span>{pending}</span></li>
                    <li>Mark Sent <span>{markSent}</span></li>
                </ul>
            }
        </>
    );
};

export default Status;