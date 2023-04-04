import { apiSlice } from "../api/apiSlice";

export const quizApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getQuizzes: builder.query({
            query: () => ({ url: '/quizzes' })
        }),

        getQuiz: builder.query({
            query: (id) => ({ url: `/quizzes/${id}` })
        }),

        getQuizByVideoId: builder.query({
            query: (id) => ({ url: `/quizzes?video_id_like=${id}` })
        }),

        addQuiz: builder.mutation({
            query: (data) => ({
                url: "/quizzes",
                method: 'POST',
                body: data
            }),

            // adding pessimistically
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: addedQuiz } = await queryFulfilled;
                    dispatch(
                        apiSlice.util.updateQueryData('getQuizzes', undefined, (draft) => {
                            draft.push(addedQuiz);
                        })
                    );
                } catch (err) { }
            },
        }),

        editQuiz: builder.mutation({
            query: ({ id, data }) => ({
                url: `/quizzes/${id}`,
                method: 'PATCH',
                body: data,
            }),
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
    useGetQuizQuery,
    useGetQuizByVideoIdQuery,
    useAddQuizMutation,
    useEditQuizMutation,
    useDeleteQuizMutation
} = quizApi;