const AssignmentModal = ({ assignment, setShowModal }) => {
    const { id, title } = assignment;

    return (
        <>
            <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none backdrop-blur-sm"
            >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                    {/*content*/}
                    <div className="border-0 rounded-xl shadow-lg relative flex flex-col w-full bg-slate-900 outline-none focus:outline-none">
                        {/*header*/}
                        <div className="flex items-start justify-between px-5 py-2 rounded-t">
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
                        <div className="relative p-6 flex-auto">
                            <h3 className="text-3xl font-semibold">
                                <span className="text-sky-500 ">এসাইনমেন্ট</span> জমা দিন
                            </h3>
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">
                                গিটহাব রিপোসিটরি লিঙ্ক <span className="text-red">*</span>
                            </p>
                            <p className="my-4 text-slate-500 text-lg leading-relaxed">যে রিপোসিটরি লিঙ্কটি আপনি গিটহাব ক্লাসরুম থেকে পেয়েছেন</p>
                        </div>
                        {/*footer*/}
                        <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                            <button
                                className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Close
                            </button>
                            <button
                                className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                type="button"
                                onClick={() => setShowModal(false)}
                            >
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
    );
};

export default AssignmentModal;