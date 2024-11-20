import React from 'react'
import { ShoppingCart, MessageSquare, FileText, User } from "lucide-react";
import { useState } from "react";
import logomini from "@/assets/logomini.svg";
import { useNavigate } from 'react-router-dom';
export default function NavbarPenjual() {
    const navigate = useNavigate()
    const [searchQuery, setSearchQuery] = useState("");
    return (
        <nav className="bg-white shadow-md py-4 fixed top-0 left-0 right-0 z-50">
            <div className="container mx-auto px-4">
                <div className="flex items-center justify-between">
                    {/* Logo */}
                    <div
                        onClick={() => navigate("/Dashboard/Mitra")}
                        className="flex items-center cursor-pointer"
                    >
                        <img
                            src={logomini}
                            alt="Lokamart Logo"
                            className="h-12 w-12"
                        />
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
                        {/* User Profile */}
                        <div className="flex flex-col items-center">
                            <User className="h-6 w-6 text-gray-600" />
                            <span className="text-xs text-gray-600 mt-1">LokaMart</span>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    );
}
