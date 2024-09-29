import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import HomePage from "../pages/HomePage";
import MyAccountPage from "../pages/MyAccountPage";
import NotFoundPage from "../pages/NotFoundPage";

const Router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <HomePage />,
            },
            {
                path: "myaccount",
                element: <MyAccountPage />,
            },
            // {
            //     path: "login",
            //     element: <LoginPage />,
            // },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ],
    },
]);

export default Router;