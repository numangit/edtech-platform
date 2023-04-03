import { useState } from "react";
import AssignmentModal from "./AssignmentModal";

const AddAssignment = () => {

    //toggle state
    const [showModal, setShowModal] = useState(false);

    return (
        <div className="w-full flex">
            <button
                onClick={() => setShowModal(true)}
                className="btn ml-auto">
                Add Assignment
            </button>
            {
                //modal
                showModal
                && <AssignmentModal setShowModal={setShowModal} />
            }
        </div>
    );
};

export default AddAssignment;