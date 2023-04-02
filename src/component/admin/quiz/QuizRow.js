import { useDeleteQuizMutation } from "../../../features/quiz/quizApi";
import DeleteButton from "../../common/DeleteButton";

const QuizRow = ({ quiz }) => {

    //getting delete mutation
    const [deleteQuiz] = useDeleteQuizMutation();

    //destructuring quiz info
    const { id, question, video_title } = quiz || {};

    return (
        <tr>
            <td className="table-td">Quiz {id} -
                {
                    question.length > 60
                        ? question.substring(0, 60) + '..'
                        : question
                }
            </td>
            <td className="table-td">
                {
                    video_title.length > 60
                        ? video_title.substring(0, 60) + '..'
                        : video_title
                }
            </td>
            <td className="table-td flex gap-x-2 justify-center">
                <DeleteButton id={id} mutation={deleteQuiz} />
                <svg fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor"
                    className="w-6 h-6 hover:text-blue-500 cursor-pointer transition-all">
                    <path strokeLinecap="round" strokeLinejoin="round"
                        d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10" />
                </svg>

            </td>
        </tr>
    );
};

export default QuizRow;