import { apiSlice } from "../api/apiSlice";

export const assignmentApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAssignments: builder.query({
            query: () => ({ url: '/assignments' })
        }),

        getAssignment: builder.query({
            query: (id) => ({ url: `/assignments/${id}` })
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

            // adding pessimistically
            async onQueryStarted(arg, { dispatch, queryFulfilled }) {
                try {
                    const { data: addedAssignment } = await queryFulfilled;
                    dispatch(
                        apiSlice.util.updateQueryData('getAssignments', undefined, (draft) => {
                            draft.push(addedAssignment);
                        })
                    );
                } catch (err) { }
            },
        }),

        editAssignment: builder.mutation({
            query: ({ id, data }) => ({
                url: `/assignments/${id}`,
                method: 'PATCH',
                body: data,
            }),

            // pessimistic update
            async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
                try {
                    const { data: updatedAssignment } = await queryFulfilled;
                    //update assignments cache
                    dispatch(apiSlice.util.updateQueryData('getAssignments', undefined, (draft) => {
                        const AssignmentIndex = draft?.findIndex(Assignment => Assignment?.id === id);
                        draft[AssignmentIndex] = { ...updatedAssignment };
                    }),)
                    //update assignment cache
                    dispatch(apiSlice.util.updateQueryData('getAssignment', id, (draft) => updatedAssignment));
                } catch (err) { }
            },
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
    useGetAssignmentQuery,
    useGetAssignmentByVideoIdQuery,
    useAddAssignmentMutation,
    useEditAssignmentMutation,
    useDeleteAssignmentMutation
} = assignmentApi;