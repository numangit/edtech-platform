import { useState } from "react";
import AddModal from "./AddModal";

const AddButton = () => {

    //toggle state
    const [showModal, setShowModal] = useState(false);

    return (
        <>
            <button
                onClick={() => setShowModal(true)}
                className="btn ml-auto">
                Add Video
            </button>
            {
                //modal
                showModal
                && <AddModal setShowModal={setShowModal} />
            }
        </>
    );
};


export default AddButton;