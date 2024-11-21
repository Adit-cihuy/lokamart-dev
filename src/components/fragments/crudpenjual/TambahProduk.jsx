import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Label } from "@/components/ui/label";
import { ImagePlus } from "lucide-react";

const TambahProduk = () => {
    const [images, setImages] = useState(Array(6).fill(null));

    const handleImageUpload = (index, event) => {
        const file = event.target.files[0];
        if (file) {
            const newImages = [...images];
            newImages[index] = URL.createObjectURL(file);
            setImages(newImages);
        }
    };

    return (
        <div className="max-w-2xl mx-auto p-6">
            <h2 className="text-xl font-semibold mb-6">Tambah Produk</h2>

            {/* Upload Instructions */}
            <div className="mb-6">
                <h3 className="font-medium mb-1">Upload Produk</h3>
                <p className="text-sm text-gray-500 mb-4">
                    Foto min 300x300 piksel dengan latar belakang putih, format .jpg
                </p>

                {/* Image Upload Grid */}
                <div className="grid grid-cols-3 gap-4 mb-6">
                    {images.map((image, index) => (
                        <div
                            key={index}
                            className="border-2 border-dashed border-gray-300 rounded-lg p-4 aspect-square flex items-center justify-center relative"
                        >
                            {image ? (
                                <img
                                    src={image}
                                    alt={`Product ${index + 1}`}
                                    className="w-full h-full object-cover"
                                />
                            ) : (
                                <div className="text-center">
                                    <label className="cursor-pointer">
                                        <ImagePlus className="w-6 h-6 mx-auto mb-2 text-gray-400" />
                                        <span className="text-sm text-gray-500">Foto Utama</span>
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="hidden"
                                            onChange={(e) => handleImageUpload(index, e)}
                                        />
                                    </label>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </div>

            {/* Product Information */}
            <div className="space-y-6">
                <div>
                    <Label>Nama Produk</Label>
                    <Input placeholder="Contoh: Sepatu Pria LOKAMART Black & White" />
                </div>

                <div>
                    <Label>Keterangan</Label>
                    <Textarea
                        placeholder="Keterangan..."
                        className="min-h-[120px]"
                    />
                </div>

                <div>
                    <Label>Status</Label>
                    <RadioGroup defaultValue="nego" className="flex gap-6 mt-2">
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="nego" id="nego" />
                            <Label htmlFor="nego">NEGO</Label>
                        </div>
                        <div className="flex items-center gap-2">
                            <RadioGroupItem value="diskon" id="diskon" />
                            <Label htmlFor="diskon">DISKON</Label>
                        </div>
                    </RadioGroup>
                </div>

                <div>
                    <Label>
                        Aktif
                        <input type="checkbox" className="ml-2" />
                    </Label>
                </div>

                <div>
                    <Label>Harga</Label>
                    <Input placeholder="Harga Barang" type="number" />
                </div>

                <Button className="w-full bg-red-500 hover:bg-red-600 text-white">
                    Konfirmasi
                </Button>
            </div>
        </div>
    );
};

export default TambahProduk;