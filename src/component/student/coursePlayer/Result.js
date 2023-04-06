import React from 'react';

const Result = () => {
    return (
        <div className='flex space-x-3'>

            <div className="px-3 flex items-center font-bold py-1 border-2 border-cyan-700 text-white rounded-full text-sm bg-gradient-to-l from-teal-500 to-blue-500">
                <span className="text-xs font-bold">সর্বমোট নাম্বার - 100</span>
            </div>

            <div className="px-3 flex items-center font-bold py-1 border-2 border-cyan-700 text-white rounded-full bg-gradient-to-l from-emerald-500 to-green-500"><span className="text-sm font-bold">প্রাপ্ত নাম্বার - 100</span></div>
        </div>
    );
};

export default Result;