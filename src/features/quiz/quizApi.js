import { apiSlice } from "../api/apiSlice";

export const quizApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getQuizzes: builder.query({
            query: () => ({ url: '/quizzes' })
        }),

        getQuizByVideoId: builder.query({
            query: (id) => ({ url: `/quizzes?video_id_like=${id}` })
        }),

        deleteQuiz: builder.mutation({

            query: (id) => ({
                url: `/quizzes/${id}`,
                method: 'DELETE',
            }),

            // delete optimistically
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(apiSlice.util.updateQueryData('getQuizzes', undefined, (draft) => {
                    return draft?.filter((quiz) => quiz?.id !== parseInt(id));
                }));
                try {
                    await queryFulfilled;
                } catch (err) {
                    patchResult.undo();
                };
            },
        }),
    })
})

export const {
    useGetQuizzesQuery,
    useGetQuizByVideoIdQuery,
    useDeleteQuizMutation
} = quizApi;