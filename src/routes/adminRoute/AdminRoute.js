import { useDispatch, useSelector } from "react-redux";
import { Navigate, useLocation } from "react-router-dom";
import { selectAuth } from "../../features/auth/authSelector";
import { logout } from "../../features/auth/authSlice";
import useAuthCheck from "../../hooks/useAuthCheck";

const AdminRoute = ({ children }) => {

    //check auth loader
    const { isLoading } = useAuthCheck();

    const location = useLocation();
    const dispatch = useDispatch();

    //getting current user info
    const { user } = useSelector(selectAuth) || {};

    //if authCheck is loading
    if (isLoading) {
        return <div className="flex items-center justify-center h-screen">
            <p className='text-center text-3xl font-bold'>
                Checking User Authentication...
            </p>
        </div>
    };

    //if user is available and is admin
    if (user?.role === "admin") {
        return children;
    };

    //if user is not logged in or is not admin
    dispatch(logout());
    localStorage.clear('authInfo');

    return <Navigate to="/admin/login" state={{ from: location }} replace />;
};

export default AdminRoute;