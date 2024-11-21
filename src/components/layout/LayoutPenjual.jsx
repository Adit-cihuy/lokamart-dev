import { Outlet } from "react-router-dom";
import Sidebar from "../fragments/sectionpenjual/Sidebar";
import Footer from "./auth/footer";
import NavbarPenjual from "./NavbarPenjual";

const LayoutPenjual = () => {
    return (
        <div className="flex flex-col w-full items-center justify-start space-y-16">
            <div className="w-full p-1 pt-8 sm:p-8 sm:pb-0 space-y-16 flex flex-col items-center">
            <NavbarPenjual />
                <div className="flex-grow w-full max-w-6xl">
                    <div className="flex flex-row gap-12 w-full">                        
                        <Sidebar />
                        <Outlet />
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default LayoutPenjual;
