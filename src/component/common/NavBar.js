import { useDispatch, useSelector } from 'react-redux';
import logo from '../../assets/image/learningportal.svg';
import { Link } from 'react-router-dom';
import { logout } from '../../features/auth/authSlice';

const NavBar = () => {

    //hooks
    const { user } = useSelector(state => state.auth) || {};
    const dispatch = useDispatch();

    //checking user role
    const { name, role } = user || {};

    //function to handle logout
    const handleLogout = () => {
        dispatch(logout());
    };

    return (
        <nav className="shadow-md">
            <div className="max-w-7xl px-5 lg:px-0 mx-auto flex justify-between py-3">

                {
                    role === "admin"
                        ? <Link to="/admin">
                            <img className="h-10" src={logo} alt="LWS logo" />
                        </Link>
                        : <Link to="/videos/1">
                            <img className="h-10" src={logo} alt="LWS logo" />
                        </Link>
                }

                <div className="flex items-center gap-3">

                    {
                        role === "student" && <a href="./Leaderboard.html">Leaderboard</a>
                    }

                    <h2 className="font-bold">{name}</h2>

                    {
                        user !== undefined
                        && <button
                            onClick={handleLogout}
                            className="flex gap-2 border border-cyan items-center px-4 py-1 rounded-full text-sm transition-all hover:bg-cyan ">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5"
                                stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round"
                                    d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15M12 9l-3 3m0 0l3 3m-3-3h12.75" />
                            </svg>
                            Logout
                        </button>
                    }

                </div>
            </div>
        </nav>
    );
};

export default NavBar;