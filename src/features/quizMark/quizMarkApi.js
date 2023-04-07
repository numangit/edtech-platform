import { apiSlice } from "../api/apiSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getQuizMarks: builder.query({
            query: () => ({ url: '/quizMark' })
        }),

        getQuizMark: builder.query({
            query: (id) => ({ url: `/quizMark?student_id_like=${id}` })
        }),

        addQuizMark: builder.mutation({
            query: (data) => ({
                url: "/quizMark",
                method: 'POST',
                body: data
            }),
        }),
    })
})

export const {
    useGetQuizMarkQuery,
    useGetQuizMarksQuery,
    useAddQuizMarkMutation
} = quizMarkApi;