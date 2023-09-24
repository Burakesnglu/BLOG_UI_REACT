import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/blog/Blog";
import SignIn from "../components/auth/signIn";
import SignUp from "../components/auth/SignUp";
import AdminLayout from "../layouts/admin/AdminLayout";
import MainLayout from "../layouts/main/MainLayout";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Blog />
            }
        ]
    },
    {
        path: '/sign-in',
        element: <SignIn />
    },
    {
        path: '/sign-up',
        element: <SignUp />
    },
    {
        path: '/admin',
        element: <AdminLayout />
    },
])

export default routes