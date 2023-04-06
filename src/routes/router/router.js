import { createBrowserRouter } from "react-router-dom";
import StudentLogin from "../../pages/student/StudentLogin";
import Main from "../../layouts/Main";
import CourseLayout from "../../layouts/CourseLayout";
import VideoPlayer from "../../component/student/coursePlayer/VideoPlayer";
import Leaderboard from "../../pages/student/Leaderboard";
import StudentRegistration from "../../pages/student/StudentRegistration";
import AdminLogin from "../../pages/admin/AdminLogin";
import AdminLayout from "../../layouts/AdminLayout";
import AdminVideos from "../../pages/admin/AdminVideos";
import AdminQuiz from "../../pages/admin/AdminQuiz";
import AdminDashboard from "../../pages/admin/AdminDashboard";
import AssignmentMark from "../../pages/admin/AssignmentMark";
import Assignment from "../../pages/admin/Assignment";
import Quizzes from "../../pages/student/Quizzes";
import StudentRoute from "../StudentRoute/StudentRoute";
import AdminRoute from "../adminRoute/AdminRoute";

export const router = createBrowserRouter([
    //student routes
    {
        path: '/',
        element: <StudentRoute><Main /></StudentRoute>,
        children: [
            {
                path: '/',
                element: <StudentRoute><StudentLogin /></StudentRoute>
            },
            {
                path: '/course',
                element: <StudentRoute><CourseLayout /></StudentRoute>,
                children: [
                    {
                        path: '/course/videos/:id',
                        element: <StudentRoute><VideoPlayer /></StudentRoute>
                    }
                ]
            },
            {
                path: '/leaderboard',
                element: <StudentRoute><Leaderboard /></StudentRoute>
            },
            {
                path: '/quiz/:id',
                element: <StudentRoute><Quizzes /></StudentRoute>
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
        element: <AdminRoute><AdminLayout /></AdminRoute>,
        children: [
            {
                path: '/admin',
                element: <AdminRoute><AdminDashboard /></AdminRoute>,
            },
            {
                path: '/admin/assignment',
                element: <AdminRoute><Assignment /></AdminRoute>,
            },
            {
                path: '/admin/assignment-mark',
                element: <AdminRoute><AssignmentMark /></AdminRoute>,
            },
            {
                path: '/admin/quizzes',
                element: <AdminRoute><AdminQuiz /></AdminRoute>,
            },
            {
                path: '/admin/videos',
                element: <AdminRoute><AdminVideos /></AdminRoute>,
            }
        ]
    },
    {
        path: '/admin/login',
        element: <AdminLogin />
    },
])