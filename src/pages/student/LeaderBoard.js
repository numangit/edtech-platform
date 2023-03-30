import StudentRank from "../../component/student/leaderboard/StudentRank";
import StudentsRankList from "../../component/student/leaderboard/StudentsRankList";

const Leaderboard = () => {
    return (
        <section class="py-6 bg-primary">
            <div class="mx-auto max-w-7xl px-5 lg:px-0">
                <StudentRank />
                <StudentsRankList />
            </div>
        </section>
    )
};

export default Leaderboard;