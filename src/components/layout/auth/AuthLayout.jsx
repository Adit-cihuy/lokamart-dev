import { Outlet } from "react-router-dom";
import Header from "@/components/layout/auth/header";
import Footer from "@/components/layout/auth/footer";
import { Card } from "@/components/ui/card";

const AuthLayout = () => {
  return (
    <div className="flex flex-col w-full items-center justify-start space-y-16">
      <div className="w-full p-1 pt-8 sm:p-8 sm:pb-0 space-y-16 flex flex-col items-center min-h-screen">
        <Header />
        <div className="flex-grow w-full">
          <Card className="max-w-6xl m-auto">
            <Outlet />
          </Card>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default AuthLayout;
