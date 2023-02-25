import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AuthService from "../services/AuthService";

function Home() {
    const authService = new AuthService();
    let [isAuthenticate, setIsAuthenticate] = useState<boolean>(false);

    useEffect(() => {
        setIsAuthenticate(authService.isAuthenticate());
    }, []);

    const logout = () => {
        authService.logout();
        setIsAuthenticate(false);
    }

    return (
        <div className="min-h-screen flex flex-col justify-center justify-items-center bg-gradient-to-r from-slate-200 to-gray-200 text-gray-800 dark:text-white dark:from-slate-900 dark:to-gray-800">
            <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0 w-full max-w-sm">
                <a className="flex items-center mb-6 text-2xl font-semibold text-gray-900 dark:text-white">
                    <img className="w-8 h-8 mr-2" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/logo.svg" alt="logo" />
                    Sample App
                </a>

                <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
                    <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
                        {!isAuthenticate &&
                            <>
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Hi There,
                                </h1>
                                <p>You are not sign in yet. Please sign in first before accessing app or register for new account if you still don't have a valid account.</p>
                                <Link to={'/login'} className="block text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-700 hover:bg-sky-900" >Sign In</Link>
                                <Link to={'/register'} className="block text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-700 hover:bg-sky-900 !mt-4" >Sign up</Link>
                            </>}

                        {isAuthenticate &&
                            <>
                                <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                                    Hi, Welcome back!
                                </h1>
                                <p>Navigation:</p>
                                <Link to={'/private-route'} className="block text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-700 hover:bg-sky-900" >Sample Private Route</Link>
                                <button type="button" className="block w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center bg-sky-700 hover:bg-sky-900 !mt-4" onClick={logout}>Logout</button>
                            </>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;
