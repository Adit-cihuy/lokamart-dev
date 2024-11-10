import React from 'react'
import { Star, ShoppingCart } from "lucide-react";

export default function Productcard() {
    return(
        <div className="max-w-xs rounded-lg overflow-hidden shadow-md bg-white">
            {/* Product Image */}
            <div className="relative h-[210px] w-[150px] overflow-hidden">
                <img
                    src="/api/placeholder/400/320"
                    alt="Piring Flatima Saewooden"
                    className="w-full h-full object-cover"
                />
            </div>

            {/* Product Details */}
            <div className="p-4">
                {/* Add to Cart Button */}
                <button className="w-full bg-red-500 text-white py-2 px-4 rounded-md flex items-center justify-center gap-2 hover:bg-red-600 transition-colors mb-3">
                    <ShoppingCart size={20} />
                    <span>Tambah ke Keranjang</span>
                </button>

                {/* Product Name */}
                <h3 className="text-lg font-medium text-gray-800">
                    Piring Flatima Saewooden
                </h3>

                {/* Price */}
                <p className="text-red-500 font-semibold mt-1">
                    IDR 50.000
                </p>

                {/* Rating */}
                <div className="flex items-center mt-2">
                    <div className="flex">
                        {[...Array(5)].map((_, index) => (
                            <Star
                                key={index}
                                size={16}
                                className="text-yellow-400 fill-yellow-400"
                            />
                        ))}
                    </div>
                    <span className="text-gray-600 text-sm ml-2">(65)</span>
                </div>
            </div>
        </div>
    );
}
