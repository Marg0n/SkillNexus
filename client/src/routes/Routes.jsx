import { createBrowserRouter } from "react-router-dom";
import ErrorPage from "../pages/ErrorPage";

import Root from './../layouts/Root';
import Home from './../pages/Home';
import Login from "../pages/authentication/Login";
import Register from "../pages/authentication/Register";


export const router = createBrowserRouter([
    {
        path: "/",
        element: <Root />,
        errorElement: <ErrorPage />,
        children: [
            {
                index: true,
                element: <Home />,
            },
            {
                path: "/login",
                element: <Login />,
            },
            {
                path: "/registration",
                element: <Register />,
            },

        ],
    },
]);