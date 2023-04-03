const VideoModal = ({ setShowModal }) => {

    //form states

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
                                Add <span className="text-sky-500 ">Video</span>
                            </h3>

                            {/* <form onSubmit={handleSubmit}> */}
                            <form>
                                <div className="my-1">
                                    <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">Title</label>
                                    <input
                                        id="title"
                                        type="text"
                                        name="title"
                                        className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none "
                                        required
                                    // value={repoLink}
                                    // onChange={(e) => setRepoLink(e.target.value)}
                                    />
                                </div>
                                <div className="my-1">
                                    <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">Description</label>
                                    <input
                                        id="description"
                                        type="text"
                                        name="description"
                                        className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none "
                                        required
                                    // value={repoLink}
                                    // onChange={(e) => setRepoLink(e.target.value)} 
                                    />
                                </div>
                                <div className="my-1">
                                    <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">URL</label>
                                    <input
                                        id="url"
                                        type="url"
                                        name="url"
                                        className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none "
                                        required
                                    // value={repoLink}
                                    // onChange={(e) => setRepoLink(e.target.value)} 
                                    />
                                </div>
                                <div className="flex my-1">
                                    <div className="mx-0.5">
                                        <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">Duration</label>
                                        <input
                                            id="duration"
                                            type="text"
                                            name="duration"
                                            className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none "
                                            required
                                        // value={repoLink}
                                        // onChange={(e) => setRepoLink(e.target.value)} 
                                        />
                                    </div>
                                    <div className="mx-0.5">
                                        <label htmlFor="assignment" className="text-slate-500 text-base font-semibold after:content-['*'] after:text-red-500 after:ml-1">Views</label>
                                        <input
                                            id="views"
                                            type="text"
                                            name="views"
                                            className="p-2 text-white bg-slate-800 w-full rounded-md my-2 focus:outline-none "
                                            required
                                        // value={repoLink}
                                        // onChange={(e) => setRepoLink(e.target.value)} 
                                        />
                                    </div>
                                </div>
                                <div className="flex justify-end">
                                    <button
                                        type="submit"
                                        className="border border-cyan items-center text-white bg-sky-500 px-4 py-2 rounded-full text-base font-semibold hover:bg-cyan hover:text-white mr-1 mb-1 ease-linear transition-all duration-150 mt-4"
                                    >
                                        Done
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

export default VideoModal;