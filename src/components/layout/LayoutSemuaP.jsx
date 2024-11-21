import { Outlet } from "react-router-dom";
import Navbar from "./Navbar";
import Banner from "../fragments/Banner";
import SectionCategory from "../fragments/section/SectionCategory";
import SectionSemuaP from "../fragments/section/SectionSemuaP";



const LayoutSemuaP = () => {
    return (
        <div className="flex flex-col w-full items-center justify-start space-y-16">
            <div className="w-full p-1 pt-8 sm:p-8 sm:pb-0 space-y-16 flex flex-col items-center">
                <Navbar />
                <Banner />
                <SectionCategory />
                <SectionSemuaP />
                <div className="flex-grow w-full max-w-6xl">
                    <div className="flex flex-row gap-12">
                        <Outlet />
                    </div>
                </div>
            </div>
            
        </div>
    );
};

export default LayoutSemuaP;
