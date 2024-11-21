import React from 'react'
import ProductCard from '../card/Productcard';
import Piring from "@/assets/piring.svg";

export default function SectionSemuaP() {
    const handleAddToCart = (productName) => {
        alert(`${productName} telah ditambahkan ke keranjang!`);
    };

    // Data dummy untuk produk
    const products = [
        // Sepatu
        {
            imageSrc: "/assets/sepatu1.svg",
            altText: "Sepatu Sneakers Modern",
            productName: "Sepatu Sneakers Modern",
            price: "IDR 350.000",
            rating: 5,
            ratingCount: 120,
        },
        {
            imageSrc: "/assets/sepatu2.svg",
            altText: "Sepatu Formal Kulit",
            productName: "Sepatu Formal Kulit",
            price: "IDR 450.000",
            rating: 4,
            ratingCount: 85,
        },

        // Tas
        {
            imageSrc: "/assets/tas1.svg",
            altText: "Tas Ransel Stylish",
            productName: "Tas Ransel Stylish",
            price: "IDR 200.000",
            rating: 4,
            ratingCount: 65,
        },
        {
            imageSrc: "/assets/tas2.svg",
            altText: "Tas Selempang Kulit",
            productName: "Tas Selempang Kulit",
            price: "IDR 300.000",
            rating: 5,
            ratingCount: 110,
        },

        // Jam Tangan
        {
            imageSrc: "/assets/jamtangan1.svg",
            altText: "Jam Tangan Analog Klasik",
            productName: "Jam Tangan Analog Klasik",
            price: "IDR 500.000",
            rating: 4,
            ratingCount: 40,
        },
        {
            imageSrc: "/assets/jamtangan2.svg",
            altText: "Jam Tangan Digital Sport",
            productName: "Jam Tangan Digital Sport",
            price: "IDR 350.000",
            rating: 5,
            ratingCount: 75,
        },

        // Pakaian
        {
            imageSrc: "/assets/pakaian1.svg",
            altText: "Kemeja Polos Pria",
            productName: "Kemeja Polos Pria",
            price: "IDR 150.000",
            rating: 4,
            ratingCount: 90,
        },
        {
            imageSrc: "/assets/pakaian2.svg",
            altText: "Blouse Wanita Elegan",
            productName: "Blouse Wanita Elegan",
            price: "IDR 180.000",
            rating: 5,
            ratingCount: 120,
        },

        // Elektronik
        {
            imageSrc: "/assets/elektronik1.svg",
            altText: "Headphone Wireless",
            productName: "Headphone Wireless",
            price: "IDR 850.000",
            rating: 4,
            ratingCount: 150,
        },
        {
            imageSrc: "/assets/elektronik2.svg",
            altText: "Smartphone Canggih",
            productName: "Smartphone Canggih",
            price: "IDR 3.500.000",
            rating: 5,
            ratingCount: 300,
        },

        // Perlengkapan Rumah
        {
            imageSrc: "/assets/rumah1.svg",
            altText: "Set Piring Keramik",
            productName: "Set Piring Keramik",
            price: "IDR 250.000",
            rating: 4,
            ratingCount: 60,
        },
        {
            imageSrc: "/assets/rumah2.svg",
            altText: "Lampu Meja Minimalis",
            productName: "Lampu Meja Minimalis",
            price: "IDR 400.000",
            rating: 5,
            ratingCount: 95,
        },
    ];

    return (
        <section className="flex flex-col justify-center space-y-4">
            {/* Produk ditampilkan menggunakan looping */}
            <div className="flex flex-wrap gap-4 mt-4">
                {products.map((product, index) => (
                    <ProductCard
                        key={index}
                        imageSrc={product.imageSrc}
                        altText={product.altText}
                        productName={product.productName}
                        price={product.price}
                        rating={product.rating}
                        ratingCount={product.ratingCount}
                        onAddToCart={() => handleAddToCart(product.productName)}
                    />
                ))}
            </div>
        </section>
    )
}

