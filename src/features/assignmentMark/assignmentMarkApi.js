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
            // update optimistically 
            async onQueryStarted({ id }, { dispatch, queryFulfilled }) {

                const { data: updatedAssignment } = await queryFulfilled;

                const patchResult = dispatch(
                    apiSlice.util.updateQueryData('getAssignmentMarks', undefined, (draft) => {

                        const targetedAssignment = draft?.find((assignment) => assignment.id === id);
                        return { ...targetedAssignment, ...updatedAssignment };
                    }),
                );
                try {
                    await queryFulfilled;
                } catch (err) {
                    patchResult.undo();
                }
            },
        }),
    })
})

export const {
    useGetAssignmentMarkQuery,
    useGetAssignmentMarksQuery,
    useEditAssignmentMarkMutation
} = assignmentMarkApi;