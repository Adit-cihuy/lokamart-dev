import React from "react";
import { Input } from "@/components/ui/input";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";

export default function DetailPembayaran() {
    return (
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 p-6">
            {/* Form Section */}
            <div className="space-y-4">
                <h2 className="text-xl font-semibold mb-6">Detail Pembayaran</h2>

                <div className="space-y-4">
                    <div>
                        <Label>Nama Lengkap</Label>
                        <Input placeholder="Nama lengkap" />
                    </div>

                    <div>
                        <Label>Alamat</Label>
                        <Input placeholder="Alamat" />
                    </div>

                    <div>
                        <Label>Nomor Telp/HP (opsional)</Label>
                        <Input placeholder="Nomor telepon" />
                    </div>

                    <div>
                        <Label>Email</Label>
                        <Input type="email" placeholder="Email" />
                    </div>

                    <div className="flex items-start gap-2">
                        <Checkbox id="saveInfo" />
                        <Label htmlFor="saveInfo" className="text-sm">
                            Simpan informasi ini untuk pembayaran selanjutnya
                        </Label>
                    </div>
                </div>
            </div>

            {/* Order Summary Section */}
            <div className="space-y-6">
                <div className="bg-gray-50 p-4 rounded-lg">
                    <div className="flex gap-4 items-start mb-4">
                        <img
                            src="/api/placeholder/80/80"
                            alt="Piring Flatima"
                            className="w-20 h-20 rounded-md object-cover"
                        />
                        <div>
                            <h3 className="font-medium">Piring Flatima Saewoodem</h3>
                            <p className="text-gray-600">IDR 80.000</p>
                        </div>
                    </div>

                    <div className="space-y-2 border-t pt-4">
                        <div className="flex justify-between">
                            <span>Subtotal:</span>
                            <span>IDR 80.000</span>
                        </div>
                        <div className="flex justify-between">
                            <span>Ongkir:</span>
                            <span className="text-green-600">Gratis</span>
                        </div>
                        <div className="flex justify-between font-medium">
                            <span>Total:</span>
                            <span>IDR 80.000</span>
                        </div>
                    </div>
                </div>

                {/* Payment Method */}
                <div className="space-y-4">
                    <h3 className="font-medium">Metode Pembayaran</h3>
                    <RadioGroup defaultValue="cod">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="bank" id="bank" />
                            <Label htmlFor="bank" className="flex items-center gap-2">
                                <img
                                    src="/path-to-logo-bni.png"
                                    alt="BNI Logo"
                                    className="w-6 h-6"
                                />
                                <img
                                    src="/path-to-logo-bca.png"
                                    alt="BCA Logo"
                                    className="w-6 h-6"
                                />
                                <img
                                    src="/path-to-logo-bsi.png"
                                    alt="BSI Logo"
                                    className="w-6 h-6"
                                />
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="cod" id="cod" />
                            <Label htmlFor="cod">Bayar di Tempat</Label>
                        </div>
                    </RadioGroup>
                </div>

                {/* Shipping Method */}
                <div className="space-y-4">
                    <h3 className="font-medium">Metode Pengiriman</h3>
                    <RadioGroup defaultValue="jnt">
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="jnt" id="jnt" />
                            <Label htmlFor="jnt" className="flex items-center gap-2">
                                <img
                                    src="/path-to-logo-jnt.png"
                                    alt="J&T Logo"
                                    className="w-6 h-6"
                                />
                            </Label>
                        </div>
                        <div className="flex items-center space-x-2">
                            <RadioGroupItem value="ambil" id="ambil" />
                            <Label htmlFor="ambil">Ambil di Toko</Label>
                        </div>
                    </RadioGroup>
                </div>

                <Input placeholder="Kode kupon" />
                <Button
                    variant="outline"
                    className="w-full border border-red-500 text-red-500 hover:bg-red-100"
                >
                    Aktivasi Kupon
                </Button>

                <Button className="w-full bg-red-500 hover:bg-red-600">Pesan Sekarang</Button>
            </div>
        </div>
    );
};
