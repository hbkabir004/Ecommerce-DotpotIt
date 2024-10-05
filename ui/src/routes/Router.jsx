import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Cart from "../components/Cart/Cart";
import CheckoutPage from "../components/Invoice/CheckoutPage";
import LoginForm from "../components/LoginForm";
import RegistrationForm from "../components/RegistrationForm";
import HomePage from "../pages/HomePage";
import ErrorPage from "../pages/NotFoundPage";
import { productsAndCartData } from '../utility/getCart&ProductsData';

const Router = createBrowserRouter([
    {
        path: "/",
        loader: productsAndCartData,
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
                path: "cart",
                element: <Cart />
            },
            {
                path: "invoice",
                element: <CheckoutPage />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ],
    },
]);

export default Router;
