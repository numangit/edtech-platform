const NoData = ({ data }) => {
    return (
        <div className="bg-slate-800 text-center text-sky-600 font-bold p-2 rounded-lg" >
            <p>No {data} available.</p>
        </div>
    );
};

export default NoData;