const Error = ({ message }) => {
    return (
        <div className="text-center" >
            <span className="bg-red-200 text-center text-red-600 font-bold p-2 rounded-lg">{message}</span>
        </div>
    );
};

export default Error;