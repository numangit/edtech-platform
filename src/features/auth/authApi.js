import { apiSlice } from "../api/apiSlice";
import { login } from "./authSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: result } = await queryFulfilled;
                    const auth = { accessToken: result.accessToken, user: result.user };
                    localStorage.setItem("authInfo", JSON.stringify(auth));
                    dispatch(login(auth));
                } catch (error) { }
            }
        }),

        login: builder.mutation({
            query: (data) => ({
                url: '/login',
                method: 'POST',
                body: data
            }),
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: result } = await queryFulfilled;
                    const auth = { accessToken: result.accessToken, user: result.user };
                    localStorage.setItem("authInfo", JSON.stringify(auth));
                    dispatch(login(auth));
                } catch (error) { }
            }
        })
    })
})

export const { useRegisterMutation, useLoginMutation } = authApi;