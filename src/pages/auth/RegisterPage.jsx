import auth1 from "@/assets/auth1.svg";
import auth2 from "@/assets/auth2.svg";
import auth3 from "@/assets/auth3.svg";
import auth4 from "@/assets/auth4.svg";
import FormRegister from "@/components/fragments/auth/FormRegister";
import { useState } from "react";

const images = [auth1, auth2, auth3, auth4];

export default function RegisterPage() {
  const [activeImage, setActiveImage] = useState(auth1);

  const handleImageClick = (imgSrc) => {
    setActiveImage(imgSrc);
  };
  return (
    <section className="flex flex-col w-full md:flex-row items-center justify-center p-8 lg:p-10">
      <FormRegister />

      <div className="hidden md:flex w-full flex-col justify-center items-center">
        <img src={activeImage} alt="authHeader" className="w-64 mb-4" />
        <div className="flex gap-4">
          {images.map((imgSrc, index) => (
            <img
              key={index}
              src={imgSrc}
              alt={`image-${index}`}
              onClick={() => handleImageClick(imgSrc)}
              className={`w-16 h-16 cursor-pointer transition-transform transform ${
                activeImage === imgSrc ? "border-2" : "scale-100"
              }`}
            />
          ))}
        </div>
        <div className="mt-6 text-red-600 text-center">
          <h4 className="text-xl font-bold">Bantu UMKM Naik Kelas & Go Digital</h4>
          <span>
            Memberikan akses kepada UMKM untuk dapat bergabung dalam ekosistem
            Pengadaan Barang dan Jasa Pemerintah secara digital
          </span>
        </div>
      </div>
    </section>
  );
}