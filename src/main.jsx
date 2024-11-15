import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import AuthLayout from "@/components/layout/auth/AuthLayout";
import FormRegisterPembeli from "@/components/fragments/auth/FormRegisterPembeli";
import FormRegisterMitra from "@/components/fragments/auth/FormRegisterMitra";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/register",
        element: <RegisterPage />,
      },
      {
        path: "/register/pembeli",
        element: <FormRegisterPembeli />,
      },
      {
        path: "/register/mitra",
        element: <FormRegisterMitra />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
