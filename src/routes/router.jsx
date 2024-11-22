import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import Home from "../components/Home";
import UserProfile from "../components/UserProfile";
import UserUpdate from "../components/UserUpdate";
import AdventureDetails from "../components/AdventureDetails";
import ErrorPage from "../components/ErrorPage";
import Login from "../components/Login";
import Register from "../components/Register";
import PrivetRoute from "../components/PrivetRoute/PrivetRoute";
import ForgotPassword from "../components/ForgotPassword";

const router = createBrowserRouter([
  {
    path: "/",
    errorElement: <ErrorPage></ErrorPage>,
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        loader: () => fetch("/data.json"),
        element: <Home></Home>,
      },
      {
        path: "/details/:id",
        loader: async ({ params }) => {
          const res = await fetch("/data.json");
          const data = await res.json();

          const singleData = data.find((d) => d.id === parseInt(params.id));
          return singleData;
        },
        element: (
          <PrivetRoute>
            <AdventureDetails></AdventureDetails>
          </PrivetRoute>
        ),
      },
      {
        path: "/update-profile",
        element: (
          <PrivetRoute>
            <UserUpdate></UserUpdate>
          </PrivetRoute>
        ),
      },
      {
        path: "/user-profile",
        element: (
          <PrivetRoute>
            <UserProfile></UserProfile>
          </PrivetRoute>
        ),
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/login/forgot-password",
        element: <ForgotPassword></ForgotPassword>
      },
    ],
  },
]);

export default router;
