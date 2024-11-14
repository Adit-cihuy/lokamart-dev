import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import LoginPage from "@/pages/auth/LoginPage";
import RegisterPage from "@/pages/auth/RegisterPage";
import AuthLayout from "@/components/layout/auth/AuthLayout";
import FormRegisterPembeli from "@/components/fragments/auth/FormRegisterPembeli";
import FormRegisterMitra from "@/components/fragments/auth/FormRegisterMitra";
import MainPage from "@/pages/main/MainPage";
import MainLayout from "./components/layout/main/Main";
import SemuaProduct from "./pages/main/SemuaProduct";

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
  {
    element: <MainLayout />,
    children: [
      {
        path: "/Beranda",
        element: <MainPage />,
      },
      {
        path: "/",
        element: <SemuaProduct />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
