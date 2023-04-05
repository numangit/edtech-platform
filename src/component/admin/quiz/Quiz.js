import { useDeleteQuizMutation } from "../../../features/quiz/quizApi";
import DeleteButton from "../../common/DeleteButton";
import EditButton from "./EditButton";

const Quiz = ({ quiz }) => {

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
            <td className="flex gap-x-2 justify-center text-gray-500">
                <DeleteButton id={id} mutation={deleteQuiz} />
                <EditButton id={id} />
            </td>
        </tr>
    );
};

export default Quiz;