import React from 'react';
import Title from '../Title/Title';
import Category from '@/components/layout/main/card/Category';
import { Footprints, Shirt, Watch, Smartphone, Home, ShoppingBag} from 'lucide-react';

export default function SectionCategory() {
    // Data dummy untuk kategori
    const categories = [
        {
            icon: <Footprints className="size-16" />,
            title: "Sepatu",
        },
        {
            icon: <ShoppingBag className="size-16" />,
            title: "Tas",
        },
        {
            icon: <Watch className="size-16" />,
            title: "Jam Tangan",
        },
        {
            icon: <Shirt className="size-16" />,
            title: "Pakaian",
        },        
        {
            icon: <Footprints className="size-16" />,
            title: "Elektronik",
        },
        {
            icon: <Home className="size-16" />,
            title: "Perlengkapan Rumah",
        },
        
    ];

    return (
        <section className="flex flex-col justify-center space-y-4">
            <div className="flex flex-row justify-start gap-4">
                <Title title="Categories" description="Browse By Category" />
            </div>
            {/* Tampilkan kategori dengan looping */}
            <div className="flex flex-row gap-10 justify-center">
                {categories.map((category, index) => (
                    <Category
                        key={index}
                        icons={category.icon}
                        title={category.title}
                    />
                ))}
            </div>
        </section>
    );
}
