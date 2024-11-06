import TypographyH3 from "@/components/fragments/TypographyH3";
import CardAuth from "@/components/fragments/auth/card/CardAuth";
import { ShoppingBag, Store } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function FormRegister() {
  const navigate = useNavigate();
  return (
    <div className="w-full space-y-4">
      <TypographyH3
        title="Masuk ke Akun-mu"
        className="text-center text-red-600"
      />
      <CardAuth
        onClick={() => navigate("/register/pembeli")}
        className={"text-red-600 border-0 shadow-none"}
        title={"Mitra LOKAMART"}
        desc={
          "Jual dan Perkenalkan produk anda secara efisien ke Pemerintah dan Badan usaha lainnya"
        }
        icon={<Store className="mx-auto size-[64px] md:size-[144px]" />}
      />
      <CardAuth
        onClick={() => navigate("/register/mitra")}
        className={"text-white bg-red-600"}
        title={"Pembeli"}
        desc={
          "Nikmati berbagai layanan dengan harga murah dan proses yang mudah"
        }
        icon={<ShoppingBag className="mx-auto size-[64px] md:size-[144px]" />}
      />
    </div>
  );
}
