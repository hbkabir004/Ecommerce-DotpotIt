import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/NotFoundPage";

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
                element: <RegistrationForm />,
            },
            {
                path: "login",
                element: <LoginForm />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ],
    },
]);

export default Router;
