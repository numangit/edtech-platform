import { useParams } from "react-router-dom";
import { useGetQuizByVideoIdQuery } from "../../../features/quiz/quizApi";
import Quiz from './Quiz';
import Error from "../../common/Error";
import Loader from "../../common/loader/Loader";

const QuizForm = () => {

    //getting video id from url
    const { id } = useParams();

    //getting quizzes by videoId
    const { data: quizzes, isLoading, isError, error } = useGetQuizByVideoIdQuery(id) || {};

    return (
        <>
            {
                (isLoading) && <Loader />
            }
            {
                (!isLoading && isError) && <Error message={error?.error} />
            }
            {
                (!isLoading && !isError && quizzes?.length === 0)
                && <tr><td className="text-center">No Quiz found!</td></tr>
            }
            {
                (!isLoading && !isError && quizzes?.length > 0)
                && <div className="space-y-8 ">
                    {
                        quizzes?.map((quiz, index) => <Quiz key={quiz.id} quiz={quiz} index={index} />)
                    }
                    <button
                        className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit
                    </button>
                </div>
            }

        </>
    );
};

export default QuizForm;