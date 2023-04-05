import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectAuth } from "../../features/auth/authSelector";
import { logout } from "../../features/auth/authSlice";

const AdminRoute = ({ children }) => {

    const location = useLocation();
    const dispatch = useDispatch();

    //getting current user info
    const { user } = useSelector(selectAuth) || {};

    //if user is available and is student
    if (user?.role === "admin") {
        return children;
    };

    //if user is not logged in or is not student
    dispatch(logout());
    localStorage.clear('authInfo');

    return <Navigate to="/admin/login" state={{ from: location }} replace />;
};

export default AdminRoute;