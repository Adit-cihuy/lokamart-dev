import { Outlet } from "react-router-dom";
import Footer from "@/components/layout/auth/footer";
import Navbar from "../Navbar";


const MainLayout = () => {
  return (
    <div className="flex flex-col w-full items-center justify-start space-y-16">
      <div className="w-full p-1 pt-8 sm:p-8 sm:pb-0 space-y-16 flex flex-col items-center min-h-screen">
        <Navbar />
        <div className="flex-grow w-full max-w-6xl">
          
            <Outlet />
          
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default MainLayout;
