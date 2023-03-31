import { apiSlice } from "../api/apiSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getQuizMark: builder.query({
            query: (id) => ({ url: `/quizMark?student_id_like=${id}` })
        }),
    })
})

export const {
    useGetQuizMarkQuery
} = quizMarkApi;