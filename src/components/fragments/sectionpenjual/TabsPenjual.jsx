import React, { useState } from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent } from "@/components/ui/card";
import Banner from '../Banner';
import { Separator } from '@/components/ui/separator';
import { Button } from '@/components/ui/button';
import TabSiap from '@/components/tab/TabSiap';
import TabPembayaran from '@/components/tab/TabPembayaran';

const TabsPenjual = () => {
    // State untuk menyimpan data penawaran
    const [offers, setOffers] = useState([
        {
            id: 1,
            status: "pending", // Status default
            customerName: "Putri Dwi Handayani",
            contact: "+62 823 123 191 43",
            productName: "Tas Piknik Lurik Pandan",
            productImage: "/api/placeholder/120/120",
            totalPrice: 450000,
            offerPrice: 410000,
            invoice: "INV/20240111/00000001",
        },
        {
            id: 2,
            status: "pending", // Status default
            customerName: "Dika Putra Pratama",
            contact: "+62 813 987 654 32",
            productName: "Meja Lipat Minimalis",
            productImage: "/api/placeholder/120/120",
            totalPrice: 1500000,
            offerPrice: 1450000,
            invoice: "INV/20240112/00000002",
        },
    ]);

    // Fungsi untuk mengubah status penawaran
    const handleOfferAction = (id, action) => {
        setOffers((prevOffers) =>
            prevOffers.map((offer) =>
                offer.id === id
                    ? { ...offer, status: action } // Ubah status berdasarkan aksi
                    : offer
            )
        );
    };

    return (
        <div className="space-y-8 w-full">
            {/* Navigation Tabs */}
            <Tabs defaultValue="dashboard" className="w-full">
                <TabsList className="bg-red-500 w-full justify-between rounded-none h-auto p-0">
                    <TabsTrigger
                        value="dashboard"
                        className="text-white data-[state=active]:bg-red-600 rounded-none px-8 py-2"
                    >
                        Dashboard
                    </TabsTrigger>
                    <TabsTrigger
                        value="penawaran"
                        className="text-white data-[state=active]:bg-red-600 rounded-none px-8 py-2"
                    >
                        Penawaran
                    </TabsTrigger>
                    <TabsTrigger
                        value="pesanan"
                        className="text-white data-[state=active]:bg-red-600 rounded-none px-8 py-2"
                    >
                        Pesanan
                    </TabsTrigger>
                    <TabsTrigger
                        value="pembayaran"
                        className="text-white data-[state=active]:bg-red-600 rounded-none px-8 py-2"
                    >
                        Pembayaran
                    </TabsTrigger>
                </TabsList>

                {/* Tab Contents */}
                <TabsContent value="dashboard">
                    <div className="space-y-8">
                        {/* Banner */}
                        <Banner />

                        {/* Transaction Summary */}
                        <div className="space-y-6">
                            <h3 className="text-lg font-semibold">Rangkuman Transaksi Penjualan</h3>

                            <div className="grid grid-cols-3 gap-4">
                                {/* Penawaran Card */}
                                <Card>
                                    <CardContent className="p-6 text-center">
                                        <div className="text-4xl font-bold mb-2">1</div>
                                        <div className="text-sm text-gray-600 mb-4">Menunggu Konfirmasi</div>
                                        <button className="text-blue-500 text-sm">Lihat Semua</button>
                                    </CardContent>
                                </Card>

                                {/* Pesanan Card */}
                                <Card>
                                    <CardContent className="p-6 text-center">
                                        <div className="text-4xl font-bold mb-2">1</div>
                                        <div className="text-sm text-gray-600 mb-4">Dalam Pengiriman</div>
                                        <button className="text-blue-500 text-sm">Lihat Semua</button>
                                    </CardContent>
                                </Card>

                                {/* Pembayaran Card */}
                                <Card>
                                    <CardContent className="p-6 text-center">
                                        <div className="text-4xl font-bold mb-2">1</div>
                                        <div className="text-sm text-gray-600 mb-4">Menunggu Pembayaran Pembeli</div>
                                        <button className="text-blue-500 text-sm">Lihat Semua</button>
                                    </CardContent>
                                </Card>
                            </div>

                            {/* Sales Summary */}
                            <div className="grid grid-cols-2 gap-4 mt-6">
                                <Card>
                                    <CardContent className="p-6">
                                        <h4 className="text-gray-600 mb-2">Total Penjualan Selesai</h4>
                                        <div className="text-3xl font-bold">60</div>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardContent className="p-6">
                                        <h4 className="text-gray-600 mb-2">Total Nilai Penjualan Selesai</h4>
                                        <div className="text-3xl font-bold">IDR 108.120.000</div>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </TabsContent>

                <TabsContent value="penawaran">
                    <div className="space-y-4 p-4">
                        <h2 className="text-xl font-semibold">Penawaran</h2>

                        {offers.map((offer) => (
                            <Card key={offer.id}>
                                <CardContent className="p-6">
                                    {/* Header Section */}
                                    <div className="flex justify-between items-start mb-6">
                                        <div className="flex items-start gap-4">
                                            {/* Negotiation Badge */}
                                            <div className="flex gap-2 items-center">
                                                <div className="bg-red-500 w-4 h-4 rounded-sm" />
                                                <div>
                                                    <p className="font-medium">Negosiasi</p>
                                                    <p className="text-sm text-gray-500">
                                                        {offer.invoice}
                                                    </p>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Customer Info */}
                                        <div className="text-right">
                                            <p className="font-medium">{offer.customerName}</p>
                                            <p className="text-sm text-gray-500">{offer.contact}</p>
                                        </div>
                                    </div>

                                    {/* Product Details */}
                                    <div className="flex gap-4 mb-6">
                                        <img
                                            src={offer.productImage}
                                            alt={offer.productName}
                                            className="w-24 h-24 object-cover rounded-md"
                                        />
                                        <div>
                                            <h3 className="font-medium">{offer.productName}</h3>
                                            <p className="text-red-500 font-medium">
                                                IDR {offer.totalPrice.toLocaleString()}
                                            </p>
                                        </div>
                                    </div>

                                    {/* Negotiation Details */}
                                    <div className="space-y-4">
                                        <h4 className="font-medium">Rincian Negosiasi</h4>

                                        <div className="space-y-2">
                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">
                                                    Total Harga (1 Barang)
                                                </span>
                                                <span>IDR {offer.totalPrice.toLocaleString()}</span>
                                            </div>

                                            <div className="flex justify-between text-sm">
                                                <span className="text-gray-600">Penawaran</span>
                                                <span>IDR {offer.offerPrice.toLocaleString()}</span>
                                            </div>

                                            <Separator className="my-2" />

                                            <div className="flex justify-between font-medium">
                                                <span>Total Bayar</span>
                                                <span>IDR {offer.offerPrice.toLocaleString()}</span>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Action Buttons */}
                                    <div className="flex gap-4 mt-6 text-center w-full">
                                        {/* Kondisi Rendering Berdasarkan Status */}
                                        {offer.status !== "pending" ? (
                                            <div
                                                className={`flex items-center justify-center mt-4 font-medium text-lg h-20 ${offer.status === "rejected" ? "text-red-500" : "text-green-500"
                                                    }`}
                                            >
                                                {offer.status === "rejected" ? "Ditolak" : "Diterima"}
                                            </div>
                                        ) : (
                                            <div className="flex flex-row justify-center items-center gap-4 mt-6 mx-auto">
                                                <Button
                                                    variant="outline"
                                                    className="flex-1 bg-white hover:bg-gray-50"
                                                    disabled={offer.status !== "pending"} // Disable jika bukan pending
                                                    onClick={() => handleOfferAction(offer.id, "rejected")}
                                                >
                                                    Tolak Negosiasi
                                                </Button>
                                                <Button
                                                    className="flex-1 bg-red-500 hover:bg-red-600 text-white"
                                                    disabled={offer.status !== "pending"} // Disable jika bukan pending
                                                    onClick={() => handleOfferAction(offer.id, "confirmed")}
                                                >
                                                    Konfirmasi Negosiasi
                                                </Button>
                                            </div>
                                        )}
                                    </div>
                                </CardContent>
                            </Card>
                        ))}
                    </div>
                </TabsContent>

                <TabsContent value="pesanan">
                    <div className="p-4">
                        <TabSiap />
                    </div>
                </TabsContent>

                <TabsContent value="pembayaran">
                    <div className="p-4">
                        <TabPembayaran />
                    </div>
                </TabsContent>
            </Tabs>
        </div>
    );
};

export default TabsPenjual;
