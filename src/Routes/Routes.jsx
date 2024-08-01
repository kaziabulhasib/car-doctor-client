import { createBrowserRouter } from "react-router-dom";
import Root from "../layouts/Root";
import Home from "../pages/Home";
import Login from "../pages/Login";
import SignUp from "../pages/SignUp";
import Checkout from "../pages/Checkout";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/login",
        element: <Login />,
      },
      {
        path: "/signup",
        element: <SignUp />,
      },
      {
        path: "/checkout/:id",
        element: <Checkout />,
        loader: ({ params }) =>
          fetch(`http://localhost:5000/services/${params.id}`),
      },
    ],
  },
]);

export default router;
