import { useGetUsersByRoleQuery } from '../../../features/users/usersApi';
import Rank from './Rank';
import { useGetAssignmentMarksQuery } from '../../../features/assignmentMark/assignmentMarkApi';
import { useGetQuizMarksQuery } from '../../../features/quizMark/quizMarkApi';

const Ranks = () => {

    //get required data
    const { data: students } = useGetUsersByRoleQuery("student") || {};
    const { data: assignmentMarks } = useGetAssignmentMarksQuery() || {};
    const { data: quizMarks } = useGetQuizMarksQuery() || {};

    //generating a new array for rank
    const sortedArray = students?.map((student) => {

        //get marks of student
        const newAssignmentMarks = assignmentMarks?.filter((assignment) => assignment?.student_id === student?.id);
        const newQuizMarks = quizMarks?.filter((quiz) => quiz?.student_id === student?.id);

        // calculate total
        const totalAssignmentMark = newAssignmentMarks?.reduce((total, current) => total + current.mark, 0);
        const totalQuizMark = newQuizMarks?.reduce((total, current) => total + current.mark, 0);

        //calculate grand total
        const total = totalQuizMark + totalAssignmentMark;

        // return object
        return !isNaN(total) && {
            id: student?.id,
            name: student?.name,
            AssignmentMark: totalAssignmentMark || 0,
            QuizMark: totalQuizMark || 0,
            total,
        };

    });

    console.log(sortedArray);



    return (
        <div className="my-8">
            <h3 className="text-lg font-bold">Top 20 Result</h3>
            <table className="text-base w-full border border-slate-600/50 rounded-md my-4">
                <thead>
                    <tr className="border-b border-slate-600/50">
                        <th className="table-th !text-center">Rank</th>
                        <th className="table-th !text-center">Name</th>
                        <th className="table-th !text-center">Quiz Mark</th>
                        <th className="table-th !text-center">Assignment Mark</th>
                        <th className="table-th !text-center">Total</th>
                    </tr>
                </thead>
                <tbody>
                    {/* {
                        students?.map(student => {
                            return <Rank key={student?.id} student={student} />
                        })
                    } */}
                </tbody>
            </table>
        </div>
    );
};
export default Ranks;