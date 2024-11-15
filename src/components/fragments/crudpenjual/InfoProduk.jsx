import React from 'react'
import { Checkbox } from "@/components/ui/checkbox";

export default function InfoProduk() {
    const products = [
        {
            id: 1,
            name: "Ministring Tas Pink",
            subtitle: "Lurik Pattern Hijau",
            price: 450000,
            stock: 40,
            image: "/api/placeholder/60/60"
        },
        {
            id: 2,
            name: "Piring Rotan",
            subtitle: "Motifwangi",
            price: 25000,
            stock: 122,
            image: "/api/placeholder/60/60"
        },
        {
            id: 3,
            name: "Sendal Boruto",
            price: 90000,
            stock: 32,
            image: "/api/placeholder/60/60"
        },
        {
            id: 4,
            name: "Sepatu Robert Abu",
            price: 300000,
            stock: 46,
            image: "/api/placeholder/60/60"
        },
        {
            id: 5,
            name: "Baju Batik",
            subtitle: "Bageran Kain Sutra",
            price: 475000,
            stock: 19,
            image: "/api/placeholder/60/60"
        },
        {
            id: 6,
            name: "Keranjang Rotan",
            subtitle: "Motifwangi",
            price: 90000,
            stock: 150,
            image: "/api/placeholder/60/60"
        },
        {
            id: 7,
            name: "Sendal Daniel",
            subtitle: "DarkerStock",
            price: 85000,
            stock: 55,
            image: "/api/placeholder/60/60"
        }
    ];

    return (
        <div className="p-6">
            <table className="w-full">
                <thead>
                    <tr className="border-b">
                        <th className="text-left py-4 px-4 font-medium text-gray-600">Info Produk</th>
                        <th className="text-left py-4 px-4 font-medium text-gray-600">Harga</th>
                        <th className="text-left py-4 px-4 font-medium text-gray-600">Stok</th>
                        <th className="text-left py-4 px-4 font-medium text-gray-600">Aktif</th>
                    </tr>
                </thead>
                <tbody>
                    {products.map((product) => (
                        <tr key={product.id} className="border-b hover:bg-gray-50">
                            <td className="py-4 px-4">
                                <div className="flex gap-4 items-center">
                                    <img
                                        src={product.image}
                                        alt={product.name}
                                        className="w-16 h-16 rounded-md object-cover"
                                    />
                                    <div>
                                        <p className="font-medium">{product.name}</p>
                                        {product.subtitle && (
                                            <p className="text-sm text-gray-500">{product.subtitle}</p>
                                        )}
                                    </div>
                                </div>
                            </td>
                            <td className="py-4 px-4">
                                IDR {product.price.toLocaleString()}
                            </td>
                            <td className="py-4 px-4">
                                {product.stock}
                            </td>
                            <td className="py-4 px-4">
                                <Checkbox defaultChecked />
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};
