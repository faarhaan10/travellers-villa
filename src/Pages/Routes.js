import {
    createBrowserRouter
} from "react-router-dom";
import Login from "./Authentication/Login";
import Reg from "./Authentication/Reg";
import Dashboard from "./Dashboard/Dashboard";
import AddBlogs from "./Dashboard/DashItems/AddBlogs";
import MakeAdmin from "./Dashboard/DashItems/MakeAdmin";
import ManageUsers from "./Dashboard/ManageUsers";
import ViewBlogs from "./Dashboard/ViewBlogs";
import Home from "./Home/Home";
import Main from "./Layout/Main";


const router = createBrowserRouter([
    {
        path: "/",
        element: <Main />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/home",
                element: <Home />
            },
            {
                path: "/dashboard",
                element: <Dashboard />,
                children: [
                    {
                        path: "add-blogs",
                        element: <AddBlogs />
                    },
                    {
                        path: "make-admin",
                        element: <MakeAdmin />
                    },
                    {
                        path: "manage-users",
                        element: <ManageUsers />
                    },
                    {
                        path: "view-blogs",
                        element: <ViewBlogs />
                    },
                ]
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/register",
                element: <Reg />
            },
        ]

    }
]);

export default router;