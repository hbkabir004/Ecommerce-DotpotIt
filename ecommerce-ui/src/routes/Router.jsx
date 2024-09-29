import { createBrowserRouter } from "react-router-dom";
import App from '../App';
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import NotFoundPage from "../pages/NotFoundPage";
import RegistrationPage from "../pages/RegistrationPage";

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
                path: "registration",
                element: <RegistrationPage />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ],
    },
]);

export default Router;