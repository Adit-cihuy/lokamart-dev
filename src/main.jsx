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
import LoginPenjual from "./pages/auth/LoginPenjual";
import Dashboard from "./pages/Penjual/dashboard/Dashboard";
import LayoutPenjual from "./components/layout/LayoutPenjual";
import TambahProduk from "./components/fragments/crudpenjual/TambahProduk";
import InfoSaldo from "./pages/Penjual/dashboard/InfoSaldo";
import InfoProduk from "./components/fragments/crudpenjual/InfoProduk";
import AboutUs from "./pages/Penjual/dashboard/AboutUs";
import Pengaduan from "./pages/Penjual/dashboard/Pengaduan";
import RekeningBank from "./pages/Penjual/dashboard/RekeningBank";
import ProdukDetail from "./components/fragments/section/ProdukDetail";
import Kontak from "./components/fragments/section/Kontak";

const router = createBrowserRouter([
  {
    element: <AuthLayout />,
    children: [
      {
        path: "/login",
        element: <LoginPage />,
      },
      {
        path: "/login/penjual",
        element: <LoginPenjual />,
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
        path: "/SemuaProduct",
        element: <SemuaProduct />,
      },
      {
        path: "/ProdukDetail",
        element: <ProdukDetail />,
      },
      {
        path: "/Kontak",
        element: <Kontak />,
      },
    ],
  },
  {
    element: <LayoutPenjual />,
    children: [
      {
        path: "/Dashboard/Mitra",
        element: <Dashboard />,
      },
      {
        path: "/Dashboard/TambahProduk",
        element: <TambahProduk />,
      },
      {
        path: "/Dashboard/InformasiSaldo",
        element: <InfoSaldo />,
      },
      {
        path: "/Dashboard/DaftarProduk",
        element: <InfoProduk />,
      },
      {
        path: "/Dashboard/TentangKami",
        element: <AboutUs />,
      },
      {
        path: "/Dashboard/Pengaduan",
        element: <Pengaduan />,
      },
      {
        path: "/Dashboard/Rekening",
        element: <RekeningBank />,

      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
