import { createBrowserRouter } from "react-router-dom";
import StudentLogin from "../../pages/student/StudentLogin";
import Quiz from "../../pages/student/Quiz";
import Main from "../../layouts/Main";
import CourseLayout from "../../layouts/CourseLayout";
import VideoPlayer from "../../component/student/coursePlayer/VideoPlayer";
import Leaderboard from "../../pages/student/Leaderboard";
import StudentRegistration from "../../pages/student/StudentRegistration";
import AdminLogin from "../../pages/admin/AdminLogin";

export const router = createBrowserRouter([
    //student routes
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <CourseLayout />,
                children: [
                    {
                        path: '/videos/:videoId',
                        element: <VideoPlayer />
                    }
                ]
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
    },
    {
        path: '/login',
        element: <StudentLogin />
    },
    {
        path: '/register',
        element: <StudentRegistration />
    },
    //admin routes
    {
        path: '/admin',
        element: < />,
        children: [
            {
                path: '/',
                element: <CourseLayout />,
                children: [
                    {
                        path: '/videos/:videoId',
                        element: <VideoPlayer />
                    }
                ]
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
    },
    {
        path: '/admin/login',
        element: <AdminLogin />
    },
])