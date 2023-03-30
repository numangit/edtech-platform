import { createBrowserRouter } from "react-router-dom";
import StudentLogin from "../../pages/student/StudentLogin";
import Quiz from "../../pages/student/Quiz";
import Main from "../../layouts/Main";
import CourseLayout from "../../layouts/CourseLayout";
import VideoPlayer from "../../component/student/coursePlayer/VideoPlayer";
import Leaderboard from "../../pages/student/Leaderboard";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/course-player',
                element: <CourseLayout />,
                children: [
                    {
                        path: '/course-player/videos/:videoId',
                        element: <VideoPlayer />
                    }
                ]
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