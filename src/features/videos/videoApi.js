import { apiSlice } from "../api/apiSlice";

export const videoApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getVideos: builder.query({
            query: () => ({ url: '/videos' })
        }),

        getVideo: builder.query({
            query: (id) => ({ url: `/videos/${id}` })
        }),

        deleteVideo: builder.mutation({
            query: (id) => ({
                url: `/videos/${id}`,
                method: 'DELETE',
            })
        })
    })
})

export const {
    useGetVideosQuery,
    useGetVideoQuery
} = videoApi;