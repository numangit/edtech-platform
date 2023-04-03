import { useParams } from "react-router-dom";
import { useGetVideoQuery } from "../../../features/videos/videoApi";

const QuizHeader = () => {

    //getting video id from url
    const { id } = useParams();

    //getting video data
    const { data: video, isLoading } = useGetVideoQuery(id) || {};
    const { title } = video || {};
    return (
        <>
            {
                !isLoading &&
                <div className="mb-8">
                    <h1 className="text-2xl font-bold">Quizzes for "{title}"</h1>
                    <p className="text-sm text-slate-200">Each question contains 5 Mark</p>
                </div>
            }
        </>
    );
};

export default QuizHeader;