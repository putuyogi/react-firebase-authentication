import { createBrowserRouter } from "react-router-dom";
import Home from "../components/Home";
import Login from "../components/Login";
import Register from "../components/Register";
import SamplePrivateComponent from "../components/SamplePrivateComponent";
import PrivateRoute from "./PrivateRoute";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/private-route",
        element: <PrivateRoute>
            <SamplePrivateComponent />
        </PrivateRoute>,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
]);

export default router