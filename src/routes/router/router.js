import { createBrowserRouter } from "react-router-dom";
import StudentLogin from "../../pages/student/StudentLogin";
import Main from "../../layouts/Main";
import CourseLayout from "../../layouts/CourseLayout";
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
import ModulePlayer from "../../component/student/coursePlayer/ModulePlayer";
import StudentRoute from "../StudentRoute/StudentRoute";

export const router = createBrowserRouter([
    //student routes
    {
        path: '/',
        element: <StudentRoute><Main /></StudentRoute>,
        children: [
            {
                path: '/',
                element: <StudentRoute><CourseLayout /></StudentRoute>,
                children: [
                    {
                        path: '/modules/:id',
                        element: <StudentRoute><ModulePlayer /></StudentRoute>
                    }
                ]
            },
            {
                path: '/leaderboard',
                element: <StudentRoute><Leaderboard /></StudentRoute>
            },
            {
                path: '/quiz',
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
        element: <AdminLayout />,
        children: [
            {
                path: '/admin',
                element: <AdminDashboard />,
            },
            {
                path: '/admin/assignment',
                element: <Assignment />,
            },
            {
                path: '/admin/assignment-mark',
                element: <AssignmentMark />,
            },
            {
                path: '/admin/quizzes',
                element: <AdminQuiz />
            },
            {
                path: '/admin/videos',
                element: <AdminVideos />
            }
        ]
    },
    {
        path: '/admin/login',
        element: <AdminLogin />
    },
])