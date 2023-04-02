import { apiSlice } from "../api/apiSlice";

export const assignmentMarkApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({

        getAssignmentMarks: builder.query({
            query: () => ({ url: '/assignmentMark' })
        }),

        getAssignmentMark: builder.query({
            query: (id) => ({ url: `/assignmentMark?student_id_like=${id}` })
        }),

        addAssignmentMark: builder.mutation({
            query: (data) => ({
                url: "/assignmentMark",
                method: 'POST',
                body: data
            }),
        }),

        updateAssignmentMark: builder.mutation({
            query: ({ id, data }) => ({
                url: `/assignmentMark/${id}`,
                method: 'PATCH',
                body: data,
            }),
            // update optimistically 
            async onQueryStarted({ id }, { dispatch, queryFulfilled }) {
                const { data: updatedData } = await queryFulfilled;
                //silently update cache
                const patchResult = dispatch(
                    apiSlice.util.updateQueryData('getAssignmentMarks', undefined, (draft) => {
                        const assignmentIndex = draft?.findIndex(x => x.id === id);
                        draft[assignmentIndex] = { ...updatedData };
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
    useAddAssignmentMarkMutation,
    useUpdateAssignmentMarkMutation
} = assignmentMarkApi;