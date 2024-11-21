import React from 'react';
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Minus, Plus } from "lucide-react";

export default function Keranjang() {
    return (
        <div className="container mx-auto p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Cart Items */}
                <div className="lg:col-span-2">
                    <table className="w-full">
                        <thead>
                            <tr className="border-b">
                                <th className="text-left py-4">Product</th>
                                <th className="text-left py-4">Price</th>
                                <th className="text-left py-4">Quantity</th>
                                <th className="text-left py-4">Subtotal</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b">
                                <td className="py-4">
                                    <div className="flex gap-4">
                                        <img
                                            src="/api/placeholder/80/80"
                                            alt="Piring Flatima"
                                            className="w-20 h-20 object-cover rounded-md"
                                        />
                                        <div>
                                            <p className="font-medium">Piring Flatima Saewoodem</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4">IDR 80.000</td>
                                <td className="py-4">
                                    <div className="flex items-center border rounded-md w-fit">
                                        <button className="p-1 hover:bg-gray-50"><Minus size={16} /></button>
                                        <input
                                            type="number"
                                            value="1"
                                            className="w-12 text-center border-x"
                                            readOnly
                                        />
                                        <button className="p-1 hover:bg-gray-50"><Plus size={16} /></button>
                                    </div>
                                </td>
                                <td className="py-4">IDR 80.000</td>
                            </tr>
                        </tbody>
                    </table>

                    <button className="text-red-500 text-sm mt-4">
                        Sambati lainlagi
                    </button>
                </div>

                {/* Cart Summary */}
                <div>
                    <Card className="p-4">
                        <h3 className="font-medium mb-4">Cart Total</h3>
                        <div className="space-y-2 border-b pb-4">
                            <div className="flex justify-between">
                                <span>Subtotal:</span>
                                <span>IDR 80.000</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Ongkir:</span>
                                <span className="text-green-600">Gratis</span>
                            </div>
                        </div>
                        <div className="flex justify-between pt-4 font-medium">
                            <span>Total:</span>
                            <span>IDR 80.000</span>
                        </div>
                        <Button className="w-full bg-red-500 hover:bg-red-600 mt-4">
                            Bayar Sekarang
                        </Button>
                    </Card>
                </div>
            </div>
        </div>
    );
};
