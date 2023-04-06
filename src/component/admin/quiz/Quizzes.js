import { useGetQuizzesQuery } from "../../../features/quiz/quizApi";
import Error from "../../common/Error";
import TableLoader from "../../common/loader/TableLoader";
import Quiz from "./Quiz";

const Quizzes = () => {

    //getting the quizzes
    const { data: quizzes, isLoading, isError, error } = useGetQuizzesQuery() || {};

    return (
        <>
            {
                (isLoading) && <TableLoader />
            }
            {
                (!isLoading && isError) && <Error message={error?.error} />
            }
            {
                (!isLoading && !isError && quizzes?.length === 0)
                && <tr><td className="text-center">No videos found!</td></tr>
            }
            {
                (!isLoading && !isError && quizzes?.length > 0)
                && <table className="divide-y-1 text-base divide-gray-600 w-full">
                    <thead>
                        <tr>
                            <th className="table-th">Question</th>
                            <th className="table-th">Video</th>
                            <th className="table-th justify-center">Action</th>
                        </tr>
                    </thead>

                    <tbody className="divide-y divide-slate-600/50">
                        {
                            quizzes?.map(quiz => <Quiz key={quiz.id} quiz={quiz} />)
                        }
                    </tbody>
                </table>
            }

        </>

    );
};

export default Quizzes;