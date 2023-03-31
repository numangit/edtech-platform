import { useSelector } from "react-redux";
import { selectAuth } from "../../features/auth/authSelector";
import { Navigate, useLocation } from "react-router-dom";

const StudentRoute = ({ children }) => {
    //hooks
    const { user } = useSelector(selectAuth) || {};
    const location = useLocation();
    // const user = {role:"student"};
    console.log(user);

    if (user?.role === "student") {
        return children;
    }

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default StudentRoute;