import auth1 from "@/assets/auth1.svg";
import auth2 from "@/assets/auth2.svg";
import auth3 from "@/assets/auth3.svg";
import auth4 from "@/assets/auth4.svg";
import { useState } from "react";

const images = [auth1, auth2, auth3, auth4];

export default function LoginPage() {
    const [activeImage, setActiveImage] = useState(auth1);

    const handleImageClick = (imgSrc) => {
        setActiveImage(imgSrc);
    };
    return (

        <section className="flex flex-col w-full md:flex-row items-center justify-center p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row gap-8 items-center">
                {/* Text Content */}
                <div className="flex-1">
                    <h1 className="text-3xl font-bold mb-6">Tentang Kami</h1>
                    <p className="text-gray-600 mb-6">
                        LOKAMART didirikan pada tahun 2024 bertujuan untuk lebih mengembangkan
                        serta menyalurkan penjualan produk lokal Indonesia baik di dalam negeri maupun
                        luar negeri. Produk Lokal Go Digital!
                    </p>
                </div>
            </div>
                <div className="hidden md:flex w-full flex-col justify-center items-center">
                    <img src={activeImage} alt="authHeader" className="w-64 lg:w-80 mb-4" />
                    <div className="flex gap-4">
                        {images.map((imgSrc, index) => (
                            <img
                                key={index}
                                src={imgSrc}
                                alt={`image-${index}`}
                                onClick={() => handleImageClick(imgSrc)}
                                className={`w-16 h-16 cursor-pointer transition-transform transform ${activeImage === imgSrc
                                    ? "border-2"
                                    : "scale-100"
                                    }`}
                            />
                        ))}
                    </div>
                </div>
        </section>
    );
}
