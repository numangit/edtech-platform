import { apiSlice } from "../api/apiSlice";

export const assignmentMarkApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        getAssignmentMarks: builder.query({
            query: () => ({ url: '/assignmentMark' })
        }),
        getAssignmentMark: builder.query({
            query: (id) => ({ url: `/assignmentMark?student_id_like=${id}` })
        }),
    })
})

export const {
    useGetAssignmentMarkQuery,
    useGetAssignmentMarksQuery
} = assignmentMarkApi;