import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import HomePage from "../pages/HomePage";
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
                element: <RegistrationForm />,
            },
            {
                path: "myaccount/login/myaccount",
                element: <RegistrationForm />,
            },
            {
                path: "myaccount/login",
                element: <LoginForm />
            },
            {
                path: "*",
                element: <NotFoundPage />
            }
        ],
    },
]);

export default Router;
