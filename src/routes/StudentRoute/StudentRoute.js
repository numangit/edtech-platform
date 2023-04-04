import { useSelector } from "react-redux";
import { selectAuth } from "../../features/auth/authSelector";
import { Navigate, useLocation } from "react-router-dom";

const StudentRoute = ({ children }) => {
    //getting current router
    const location = useLocation();

    //getting current user info
    const { user } = useSelector(selectAuth) || {};
    // console.log("outside", user.role);
    // const user = {role:"student"};

    if (user?.role === "student") {
        return children;
    }

    // return <Navigate to="/login" state={{ from: location }} replace />;
};

export default StudentRoute;