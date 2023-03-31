import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import logo from '../../assets/image/learningportal.svg';
import LogoutButton from './LogoutButton';

const NavBar = () => {

    //hooks
    const { user } = useSelector(state => state.auth) || {};

    //checking user role
    const { name, role } = user || {};

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
                        user !== undefined && <LogoutButton />
                    }

                </div>
            </div>
        </nav>
    );
};

export default NavBar;