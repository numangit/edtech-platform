import { apiSlice } from "../api/apiSlice";

export const videoApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getVideos: builder.query({
            query: () => ({ url: '/videos' })
        }),

        getVideo: builder.query({
            query: (id) => ({ url: `/videos/${id}` })
        }),
    })
})

export const {
    useGetVideosQuery,
    useGetVideoQuery
} = videoApi;