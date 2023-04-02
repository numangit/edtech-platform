import { useGetQuizzesQuery } from "../../../features/quiz/quizApi";
import QuizRow from "./QuizRow";

const QuizTable = () => {

    //getting the quizzes
    const { data: quizzes, isLoading, isError, error } = useGetQuizzesQuery() || {};

    //what to render
    let content = null;

    if (isLoading) {
        content = <tr><td className="text-center">Loading...</td></tr>;
    } else if (!isLoading && isError) {
        content = <tr><td className="text-center"> {error?.error}</td></tr>;
    } else if (!isLoading && !isError && quizzes?.length === 0) {
        content = <tr><td className="text-center">No quizzes found!</td></tr>;
    } else if (!isLoading && !isError && quizzes?.length > 0) {
        content = quizzes.map(quiz => <QuizRow key={quiz.id} quiz={quiz} />)
    };

    return (
        <div className="overflow-x-auto mt-4">
            <table className="divide-y-1 text-base divide-gray-600 w-full">
                <thead>
                    <tr>
                        <th className="table-th">Question</th>
                        <th className="table-th">Video</th>
                        <th className="table-th justify-center">Action</th>
                    </tr>
                </thead>

                <tbody className="divide-y divide-slate-600/50">
                    {content}
                </tbody>
            </table>
        </div>
    );
};

export default QuizTable;