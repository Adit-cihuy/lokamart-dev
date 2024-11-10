import React from 'react'
import {CarTaxiFront } from "lucide-react";

export default function Category() {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer w-40">
            {/* Icon */}
            <div className="text-gray-600 mb-2">
                <CarTaxiFront size={32} />
            </div>

            {/* Category Name */}
            <span className="text-gray-700 text-sm font-medium">
                Sepatu
            </span>
        </div>
    );
}
