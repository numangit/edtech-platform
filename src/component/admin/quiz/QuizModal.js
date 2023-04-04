import { useState } from "react";
import { useGetVideosQuery } from "../../../features/videos/videoApi";

const QuizModal = ({ setShowModal }) => {

    //getting the videos
    const { data: videos } = useGetVideosQuery() || {};

    //form input states
    const [question, setQuestion] = useState('');
    const [video, setVideo] = useState('');
    const [option1, setOption1] = useState({ id: 1, option: "", isCorrect: true });
    const [option2, setOption2] = useState({ id: 2, option: "", isCorrect: true });
    const [option3, setOption3] = useState({ id: 3, option: "", isCorrect: true });
    const [option4, setOption4] = useState({ id: 4, option: "", isCorrect: true });


    //function to handle submit
    const handleSubmit = (e) => {
        e.preventDefault();
        const parsedVideo = JSON.parse(video);
        const data = {
            question,
            video_id: parsedVideo.id,
            video_title: parsedVideo.title,
            options: [option1, option2, option3, option4]
        };
        const confirmation = window.confirm("Are you sure?");
        confirmation && console.log(data);
        // confirmation && addAssignment(data);
        // confirmation && setShowModal(false);
    };

    return (
        <>
            <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm" >
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
                                Add <span className="text-sky-500 ">Quiz</span>
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
                                    <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">Question</label>
                                    <input
                                        id="question"
                                        type="text"
                                        name="question"
                                        className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none"
                                        required
                                        value={question}
                                        onChange={(e) => setQuestion(e.target.value)}
                                    />
                                </div>
                                {/* option 1  */}
                                <div className="my-1 flex w-full">
                                    <div className="mx-0.5">
                                        <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">Option 1</label>
                                        <input
                                            id="question"
                                            type="text"
                                            name="question"
                                            className="p-2 text-white bg-slate-800 w-[390px] rounded-md my-2 focus:outline-none"
                                            required
                                            value={option1.option}
                                            onChange={(e) => setOption1({ ...option1, option: e.target.value })}
                                        />
                                    </div>
                                    <div className="mx-0.5">
                                        <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">status</label>
                                        <select
                                            name="video"
                                            id="video"
                                            className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none"
                                            onChange={(e) => setOption1({ ...option1, isCorrect: JSON.parse(e.target.value) })}
                                        >
                                            <option hidden defaultValue>select</option>
                                            <option value={true}>correct</option>
                                            <option value={false}>wrong</option>
                                        </select>
                                    </div>
                                </div>
                                {/* option 2  */}
                                <div className="my-1 flex w-full">
                                    <div className="mx-0.5">
                                        <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">Option 2</label>
                                        <input
                                            id="question"
                                            type="text"
                                            name="question"
                                            className="p-2 text-white bg-slate-800 w-[390px] rounded-md my-2 focus:outline-none"
                                            required
                                            value={option2.option}
                                            onChange={(e) => setOption2({ ...option2, option: e.target.value })}
                                        />
                                    </div>
                                    <div className="mx-0.5">
                                        <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">status</label>
                                        <select
                                            name="video"
                                            id="video"
                                            className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none"
                                            onChange={(e) => setOption2({ ...option2, isCorrect: JSON.parse(e.target.value) })}
                                        >
                                            <option hidden defaultValue>select</option>
                                            <option value={true}>correct</option>
                                            <option value={false}>wrong</option>
                                        </select>
                                    </div>
                                </div>
                                {/* option 3  */}
                                <div className="my-1 flex w-full">
                                    <div className="mx-0.5">
                                        <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">Option 3</label>
                                        <input
                                            id="question"
                                            type="text"
                                            name="question"
                                            className="p-2 text-white bg-slate-800 w-[390px] rounded-md my-2 focus:outline-none"
                                            required
                                            value={option3.option}
                                            onChange={(e) => setOption3({ ...option3, option: e.target.value })}
                                        />
                                    </div>
                                    <div className="mx-0.5">
                                        <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">status</label>
                                        <select
                                            name="video"
                                            id="video"
                                            className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none"
                                            onChange={(e) => setOption3({ ...option3, isCorrect: JSON.parse(e.target.value) })}
                                        >
                                            <option hidden defaultValue>select</option>
                                            <option value={true}>correct</option>
                                            <option value={false}>wrong</option>
                                        </select>
                                    </div>
                                </div>
                                {/* option 4  */}
                                <div className="my-1 flex w-full">
                                    <div className="mx-0.5">
                                        <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">Option 4</label>
                                        <input
                                            id="question"
                                            type="text"
                                            name="question"
                                            className="p-2 text-white bg-slate-800 w-[390px] rounded-md my-2 focus:outline-none"
                                            required
                                            value={option4.option}
                                            onChange={(e) => setOption4({ ...option4, option: e.target.value })}
                                        />
                                    </div>
                                    <div className="mx-0.5">
                                        <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">status</label>
                                        <select
                                            name="video"
                                            id="video"
                                            className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none"
                                            onChange={(e) => setOption4({ ...option4, isCorrect: JSON.parse(e.target.value) })}
                                        >
                                            <option hidden defaultValue>select</option>
                                            <option value={true}>correct</option>
                                            <option value={false}>wrong</option>
                                        </select>
                                    </div>
                                </div>

                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="border border-cyan items-center text-white bg-sky-500 px-4 py-2 rounded-full text-base font-semibold hover:bg-cyan hover:text-white mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
                                    >
                                        Add Quiz
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

export default QuizModal;