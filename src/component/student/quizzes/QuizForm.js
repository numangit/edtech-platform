import { useNavigate, useParams } from "react-router-dom";
import { useGetQuizByVideoIdQuery } from "../../../features/quiz/quizApi";
import Quiz from './Quiz';
import Error from "../../common/Error";
import Loader from "../../common/loader/Loader";
import NoData from "../../common/NoData";
import { useState } from "react";
import { useAddQuizMarkMutation } from "../../../features/quizMark/quizMarkApi";
import { useSelector } from "react-redux";
import { selectAuth } from "../../../features/auth/authSelector";
import { useGetVideoQuery } from "../../../features/videos/videoApi";
import { checkAnswers } from "../../../utils/checkAnswers";

const QuizForm = () => {

    //get video id from url
    const { id } = useParams();
    const navigate = useNavigate();

    //get required data
    const { data: video } = useGetVideoQuery(id) || {};
    const { data: quizzes, isLoading, isError, error } = useGetQuizByVideoIdQuery(id) || {};
    const { user } = useSelector(selectAuth) || {};

    //get mutation
    const [addQuizMark] = useAddQuizMarkMutation();

    //state for quiz answers
    const [answers, setAnswers] = useState([]);

    // function to handle submit
    const handleSubmit = () => {

        const { mark, totalWrong, totalCorrect } = checkAnswers(answers, quizzes);

        //data
        const data = {
            student_id: user?.id,
            student_name: user?.name,
            video_id: video?.id,
            video_title: video?.title,
            totalQuiz: quizzes?.length,
            totalCorrect,
            totalWrong,
            totalMark: quizzes?.length * 5,
            mark: mark
        };

        if (window.confirm("Are you sure?")) {
            addQuizMark(data);
            navigate(`/course/videos/${id}`);
        };
    };

    return (
        <>
            {
                (isLoading) && <Loader />
            }
            {
                (!isLoading && isError) && <Error message={error?.data} />
            }
            {
                (!isLoading && !isError && quizzes?.length === 0)
                && <NoData data={"quizzes"} />
            }
            {
                (!isLoading && !isError && quizzes?.length > 0)
                && <div className="space-y-8 ">
                    {
                        quizzes?.map((quiz, index) => <Quiz key={quiz?.id} quiz={quiz} setAnswers={setAnswers} answers={answers} index={index} />)
                    }
                    <button onClick={handleSubmit}
                        className="px-4 py-2 rounded-full bg-cyan block ml-auto mt-8 hover:opacity-90 active:opacity-100 active:scale-95 ">Submit
                    </button>
                </div>
            }

        </>
    );
};

export default QuizForm;