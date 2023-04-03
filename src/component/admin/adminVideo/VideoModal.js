const VideoModal = ({ setShowModal }) => {



    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm"
            >
                <div className="relative my-6 w-1/3">
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
                                <span className="text-sky-500 ">এসাইনমেন্ট</span> জমা দিন
                            </h3>

                            {/* <form onSubmit={handleSubmit}> */}
                            <form>
                                <div className="text-slate-500 text-sm leading-relaxed">
                                    <p>
                                        গিটহাব রিপোসিটরি লিঙ্ক <span className="text-red-500">*</span>
                                    </p>
                                    <p>যে রিপোসিটরি লিঙ্কটি আপনি গিটহাব ক্লাসরুম থেকে পেয়েছেন</p>
                                    <input
                                        id="assignment"
                                        type="url"
                                        name="repository_link"
                                        className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none "
                                        required
                                    // value={repoLink}
                                    // onChange={(e) => setRepoLink(e.target.value)} 
                                    />
                                </div>

                                <button
                                    type="submit"
                                    className="border border-cyan items-center text-white bg-sky-500 px-4 py-2 rounded-full text-sm hover:bg-cyan hover:text-white mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
                                >
                                    এসাইনমেন্ট জমা দিন
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default VideoModal;