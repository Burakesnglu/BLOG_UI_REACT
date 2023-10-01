import { createBrowserRouter } from "react-router-dom";
import Blog from "../components/blog/Blog"; 
import SignUp from "../components/auth/SignUp";
import AdminLayout from "../layouts/admin/AdminLayout";
import MainLayout from "../layouts/main/MainLayout";
import CreateBlog from "../components/blog/CreateBlog";
import Dashboard from "../components/admin/Dashboard";
import TagList from "../components/admin/tag/TagList"; 
import BlogManagement from "../components/admin/blog/BlogManagement";
import SignIn from "../components/auth/SignIn";


const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout />,
        children: [
            {
                index: true,
                element: <Blog />
            },
            {
                path: '/create-blog',
                element: <CreateBlog />
            }
        ]
    },
    {
        path: '/admin',
        element: <AdminLayout />,
        children: [
            {
                index: true,
                element: <Dashboard />
            },
            {
                path: '/admin/blog',
                element: <BlogManagement />
            },
            {
                path: '/admin/tag',
                element: <TagList />
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