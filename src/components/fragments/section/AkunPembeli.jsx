import React from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

export default function AkunPembeli() {
    return (
        <div className="container mx-auto p-6">
        <Card className="p-6 max-w-2xl mx-auto">
          <h3 className="text-xl font-medium text-red-600 mb-6">Edit Your Profile</h3>
          <form>
            {/* Nama Depan dan Belakang */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Depan</label>
                <input
                  type="text"
                  placeholder="Nama Depan"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Nama Belakang</label>
                <input
                  type="text"
                  placeholder="Nama Belakang"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
                />
              </div>
            </div>
  
            {/* Email dan Alamat*/}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
              <div>  
              <label className="block text-sm font-medium text-gray-700 mb-2">Email</label>
              <input
                type="email"
                placeholder="Email"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
              />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">Alamat</label>
              <input
                type="text"
                placeholder="Alamat"
                className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
                 />
                </div>
            </div>
            {/* Ganti Kata Sandi */}
            <div className="grid grid-cols-1 gap-4 mb-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kata Sandi Lama</label>
                <input
                  type="password"
                  placeholder="Kata Sandi Lama"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Kata Sandi Baru</label>
                <input
                  type="password"
                  placeholder="Kata Sandi Baru"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Konfirmasi Kata Sandi Baru</label>
                <input
                  type="password"
                  placeholder="Konfirmasi Kata Sandi Baru"
                  className="w-full border rounded-md px-3 py-2 focus:outline-none focus:ring focus:ring-red-400"
                />
              </div>
            </div>
  
            {/* Tombol */}
            <div className="flex justify-end gap-4">
              <Button variant="outline" className="text-red-500 border-red-500">
                Batal
              </Button>
              <Button className="bg-red-500 hover:bg-red-600">
                Simpan Perubahan
              </Button>
            </div>
          </form>
        </Card>
      </div>
    );


}