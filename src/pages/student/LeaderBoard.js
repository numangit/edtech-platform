import CurrentUserRank from "../../component/student/leaderboard/CurrentUserRank";
import Ranks from "../../component/student/leaderboard/Ranks";

const LeaderBoard = () => {
    return (
        <section className="py-6 bg-primary">
            <div className="mx-auto max-w-7xl px-5 lg:px-0">
                <CurrentUserRank />
                <Ranks />
            </div>
        </section>
    )
};

export default LeaderBoard;