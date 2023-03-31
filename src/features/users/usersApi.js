import { apiSlice } from "../api/apiSlice";

export const userApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getUsersByRole: builder.query({
            query: (role) => ({ url: `/users?role_like=${role}` })
        }),
    })
})

export const {
    useGetUsersByRoleQuery
} = userApi;