//get required data
const { data: students } = useGetUsersByRoleQuery("student") || {};
const { data: assignmentMarks } = useGetAssignmentMarksQuery() || {};
const { data: quizMarks } = useGetQuizMarksQuery() || {};

const [sortedArray, setSortedArray] = useState([]);

useEffect(() => {

    students?.forEach((student) => {
        //get marks of student
        const newAssignmentMarks = assignmentMarks?.filter((assignment) => assignment?.student_id === student?.id);
        const newQuizMarks = quizMarks?.filter((quiz) => quiz?.student_id === student?.id);

        // calculate total
        const totalAssignmentMark = newAssignmentMarks?.reduce((total, current) => total + current.mark, 0);
        const totalQuizMark = newQuizMarks?.reduce((total, current) => total + current.mark, 0);

        //calculate grand total
        const total = totalQuizMark + totalAssignmentMark;

        //set sortedArray state
        setSortedArray([...sortedArray,
        {
            id: student?.id,
            name: student?.name,
            totalAssignmentMark: totalAssignmentMark || 0,
            totalQuizMark: totalQuizMark || 0,
            total,
        }]);

    });

}, [students, assignmentMarks, quizMarks, sortedArray]);

console.log(sortedArray);