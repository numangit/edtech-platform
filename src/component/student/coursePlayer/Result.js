const Result = ({ result }) => {

    const { mark, totalMark, status } = result || {};
    return (
        <>
            {
                status === "pending"
                    ? <div className='flex space-x-3'>
                        <div className="px-3 flex items-center font-bold py-1 border-2 border-cyan-700 text-white rounded-full bg-gradient-to-l from-teal-500 to-blue-500">
                            <span className="text-xs font-bold">সর্বমোট নাম্বার - {totalMark}</span>
                        </div>
                        <div className="px-3 flex items-center font-bold py-1 border-2 border-cyan-700 text-white rounded-full bg-gradient-to-l from-emerald-500 to-green-500">
                            <span className="text-xs font-bold">আপনি জমা দিয়েছেন</span>
                        </div>
                        <div className="px-3 flex items-center font-bold py-1 border-2 border-orange-700 text-white rounded-full bg-gradient-to-r from-orange-400 to-red-600">
                            <span className="text-xs font-bold">প্রাপ্ত নাম্বার - PENDING</span>
                        </div>
                    </div>
                    : <div className='flex space-x-3'>
                        <div className="px-3 flex items-center font-bold py-1 border-2 border-cyan-700 text-white rounded-full bg-gradient-to-l from-teal-500 to-blue-500">
                            <span className="text-xs font-bold">সর্বমোট নাম্বার - {totalMark}</span>
                        </div>

                        <div className="px-3 flex items-center font-bold py-1 border-2 border-cyan-700 text-white rounded-full bg-gradient-to-l from-emerald-500 to-green-500">
                            <span className="text-xs font-bold">প্রাপ্ত নাম্বার - {mark}</span>
                        </div>
                    </div>
            }

        </>
    );
};

export default Result;