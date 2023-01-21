import {
    createBrowserRouter
} from "react-router-dom";
import Login from "./Authentication/Login";
import Reg from "./Authentication/Reg";
import Dashboard from "./Dashboard/Dashboard";
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
                element: <Dashboard />
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