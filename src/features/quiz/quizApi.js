import { apiSlice } from "../api/apiSlice";

export const quizApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getQuizByVideoId: builder.query({
            query: (id) => ({ url: `/quizzes?video_id_like=${id}` })
        }),
    })
})

export const {
    useGetQuizByVideoIdQuery
} = quizApi;