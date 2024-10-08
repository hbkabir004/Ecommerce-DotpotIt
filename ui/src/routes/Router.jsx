import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import CartPage from "../components/Cart/CartPage";
import InvoicePage from "../components/Invoice/InvoicePage";
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
                element: <CartPage />
            },
            {
                path: "invoice",
                element: <InvoicePage />
            },
            {
                path: "*",
                element: <ErrorPage />
            }
        ],
    },
]);

export default Router;
