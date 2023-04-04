const Error = ({ message }) => {
    return (
        <div >
            <span className="bg-red-300 text-center text-red-800">{message}</span>
        </div>
    );
};

export default Error;