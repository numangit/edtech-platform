import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../features/auth/authSelector";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { logout } from "../../features/auth/authSlice";
import useAuthCheck from "../../hooks/useAuthCheck";
import Loader from "../../component/common/loader/Loader";

const StudentRoute = ({ children }) => {
    //check auth loader
    const { isLoading } = useAuthCheck();

    const location = useLocation();
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //getting current user info
    const { user } = useSelector(selectAuth) || {};

    //if authCheck is loading
    if (isLoading) {
        return <Loader />
    };

    //if user is available and is student
    if (user?.role === "student") {
        return children;
    } else if (location?.pathname === '/' && user?.role === "admin") {
        //if user is admin and in "/" page
        navigate('/admin');
        return;
    };

    //if user is not logged in or is not student
    dispatch(logout());
    localStorage.clear('authInfo');

    return <Navigate to="/login" state={{ from: location }} replace />;
};

export default StudentRoute;