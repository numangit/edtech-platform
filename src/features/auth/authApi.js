import { apiSlice } from "../api/apiSlice";

export const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                url: '/register',
                method: 'POST',
                body: data
            })
        })
    })
})