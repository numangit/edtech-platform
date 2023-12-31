import { useEffect, useState } from "react";
import logo from "../../assets/image/learningportal.svg";
import { useRegisterMutation } from "../../features/auth/authApi";
import { Link, useLocation, useNavigate } from "react-router-dom";

const StudentRegistration = () => {

    //find the previous location
    const navigate = useNavigate();
    const location = useLocation();
    const from = location.state?.from?.pathname || '/course/videos/1';

    //mutation hook
    const [register, { data, isLoading, isError, error }] = useRegisterMutation();


    //input states
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');

    //alert state
    const [alert, setAlert] = useState(null);

    //function to reset
    const reset = () => {
        setName('');
        setEmail('');
        setPassword('');
        setConfirmPassword('');
    };

    //to check for response error
    useEffect(() => {
        if (error?.data) {
            setAlert(error?.data);
        };
        if (data?.accessToken && data?.user) {
            navigate(from === '/' ? '/course/videos/1' : from, { replace: true })
        };
    }, [data, error, navigate, from]);

    //function to handle form submit
    const handleSubmit = (e) => {
        e.preventDefault();

        if (password === confirmPassword) {
            const data = { name, email, password, role: 'student' };
            register(data);
            reset();
        } else {
            setAlert('Password does not match');
        };

        isError && setAlert(error?.data);
    };

    return (
        <section className="py-6 bg-primary h-screen grid place-items-center">
            <div className="mx-auto max-w-md px-5 lg:px-0">
                <div>
                    <img className="h-12 mx-auto" src={logo} alt="LWS Logo" />
                    <h2 className="mt-6 text-center text-3xl font-extrabold text-slate-100">
                        Create Your New Account
                    </h2>
                </div>
                <form onSubmit={handleSubmit} className="mt-8 space-y-6" action="#" method="POST">
                    {
                        alert && <p className="text-red-500 font-semibold text-center">{alert}</p>
                    }
                    <input type="hidden" name="remember" value="true" />
                    <div className="rounded-md shadow-sm -space-y-px">
                        <div>
                            <label htmlFor="name" className="sr-only">Name</label>
                            <input
                                id="name"
                                name="name"
                                type="name"
                                autoComplete="name"
                                required
                                className="login-input rounded-t-md"
                                placeholder="Student Name"
                                value={name}
                                onChange={e => setName(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="email-address" className="sr-only">Email address</label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                autoComplete="email"
                                required
                                className="login-input "
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
                                className="login-input"
                                placeholder="Password"
                                value={password}
                                onChange={e => setPassword(e.target.value)} />
                        </div>
                        <div>
                            <label htmlFor="confirm-password" className="sr-only">Confirm Password</label>
                            <input
                                id="confirm-password"
                                name="confirm-password"
                                type="password"
                                autoComplete="confirm-password"
                                required
                                className="login-input rounded-b-md"
                                placeholder="Confirm Password"
                                value={confirmPassword}
                                onChange={e => setConfirmPassword(e.target.value)} />
                        </div>
                    </div>
                    <div className="flex items-center justify-end">
                        <div className="text-sm">
                            <Link to="/login" className="font-medium text-violet-600 hover:text-violet-500">
                                Already have an account?
                            </Link>
                        </div>
                    </div>

                    <div>
                        <button disabled={isLoading} type="submit"
                            className="group relative w-full flex justify-center py-2 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-violet-600 hover:bg-violet-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-violet-500">
                            Create Account
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
};

export default StudentRegistration;