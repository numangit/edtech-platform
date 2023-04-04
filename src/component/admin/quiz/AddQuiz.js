import { useState } from "react";
import QuizModal from "./QuizModal";

const AddQuiz = () => {

    //toggle state
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="w-full flex">
            <button
                onClick={() => setShowModal(true)}
                className="btn ml-auto">
                Add Video
            </button>
            {
                //modal
                showModal
                && <QuizModal setShowModal={setShowModal} />
            }
        </div>
    );
};

export default AddQuiz;