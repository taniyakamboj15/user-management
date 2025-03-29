import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import App from "./App";
import UserList from "./Components/UserList";
import Login from "./Components/Login";
import EditUser from "./Components/EditUser";
import { AuthProvider, useAuth } from "./hooks/useAuth";
import Error from "./Components/Error";

const Routes = () => {
  const { token } = useAuth();

  const router = createBrowserRouter([
    {
      path: "/",
      element: !token ? <Login /> : <Navigate to='/users' />,
      errorElement: <Error />,
    },
    {
      path: "/",
      element: token ? <App /> : <Navigate to='/' />,
      children: [
        {
          path: "users",
          element: <UserList />,
        },
        {
          path: "edit/:id",
          element: <EditUser />,
        },
      ],
      errorElement: <Error />,
    },
  ]);

  return <RouterProvider router={router} />;
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthProvider>
    <Routes />
  </AuthProvider>
);
