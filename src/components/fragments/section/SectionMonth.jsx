import React from 'react';
import CountdownApp from "@/components/fragments/FlashSale";
import Title from "@/components/fragments/Title/Title";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import ProductCard from '../card/Productcard';
import Piring from "@/assets/piring.svg";

export default function SectionMonth() {
    const handleAddToCart = (productName) => {
        alert(`${productName} telah ditambahkan ke keranjang!`);
    };

    // Data dummy untuk produk
    const products = [
        {
            imageSrc: Piring,
            altText: "Piring Flatima Saewooden",
            productName: "Piring Flatima Saewooden",
            price: "IDR 50.000",
            rating: 4,
            ratingCount: 65,
        },
        {
            imageSrc: Piring,
            altText: "Gelas Kayu Handmade",
            productName: "Gelas Kayu Handmade",
            price: "IDR 30.000",
            rating: 5,
            ratingCount: 120,
        },
        {
            imageSrc: Piring,
            altText: "Sendok Kayu",
            productName: "Sendok Kayu",
            price: "IDR 15.000",
            rating: 3,
            ratingCount: 30,
        },
        // Tambahkan produk lain jika diperlukan
    ];

    return (
        <section className="flex flex-col justify-center space-y-4">
            <div className="flex flex-row justify-between gap-4">
                <div className="flex flex-row justify-start gap-4">
                    <Title title="This Month" description="Tawarkan Pilihanmu" />
                </div>
                <div className="flex flex-row items-center justify-center gap-1">
                    <Button className="w-fit mx-auto">
                        Lihat Semua
                    </Button>
                </div>
            </div>

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
    );
}
