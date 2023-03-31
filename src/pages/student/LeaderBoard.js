import StudentRank from "../../component/student/leaderboard/StudentRank";
import StudentsRankList from "../../component/student/leaderboard/StudentsRankList";

const Leaderboard = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-7xl px-5 lg:px-0">
                <StudentRank />
                <StudentsRankList />
            </div>
        </section>
    )
};

export default Leaderboard;