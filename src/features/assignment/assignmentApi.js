import { apiSlice } from "../api/apiSlice";

export const assignmentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAssignments: builder.query({
            query: () => ({ url: '/assignments' })
        }),

        getAssignmentByVideoId: builder.query({
            query: (id) => ({ url: `/assignments?video_id_like=${id}` })
        }),
    })
})

export const {
    useGetAssignmentByVideoIdQuery
} = assignmentApi;