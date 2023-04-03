import { apiSlice } from "../api/apiSlice";

export const videoApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getVideos: builder.query({
            query: () => ({ url: '/videos' })
        }),

        getVideo: builder.query({
            query: (id) => ({ url: `/videos/${id}` })
        }),

        addVideo: builder.mutation({
            query: (data) => ({
                url: "/videos",
                method: 'POST',
                body: data
            }),
        }),

        deleteVideo: builder.mutation({

            query: (id) => ({
                url: `/videos/${id}`,
                method: 'DELETE',
            }),

            // delete optimistically
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(apiSlice.util.updateQueryData('getVideos', undefined, (draft) => {
                    return draft?.filter((video) => video?.id !== parseInt(id));
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
    useGetVideosQuery,
    useGetVideoQuery,
    useAddVideoMutation,
    useDeleteVideoMutation
} = videoApi;