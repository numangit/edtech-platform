import { createBrowserRouter } from "react-router-dom";
import StudentLogin from "../../pages/student/StudentLogin";
import Leaderboard from "../../pages/student/LeaderBoard";
import Quiz from "../../pages/student/Quiz";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/course-player',
                element: <Quiz />
            },
            {
                path: '/login',
                element: <StudentLogin />
            },
            {
                path: '/leaderboard',
                element: <Leaderboard />
            },
            {
                path: '/quiz',
                element: <Quiz />
            }
        ]
    }

])