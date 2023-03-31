import React from 'react';
import { useDispatch } from 'react-redux';
import { logout } from '../../features/auth/authSlice';
import { useNavigate } from 'react-router-dom';

const LogoutButton = ({ role }) => {

    //hooks
    const dispatch = useDispatch();
    const navigate = useNavigate();

    //function to handle logout
    const handleLogout = () => {
        dispatch(logout());
        localStorage.clear();
        role === "student" ? navigate('/login') : navigate('/admin/login');
    };

    return (
        <button
            onClick={handleLogout}
            className="flex gap-2 border border-cyan items-center px-4 py-1 rounded-full text-sm transition-all hover:bg-cyan ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                stroke="currentColor" className="w-6 h-6">
                <path strokeLinecap="round" strokeLinejoin="round"
                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
            </svg>
            Logout
        </button>
    );
};

export default LogoutButton;