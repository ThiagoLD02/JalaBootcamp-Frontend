import { createBrowserRouter } from "react-router-dom";
import Singin from "../pages/singin";
import Login from "../pages/login";
import ListUsers from "../pages/listUsers";

export const router = createBrowserRouter([
  {
    path: "/singin",
    element: <Singin />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/",
    element: <ListUsers />,
  },
]);
