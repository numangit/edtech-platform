const Error = ({ message }) => {
    return (
        <div className="bg-red-950 text-center text-red-100 font-semibold p-2 text-xl rounded-lg" >
            <p>{message?.length > 0 ? message : "Oops.. an error occurred"}</p>
        </div>
    );
};

export default Error;