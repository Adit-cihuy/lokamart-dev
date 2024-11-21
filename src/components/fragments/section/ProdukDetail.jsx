import React from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Heart, Minus, Plus, Truck, ArrowLeftRight } from "lucide-react";

export default function ProdukDetail() {
    const relatedProducts = [
        { id: 1, name: "Piring Flatima Saewoodem", price: 80000, rating: 5, reviews: 43, image: "/api/placeholder/150/150" },
        { id: 2, name: "Sandal Toll Samanan", price: 90000, rating: 4, reviews: 35, image: "/api/placeholder/150/150" },
        { id: 3, name: "Sepatu Putih Brodo", price: 220000, rating: 5, reviews: 40, image: "/api/placeholder/150/150" },
        { id: 4, name: "Gantungan Kuncirestukamu", price: 25000, rating: 4, reviews: 44, image: "/api/placeholder/150/150" },
    ];

    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Product Images */}
                <div className="space-y-4">
                    <div className="aspect-square">
                        <img
                            src="/api/placeholder/500/500"
                            alt="Baju Batik"
                            className="w-full h-full object-cover rounded-lg"
                        />
                    </div>
                    <div className="grid grid-cols-4 gap-2">
                        {[...Array(4)].map((_, i) => (
                            <img
                                key={i}
                                src="/api/placeholder/120/120"
                                alt={`Thumbnail ${i + 1}`}
                                className="aspect-square object-cover rounded-md cursor-pointer hover:opacity-75"
                            />
                        ))}
                    </div>
                </div>

                {/* Product Info */}
                <div className="space-y-6">
                    <div>
                        <h1 className="text-2xl font-bold mb-2">Baju Batik Koesina Ungu</h1>
                        <div className="flex items-center gap-2">
                            <div className="flex">
                                {[...Array(5)].map((_, i) => (
                                    <Star key={i} size={16} className="text-yellow-400 fill-yellow-400" />
                                ))}
                            </div>
                            <span className="text-sm text-gray-500">(90)</span>
                        </div>
                        <p className="text-2xl font-bold text-red-500 mt-2">IDR 275.000</p>
                    </div>

                    <p className="text-gray-600">
                        Motifnya batik cap motif mega mendung ini berkelas dan juga cantik, KATIN termiskin pink koin yang paling tinggi kualitasnya dengan pemakain cantik terimng untuk anda, serta kemasan bag cantik, nyaman, dan sesuai dengan ekspetasi para pengguna.
                    </p>

                    {/* Color & Size Selection */}
                    <div className="space-y-4">
                        <div>
                            <p className="font-medium mb-2">Warna:</p>
                            <div className="flex gap-2">
                                <button className="w-6 h-6 rounded-full bg-purple-700 ring-2 ring-offset-2 ring-purple-700" />
                                <button className="w-6 h-6 rounded-full bg-blue-500" />
                            </div>
                        </div>

                        <div>
                            <p className="font-medium mb-2">Ukuran:</p>
                            <div className="flex gap-2">
                                {['XS', 'S', 'M', 'L', 'XL'].map((size) => (
                                    <button
                                        key={size}
                                        className="w-10 h-10 border rounded-md hover:bg-gray-50 disabled:opacity-50"
                                    >
                                        {size}
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Quantity & Actions */}
                    <div className="flex gap-4 items-center">
                        <div className="flex items-center border rounded-md">
                            <button className="p-2 hover:bg-gray-50"><Minus size={20} /></button>
                            <input
                                type="number"
                                value="2"
                                className="w-12 text-center border-x"
                            />
                            <button className="p-2 hover:bg-gray-50"><Plus size={20} /></button>
                        </div>
                        <Button className="flex-1 bg-red-500 hover:bg-red-600">
                            Beli
                        </Button>
                        <Button variant="outline" className="p-2">
                            <Heart size={20} />
                        </Button>
                    </div>

                    {/* Shipping Info */}
                    <Card className="p-4 space-y-3">
                        <div className="flex items-center gap-2">
                            <Truck size={20} className="text-gray-400" />
                            <div>
                                <p className="font-medium">Gratis Pengiriman</p>
                                <p className="text-sm text-gray-500">Untuk Semua Pesanan diatas IDR 750.000</p>
                            </div>
                        </div>
                        <div className="flex items-center gap-2">
                            <ArrowLeftRight size={20} className="text-gray-400" />
                            <div>
                                <p className="font-medium">Pengembalian Kembali</p>
                                <p className="text-sm text-gray-500">Kembalikan Barang jika Berbeda dari Pesanan</p>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>

            {/* Related Products */}
            <div className="mt-12">
                <h2 className="text-xl font-bold mb-6">Related Items</h2>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                    {relatedProducts.map((product) => (
                        <Card key={product.id} className="p-4">
                            <img
                                src={product.image}
                                alt={product.name}
                                className="w-full aspect-square object-cover rounded-md mb-4"
                            />
                            <h3 className="font-medium truncate">{product.name}</h3>
                            <p className="text-red-500 font-medium">IDR {product.price.toLocaleString()}</p>
                            <div className="flex items-center gap-1 mt-2">
                                <div className="flex">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            size={14}
                                            className={`${i < product.rating
                                                    ? "text-yellow-400 fill-yellow-400"
                                                    : "text-gray-300"
                                                }`}
                                        />
                                    ))}
                                </div>
                                <span className="text-sm text-gray-500">({product.reviews})</span>
                            </div>
                        </Card>
                    ))}
                </div>
            </div>
        </div>
    );
};
