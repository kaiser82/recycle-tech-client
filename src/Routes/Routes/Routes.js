import { createBrowserRouter } from "react-router-dom";
import Dashboard from "../../Layout/Dashboard";
import Main from "../../Layout/Main";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";
import Home from "../../Pages/Home/Home/Home";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: '/',
                element: <Home></Home>
            }
        ]
    },
    {
        path: '/dashboard',
        element: <Dashboard></Dashboard>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [

        ]
    }
])


export default router;