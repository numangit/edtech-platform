import { apiSlice } from "../api/apiSlice";

export const quizMarkApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getQuizMarks: builder.query({
            query: () => ({ url: '/quizMark' }),
            providesTags: ['quizMarks']
        }),

        getQuizMark: builder.query({
            query: (id) => ({ url: `/quizMark?student_id_like=${id}` }),
            providesTags: (result, error, arg) => ["quizMarks", { type: 'quizMark', id: arg }]
        }),

        addQuizMark: builder.mutation({
            query: (data) => ({
                url: "/quizMark",
                method: 'POST',
                body: data
            }),
            invalidatesTags: (result, error, arg) => ["quizMarks", { type: 'quizMark', id: arg.student_id }]
        }),
    })
})

export const {
    useGetQuizMarkQuery,
    useGetQuizMarksQuery,
    useAddQuizMarkMutation
} = quizMarkApi;