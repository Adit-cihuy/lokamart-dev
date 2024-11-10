import React from 'react';
import CountdownApp from "@/components/fragments/FlashSale";
import Title from "@/components/fragments/Title/Title";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from '@/components/ui/button';
import ProductCard from '../card/Productcard';
import Piring from "@/assets/piring.svg";
import LayoutImg from '../LayoutImg';

export default function SectionFeatured() {
    const categories = [
        {
            id: 1,
            title: 'Shima',
            description: 'Mangkok cantik terbuat dari kayu',
            image: '/api/placeholder/800/800',
            large: true
        },
        {
            id: 2,
            title: 'Koleksi Batik',
            description: 'Koleksi batik unggulan yang elegan memberikan Anda penampilan terbaik',
            image: '/api/placeholder/400/400'
        },
        {
            id: 3,
            title: 'The Privayi',
            description: 'Peralatan Makan',
            image: '/api/placeholder/400/400'
        }
    ];
    return (
        <section className="flex flex-col justify-center space-y-4">
            <div className="flex flex-row justify-between gap-4">
                <div className="flex flex-row justify-start gap-4">
                    <Title title="Featured" description="Pendatang Baru" />
                </div>
            </div>
            <div className="container mx-auto p-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                    {categories.map((category) => (
                        <LayoutImg
                            key={category.id}
                            image={category.image}
                            title={category.title}
                            description={category.description}
                            large={category.large}
                        />
                    ))}
                </div>
            </div>
            <Button className="w-fit mx-auto">
                Semua Produk
            </Button>
        </section>
    );
}
