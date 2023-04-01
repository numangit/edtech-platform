import { apiSlice } from "../api/apiSlice";

export const assignmentMarkApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAssignmentMarks: builder.query({
            query: () => ({ url: '/assignmentMark' })
        }),

        getAssignmentMark: builder.query({
            query: (id) => ({ url: `/assignmentMark?student_id_like=${id}` })
        }),

        editAssignmentMark: builder.mutation({
            query: ({ id, data }) => ({
                url: `/assignmentMark/${id}`,
                method: 'PATCH',
                body: data,
            }),
        }),
    })
})

export const {
    useGetAssignmentMarkQuery,
    useGetAssignmentMarksQuery,
    useEditAssignmentMarkMutation
} = assignmentMarkApi;