import React from "react";
import ReactDOM from "react-dom/client";
import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom";
import { Navigate } from "react-router-dom";

import dotenv from 'dotenv'
dotenv.config()

import Header from "./components/Header/Header";
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Footer from "./components/Footer/Footer";
import Category from "./components/CategoryPage/Category";
import Product from "./components/Product/Product";
import SearchProducts from "./components/SearchProducts";
import UnderConst from "./components/Underconst";
import Error from "./components/Error";

const root = ReactDOM.createRoot(document.getElementById("root"));

const AppLayout = () => {
    return (
        <div>
            <Header />
            <div className="bg-white w-full lg:px-24 xl:px-40 md:py-2">
                <Outlet />
            </div>
            <Footer />
        </div>

    )
}

const routes = createBrowserRouter([
    {
        path: '/',
        element: <AppLayout />,
        children: [
            {
                path: '/',
                element: [<Navbar key='nav' />, <Home key="home" />],

            },
            {
                path: '/cat/:cat',
                element: <Category />

            },
            {
                path: '/product/:product_id',
                element: <Product />

            },
            {
                path: '/searchProduct/:text',
                element: <SearchProducts />

            },
            {
                path: '/underconst',
                element: <UnderConst />

            },
            {
                path: '/searchProduct/',
                element: <Navigate to='/' />

            },
            {
                path: '/:error',
                element: <Error />

            },

        ]
    },
]);

root.render(<RouterProvider router={routes} />);
