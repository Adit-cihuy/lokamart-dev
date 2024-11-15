import React, { useState } from 'react';

export default function TabPembayaran() {
    const [selectedStatus, setSelectedStatus] = useState("Belum Dibayar");

    // Data Dummy
    const payments = [
        {
            id: 1,
            customerName: "Putri Dwi Handayani",
            productName: "Tas Piknik Lurik Pandan",
            amount: "IDR 410.000",
            status: "Belum Dibayar",
            paymentMethod: "Transfer Bank",
        },
        {
            id: 2,
            customerName: "Ahmad Ridwan",
            productName: "Gelas Kayu Handmade",
            amount: "IDR 320.000",
            status: "Pembayaran Selesai",
            paymentMethod: "OVO",
        },
    ];

    // Filter payments berdasarkan status
    const filteredPayments = payments.filter(payment => payment.status === selectedStatus);

    return (
        <div className="p-4">
            {/* Status Filter */}
            <div className="flex gap-4 mb-6">
                <button
                    className={`px-4 py-2 text-sm rounded-full ${selectedStatus === "Belum Dibayar"
                        ? "bg-red-500 text-white"
                        : "border border-gray-300 text-gray-600 hover:bg-gray-50"
                        }`}
                    onClick={() => setSelectedStatus("Belum Dibayar")}
                >
                    Belum Dibayar ({payments.filter(payment => payment.status === "Belum Dibayar").length})
                </button>
                <button
                    className={`px-4 py-2 text-sm rounded-full ${selectedStatus === "Pembayaran Selesai"
                        ? "bg-red-500 text-white"
                        : "border border-gray-300 text-gray-600 hover:bg-gray-50"
                        }`}
                    onClick={() => setSelectedStatus("Pembayaran Selesai")}
                >
                    Pembayaran Selesai ({payments.filter(payment => payment.status === "Pembayaran Selesai").length})
                </button>
            </div>

            {/* Payment Table */}
            <div className="overflow-x-auto">
                <table className="w-full border-collapse">
                    <thead>
                        <tr className="border-b">
                            <th className="text-left py-4 px-4 font-medium text-gray-600 w-[30%]">Produk</th>
                            <th className="text-left py-4 px-4 font-medium text-gray-600">Jumlah Harus Dibayar</th>
                            <th className="text-left py-4 px-4 font-medium text-gray-600">Status</th>
                            <th className="text-left py-4 px-4 font-medium text-gray-600">Metode Pembayaran</th>
                        </tr>
                    </thead>
                    <tbody>
                        {filteredPayments.map(payment => (
                            <tr key={payment.id} className="border-b hover:bg-gray-50">
                                <td className="py-4 px-4">
                                    <div className="flex gap-4 items-center">
                                        <img
                                            src="/api/placeholder/60/60"
                                            alt={payment.productName}
                                            className="w-16 h-16 rounded-md object-cover"
                                        />
                                        <div>
                                            <p className="font-medium mb-1">{payment.customerName}</p>
                                            <p className="text-gray-600">{payment.productName}</p>
                                        </div>
                                    </div>
                                </td>
                                <td className="py-4 px-4">
                                    <span className="font-medium">{payment.amount}</span>
                                </td>
                                <td className="py-4 px-4">
                                    <span
                                        className={`px-3 py-1 rounded-full text-sm ${payment.status === "Belum Dibayar"
                                            ? "bg-yellow-100 text-yellow-800"
                                            : "bg-green-100 text-green-800"
                                            }`}
                                    >
                                        {payment.status}
                                    </span>
                                </td>
                                <td className="py-4 px-4">
                                    <span className="text-gray-600">{payment.paymentMethod}</span>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
                {filteredPayments.length === 0 && (
                    <div className="text-center py-8 text-gray-600">
                        Tidak ada pembayaran dengan status "{selectedStatus}"
                    </div>
                )}
            </div>
        </div>
    );
}
