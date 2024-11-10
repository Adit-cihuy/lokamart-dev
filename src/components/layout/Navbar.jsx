import React from 'react'
import { ShoppingCart, MessageSquare, FileText, User } from "lucide-react";
import { useState } from "react";

export default function Navbar() {
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <nav className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div className="flex items-center">
                        <img
                            src="/api/placeholder/50/50"
                            alt="Lokamart Logo"
                            className="h-12 w-12"
                        />
                        <span className="ml-2 text-xl font-bold text-gray-800">LOKAMART</span>
                    </div>

                    {/* Search Bar */}
                    <div className="flex-1 mx-8">
                        <div className="relative">
                            <input
                                type="text"
                                placeholder="Cari barang atau toko..."
                                value={searchQuery}
                                onChange={(e) => setSearchQuery(e.target.value)}
                                className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-red-500"
                            />
                            <button className="absolute right-0 top-0 h-full px-6 bg-red-500 text-white rounded-r-md hover:bg-red-600 transition-colors">
                                Cari
                            </button>
                        </div>
                    </div>

                    {/* Navigation Icons */}
                    <div className="flex items-center space-x-6">
                        {/* Pesan */}
                        <div className="flex flex-col items-center">
                            <MessageSquare className="h-6 w-6 text-gray-600" />
                            <span className="text-xs text-gray-600 mt-1">Pesan</span>
                        </div>

                        {/* Transaksi */}
                        <div className="flex flex-col items-center">
                            <FileText className="h-6 w-6 text-gray-600" />
                            <span className="text-xs text-gray-600 mt-1">Transaksi</span>
                        </div>

                        {/* Keranjang */}
                        <div className="flex flex-col items-center relative">
                            <div className="relative">
                                <ShoppingCart className="h-6 w-6 text-gray-600" />
                                <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-4 w-4 flex items-center justify-center">
                                    2
                                </span>
                            </div>
                            <span className="text-xs text-gray-600 mt-1">Keranjang</span>
                        </div>

                        {/* User Profile */}
                        <div className="flex flex-col items-center">
                            <User className="h-6 w-6 text-gray-600" />
                            <span className="text-xs text-gray-600 mt-1">Putri Dwi</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
