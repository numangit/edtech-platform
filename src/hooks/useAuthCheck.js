import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { login } from '../features/auth/authSlice';

export default function useAuthCheck() {

    //hooks
    const dispatch = useDispatch();

    const [userLoggedIn, setUserLoggedIn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    //code to set auth info from local storage if available
    useEffect(() => {
        setIsLoading(true);

        //get authInfo from local storage
        const userInfo = localStorage?.getItem('authInfo');

        if (userInfo) {
            const authInfo = JSON.parse(userInfo);
            if (authInfo?.accessToken && authInfo?.user) {
                //set auth state with authInfo 
                dispatch(login({
                    accessToken: authInfo.accessToken,
                    user: authInfo.user,
                }));
            };
        };

        setUserLoggedIn(true);
        setIsLoading(false);

    }, [dispatch, setUserLoggedIn]);

    return { userLoggedIn, isLoading };
};