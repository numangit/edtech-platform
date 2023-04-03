import { apiSlice } from "../api/apiSlice";

export const assignmentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAssignments: builder.query({
            query: () => ({ url: '/assignments' })
        }),

        getAssignmentByVideoId: builder.query({
            query: (id) => ({ url: `/assignments?video_id_like=${id}` })
        }),

        addAssignment: builder.mutation({
            query: (data) => ({
                url: "/assignments",
                method: 'POST',
                body: data
            }),
        }),

        deleteAssignment: builder.mutation({

            query: (id) => ({
                url: `/assignments/${id}`,
                method: 'DELETE',
            }),

            // delete optimistically
            async onQueryStarted(id, { dispatch, queryFulfilled }) {
                const patchResult = dispatch(apiSlice.util.updateQueryData('getAssignments', undefined, (draft) => {
                    return draft?.filter((assignment) => assignment?.id !== parseInt(id));
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
    useGetAssignmentsQuery,
    useGetAssignmentByVideoIdQuery,
    useAddAssignmentMutation,
    useDeleteAssignmentMutation
} = assignmentApi;