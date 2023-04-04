import { useState } from "react";
import { useGetVideosQuery } from "../../../features/videos/videoApi";
import { useAddAssignmentMutation } from "../../../features/assignment/assignmentApi";

const AssignmentModal = ({ setShowModal }) => {

    //getting the videos
    const { data: videos } = useGetVideosQuery() || {};

    //get mutation
    const [addAssignment] = useAddAssignmentMutation();

    //form input states
    const [title, setTitle] = useState('');
    const [video, setVideo] = useState('');
    const [totalMark, setTotalMark] = useState('');

    //function to handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const parsedVideo = JSON.parse(video);
        const data = {
            title,
            totalMark,
            video_id: parsedVideo.id,
            video_title: parsedVideo.title
        };
        const confirmation = window.confirm("Are you sure?");
        confirmation && addAssignment(data);
        confirmation && setShowModal(false);
    };

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm"
            >
                <div className="relative my-6 w-2/5">
                    <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-slate-900 outline-none focus:outline-none p-3">
                        {/*header*/}
                        <div className="flex items-start justify-between rounded-t">
                            <button
                                className="p-1 ml-auto bg-transparent border-0 text-slate-300 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                onClick={() => setShowModal(false)}
                            >
                                <span className="bg-transparent text-white h-6 w-6 text-2xl block outline-none focus:outline-none">
                                    ×
                                </span>
                            </button>
                        </div>
                        {/*body*/}
                        <div className="relative mx-2 my-1 flex-auto">

                            <h3 className="text-xl font-semibold mb-4">
                                Add <span className="text-sky-500 ">Assignment</span>
                            </h3>

                            <form onSubmit={handleSubmit}>
                                <div className="my-1">
                                    <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">Select Video</label>
                                    <select
                                        name="video"
                                        id="video"
                                        className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none"
                                        value={video}
                                        onChange={(e) => setVideo(e.target.value)}
                                    >
                                        <option hidden defaultValue>select</option>
                                        {
                                            videos?.map((video) => <option key={video?.id} value={JSON.stringify(video)}>{video?.title}</option>)
                                        }
                                    </select>
                                </div>
                                <div className="my-1">
                                    <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">Assignment Title</label>
                                    <input
                                        id="title"
                                        type="text"
                                        name="title"
                                        className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none "
                                        required
                                        value={title}
                                        onChange={(e) => setTitle(e.target.value)}
                                    />
                                </div>
                                <div className="my-1">
                                    <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">Total Mark</label>
                                    <input
                                        id="mark"
                                        type="number"
                                        name="mark"
                                        className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none "
                                        required
                                        value={totalMark}
                                        onChange={(e) => setTotalMark(e.target.value)}
                                    />
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="border border-cyan items-center text-white bg-sky-500 px-4 py-2 rounded-full text-base font-semibold hover:bg-cyan hover:text-white mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
                                    >
                                        Add Assignment
                                    </button>
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default AssignmentModal;