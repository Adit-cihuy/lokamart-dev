import React from "react";
import { FiPhone, FiMail } from "react-icons/fi";

function App() {
  return (
    <div className="bg-white">
      <header className="bg-red-500 py-4">
        <div className="container mx-auto flex items-center justify-center">
          <div className="flex items-center justify-between space-x-4 text-white">
            <button>Beranda</button>
            <button>Kontak</button>
          </div>
        </div>
      </header>


      <main className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div className="bg-gray-50 p-6 rounded-md shadow-md">
          <div className="flex items-center mb-4">
          <FiPhone className="text-red-600 text-2xl mr-3" />
            <h2 className="text-lg font-semibold mb-4">Panggilan</h2>
            </div>
            <p className="text-sm mb-2">
              Layanan kami selalu tersedia dalam 24 jam setiap harinya.
            </p>
            <p className="font-bold mb-4">Phone: +62 811 2211 3344</p>
            {/* Garis Pemisah */}
            <hr className="border-t border-gray-300 my-4" />

             <div className="flex items-center mb-4">
              <FiMail className="text-red-600 text-2xl mr-3" />
              <h2 className="text-lg font-semibold">Pesan</h2>
            </div>
            <p className="text-sm mb-2">
              Bisa hubungi kami melalui kontak di bawah ini:
            </p>
            <p className="mb-1">Email: customer@lokamart.com</p>
            <p>Email: support@lokamart.com</p>
          </div>

          {/* Form */}
          <div className="bg-gray-50 p-6 rounded-md shadow-md">
            <form className="grid grid-cols-1 gap-4">
              {/* Input Nama Lengkap, Alamat Email, Nomor Handphone Sejajar */}
              <div className="grid grid-cols-3 gap-4">
                <input
                  type="text"
                  placeholder="Nama Lengkap *"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none"
                />
                <input
                  type="email"
                  placeholder="Alamat Email *"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none"
                />
                <input
                  type="text"
                  placeholder="Nomor Handphone *"
                  className="p-3 border border-gray-300 rounded-md focus:outline-none"
                />
              </div>

              {/* Input Ketik Pesan */}
              <textarea
                placeholder="Ketik Pesan..."
                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none"
                rows="5"
              ></textarea>

              {/* Tombol Kirim Pesan */}
              <div className="flex justify-end">
                <button
                  type="submit"
                  className="bg-red-600 text-white py-3 px-6 rounded-md"
                >
                  Kirim Pesan
                </button>
              </div>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
