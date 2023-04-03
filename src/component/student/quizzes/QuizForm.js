import { useParams } from "react-router-dom";
import { useGetQuizByVideoIdQuery } from "../../../features/quiz/quizApi";
import Quiz from './Quiz';

const QuizForm = () => {

    //getting video id from url
    const { id } = useParams();

    //getting quizzes by videoId
    const { data: quizzes, isLoading, isError, error } = useGetQuizByVideoIdQuery(id) || {};

    //what to render
    let content = null;

    if (isLoading) {
        content = <div className="text-center">Loading...</div>;
    } else if (!isLoading && isError) {
        content = <div className="text-center"> {error?.error}</div>;
    } else if (!isLoading && !isError && quizzes?.length > 0) {
        content = quizzes?.map((quiz, index) => <Quiz key={quiz.id} quiz={quiz} index={index} />)
    };

    return (
        <form>
            {content}
            <button
                className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit
            </button>
        </form>
    );
};

export default QuizForm;