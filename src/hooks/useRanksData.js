import { useGetAssignmentMarksQuery } from "../features/assignmentMark/assignmentMarkApi";
import { useGetQuizMarksQuery } from "../features/quizMark/quizMarkApi";
import { useGetUsersByRoleQuery } from "../features/users/usersApi";

const useRanksData = () => {

    //get required data
    const { data: students } = useGetUsersByRoleQuery("student") || {};
    const { data: assignmentMarks } = useGetAssignmentMarksQuery() || {};
    const { data: quizMarks } = useGetQuizMarksQuery() || {};

    //generating a new array for rank
    const ranksData = students?.map((student) => {

        //get marks of student
        const newAssignmentMarks = assignmentMarks?.filter((assignment) => assignment?.student_id === student?.id);
        const newQuizMarks = quizMarks?.filter((quiz) => quiz?.student_id === student?.id);

        // calculate total
        const totalAssignmentMark = newAssignmentMarks?.reduce((total, current) => total + current.mark, 0);
        const totalQuizMark = newQuizMarks?.reduce((total, current) => total + current.mark, 0);

        //calculate grand total
        const total = totalQuizMark + totalAssignmentMark;

        // return object
        return isNaN(total)
            ? {}
            : {
                id: student?.id,
                name: student?.name,
                totalAssignmentMark: totalAssignmentMark || 0,
                totalQuizMark: totalQuizMark || 0,
                total,
            };

    });


    // descending sorting
    ranksData?.sort((a, b) => {
        return b.total - a.total;
    });

    //calculate rank
    let rank = 1;
    ranksData?.forEach((data, i) => {
        if (i > 0 && ranksData[i].total < ranksData[i - 1].total) {
            rank++;
        }
        data.rank = rank;
    });

    return ranksData;
};

export default useRanksData;