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
            // adding pessimistically
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: addedVideo } = await queryFulfilled;
                    dispatch(
                        apiSlice.util.updateQueryData('getVideos', undefined, (draft) => {
                            draft.push(addedVideo);
                        })
                    );
                } catch (err) { }
            },
        }),

        editVideo: builder.mutation({
            query: ({ id, data }) => ({
                url: `/videos/${id}`,
                method: 'PATCH',
                body: data,
            }),
            // pessimistic update
            async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
                try {
                    const { data: updatedVideo } = await queryFulfilled;
                    //update videos cache
                    dispatch(apiSlice.util.updateQueryData('getVideos', undefined, (draft) => {
                        const videoIndex = draft?.findIndex(video => video?.id === id);
                        draft[videoIndex] = { ...updatedVideo };
                    }));
                    //update video cache
                    dispatch(apiSlice.util.updateQueryData('getVideo', id, (draft) => updatedVideo));
                } catch (err) { }
            },
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
    useEditVideoMutation,
    useDeleteVideoMutation
} = videoApi;