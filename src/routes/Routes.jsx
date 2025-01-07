import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layout/MainLayout";
import Home from "../pages/home/home/Home";
import OurMenu from "../pages/OurMenu/ourMenu/OurMenu";
import OurShop from "../pages/ourShop/ourShop/OurShop";
import axios from "axios";
import Login from "../pages/authentication/Login";
import Signup from "../pages/authentication/Signup";
import PrivateRoutes from "./PrivateRoutes";
import Dashboard from "../layout/Dashboard";
import MyCart from "../pages/userPages/myCart/MyCart";
import AllUsers from "../pages/adminPages/allUsers/AllUsers";
import AdminRoutes from "./AdminRoutes";
import AddItems from "../pages/adminPages/addAnItem/AddItems";
const API_LINK = import.meta.env.VITE_API_LINK;

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "our-menu",
        element: (
          <PrivateRoutes>
            <OurMenu />
          </PrivateRoutes>
        ),
      },
      {
        path: "our-shop/:menu_name",
        element: <OurShop />,
        loader: () => axios.get(`${API_LINK}/menu/category-counts`),
      },
    ],
  },
  {
    path: "dashboard",
    element: <Dashboard />,
    children: [
      // admin routes
      {
        path: "add-items",
        element: (
          <AdminRoutes>
            <AddItems />
          </AdminRoutes>
        ),
      },
      {
        path: "all-users",
        element: (
          <AdminRoutes>
            <AllUsers />
          </AdminRoutes>
        ),
      },

      // user routes
      {
        path: "my-cart",
        element: (
          <PrivateRoutes>
            <MyCart />
          </PrivateRoutes>
        ),
      },
    ],
  },
  {
    path: "login",
    element: <Login />,
  },
  {
    path: "signup",
    element: <Signup />,
  },

  /*{
    path: "/*",
    element: <h1>Page Not Found</h1>,
    error: true,
  }*/
]);
