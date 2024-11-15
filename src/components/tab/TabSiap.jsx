import React, { useState } from 'react';

export default function TabSiap() {
    const [selectedStatus, setSelectedStatus] = useState("Siap Dikirim");

    // Data Dummy
    const orders = [
        {
            id: 1,
            customerName: "Putri Dwi Handayani",
            productName: "Tas Piknik Lurik Pandan",
            amount: "IDR 410.000",
            status: "Siap Dikirim",
            shipping: "J&T Express",
        },
        {
            id: 2,
            customerName: "Ahmad Ridwan",
            productName: "Piring Flatima Saewooden",
            amount: "IDR 250.000",
            status: "Dalam Pengiriman",
            shipping: "SiCepat",
        },
        {
            id: 3,
            customerName: "Intan Permata Sari",
            productName: "Gelas Kayu Handmade",
            amount: "IDR 320.000",
            status: "Dikirim",
            shipping: "JNE",
        },
    ];

    // Filter orders berdasarkan status
    const filteredOrders = orders.filter(order => order.status === selectedStatus);

    return (
        <div className="p-4">
            {/* Status Filter */}
            <div className="flex gap-4 mb-6">
                <button
                    className={`px-4 py-2 text-sm rounded-full ${selectedStatus === "Siap Dikirim"
                        ? "bg-red-500 text-white"
                        : "border border-gray-300 text-gray-600 hover:bg-gray-50"
                        }`}
                    onClick={() => setSelectedStatus("Siap Dikirim")}
                >
                    Siap Dikirim ({orders.filter(order => order.status === "Siap Dikirim").length})
                </button>
                <button
                    className={`px-4 py-2 text-sm rounded-full ${selectedStatus === "Dalam Pengiriman"
                        ? "bg-red-500 text-white"
                        : "border border-gray-300 text-gray-600 hover:bg-gray-50"
                        }`}
                    onClick={() => setSelectedStatus("Dalam Pengiriman")}
                >
                    Dalam Pengiriman ({orders.filter(order => order.status === "Dalam Pengiriman").length})
                </button>
                <button
                    className={`px-4 py-2 text-sm rounded-full ${selectedStatus === "Dikirim"
                        ? "bg-red-500 text-white"
                        : "border border-gray-300 text-gray-600 hover:bg-gray-50"
                        }`}
                    onClick={() => setSelectedStatus("Dikirim")}
                >
                    Dikirim ({orders.filter(order => order.status === "Dikirim").length})
                </button>
            </div>

            {/* Orders Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-4 px-4 font-medium text-gray-600 w-[40%]">Produk</th>
                            <th className="text-left py-4 px-4 font-medium text-gray-600">Jumlah Harus Dibayar</th>
                            <th className="text-left py-4 px-4 font-medium text-gray-600">Status</th>
                            <th className="text-left py-4 px-4 font-medium text-gray-600">Jasa Kirim</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredOrders.map(order => (
                            <tr key={order.id} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-4">
                                    <div className="flex gap-4 items-center">
                                        <img
                                            src="/api/placeholder/60/60"
                                            alt={order.productName}
                                            className="w-16 h-16 rounded-md object-cover"
                                        />
                                        <div>
                                            <p className="font-medium mb-1">{order.customerName}</p>
                                            <p className="text-gray-600">{order.productName}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-4">
                                    <span className="font-medium">{order.amount}</span>
                                </td>
                                <td className="py-4 px-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${order.status === "Siap Dikirim"
                                            ? "bg-green-100 text-green-800"
                                            : order.status === "Dalam Pengiriman"
                                                ? "bg-yellow-100 text-yellow-800"
                                                : "bg-blue-100 text-blue-800"
                                            }`}
                                    >
                                        {order.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4">
                                    <span className="text-gray-600">{order.shipping}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredOrders.length === 0 && (
                    <div className="text-center py-8 text-gray-600">
                        Tidak ada pesanan dengan status "{selectedStatus}"
                    </div>
                )}
            </div>
        </div>
    );
}
