import { Link, useLocation, useNavigate } from "react-router-dom";
import logo from "../../assets/image/learningportal.svg";
import { useEffect, useState } from "react";
import { useLoginMutation } from "../../features/auth/authApi";
import { useDispatch, useSelector } from "react-redux";
import { selectAuth } from "../../features/auth/authSelector";
import { logout } from "../../features/auth/authSlice";

const StudentLogin = () => {

    const dispatch = useDispatch();

    //find the previous location
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/course/videos/1';

    //getting login mutation
    const [login, { isLoading, isError, error }] = useLoginMutation();

    //getting info related to current student
    const { user } = useSelector(selectAuth) || {};

    //input states
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    //alert state
    const [alert, setAlert] = useState(null);

    //function to reset
    const reset = () => {
        setEmail('');
        setPassword('');
    };

    //checking login response
    useEffect(() => {
        if (!isError && user?.role === "student") {
            navigate(from === '/' ? '/course/videos/1' : from, { replace: true })
        } else if (!isError && user?.role === "admin") {
            dispatch(logout());
            localStorage.clear('authInfo');
            setAlert("Please visit admin login page to login as Admin.")
        } else if (error) {
            setAlert(error?.data);
        };
    }, [isError, user, navigate, from, dispatch, error]);

    //function to handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        const data = { email, password };

        setAlert(null);
        login(data);
        reset();
    };

    return (
        <section className="py-6 bg-primary h-screen grid place-items-center">
            <div className="mx-auto max-w-md px-5 lg:px-0">
                <div>
                    <img className="h-12 mx-auto" src={logo} alt="LWS Logo" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                        Sign in to Student Account
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                    {
                        alert && <p className="text-red-500 font-semibold text-center">{alert}</p>
                    }
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="login-input rounded-t-md"
                                placeholder="Email address"
                                value={email}
                                onChange={e => setEmail(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="password" className="sr-only">Password</label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                autoComplete="current-password"
                                required
                                className="login-input rounded-b-md"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <Link to="/register" className="font-medium text-violet-600 hover:text-violet-500">
                                Create New Account
                            </Link>
                        </div>
                    </div>
                    <div>
                        <button disabled={isLoading} type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                            Sign in
                        </button>
                    </div>
                    <Link to="/admin/login">
                        <button disabled={isLoading} type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-slate-900 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500 my-3">
                            Admin Login Page
                        </button>
                    </Link>
                </form>
            </div>
        </section>
    );
};

export default StudentLogin;