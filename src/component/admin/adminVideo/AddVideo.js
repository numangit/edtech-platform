import { useState } from "react";
import VideoModal from "./VideoModal";

const AddVideo = () => {

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
                && <VideoModal setShowModal={setShowModal} />
            }
        </div>
    );
};

export default AddVideo;