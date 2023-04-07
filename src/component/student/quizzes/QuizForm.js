import { useParams } from "react-router-dom";
import { useGetQuizByVideoIdQuery } from "../../../features/quiz/quizApi";
import Quiz from './Quiz';
import Error from "../../common/Error";
import Loader from "../../common/loader/Loader";
import NoData from "../../common/NoData";
import { useState } from "react";

const QuizForm = () => {

    //getting video id from url
    const { id } = useParams();

    //getting quizzes by videoId
    const { data: quizzes, isLoading, isError, error } = useGetQuizByVideoIdQuery(id) || {};

    //form input states
    const [answers, setAnswers] = useState([]);
    console.log(answers);

    //function to collection answers
    // const getAnswers = ( option, quizId) => {
    // };

    //check if answers are correct
    // function to handle submit
    const handleSubmit = () => {

    }


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
                        quizzes?.map((quiz, index) => <div key={quiz?.id} className="quiz my-8">
                            <h4 className="question">Quiz {index + 1} - {quiz?.question}</h4>
                            <form className="quizOptions">
                                {
                                    quiz?.options?.map(option => <label
                                        key={option?.id}
                                        htmlFor={`option${option?.id}_q${quiz?.id}`}>
                                        <input
                                            type="checkbox"
                                            id={`option${option?.id}_q${quiz?.id}`}
                                            // onClick={(e) => getAnswers(e, option, quiz?.id)}
                                            onChange={() => {
                                                //check if quiz is selected
                                                console.log("check:", answers)
                                                const quizAnswers = answers?.find((answer) => answer?.quizId === quiz?.id);
                                                const quizOptions = quizAnswers?.options?.find((answer) => answer?.id === option?.id);

                                                console.log("quiz:", quizAnswers, "option:", quizOptions)
                                                if (!quizAnswers) {
                                                    const newQuizAnswers = { quizId: quiz?.id, options: [{ ...option }] }
                                                    setAnswers([...answers, newQuizAnswers]);
                                                } else if (quizAnswers && !quizOptions) {
                                                    const newQuizAnswers = answers?.map((answer) => {
                                                        if (answer?.quizId === quiz?.id) {
                                                            return { ...quizAnswers, options: [...quizAnswers.options, { ...option }] }
                                                        };
                                                        return answer;
                                                    });
                                                    setAnswers(newQuizAnswers);
                                                } else if (quizAnswers && quizOptions) {

                                                    const newQuizAnswers = answers?.map((answer) => {
                                                        if (answer?.quizId === quiz?.id) {
                                                            const newOptions = answer?.options?.filter((submittedOption) => submittedOption?.id !== option?.id)
                                                            return {
                                                                ...answer,
                                                                options: newOptions
                                                            }
                                                        };
                                                        return answer;
                                                    });

                                                    setAnswers(newQuizAnswers);
                                                }

                                            }}
                                        />
                                        {option?.option}
                                    </label>)
                                }
                            </form>
                        </div>)
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