import TypographyH3 from "@/components/fragments/TypographyH3";
import { Input } from "@/components/ui/input";
import {
  Facebook,
  Instagram,
  Linkedin,
  SendHorizonal,
  Twitter,
} from "lucide-react";

import GooglePlay from "@/assets/googlePlay.svg";
import AppStore from "@/assets/appStore.svg";
import QrCode from "@/assets/qrCode.svg";

export default function Footer() {
  return (
    <footer className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4 lg:gap-16 p-8 lg:px-24 bg-red-600 text-white">
      <div className="space-y-4">
        <TypographyH3 title={"LOKAMART"} />
        <div className="space-y-2">
          <p>Dapatkan 10% untuk Transaksi Pertama</p>
          <div className="relative">
            <Input
              type="email"
              placeholder="Masukkan Email"
              className="placeholder:text-white"
            />
            <SendHorizonal className="absolute right-2 top-1/2 -translate-y-1/2" />
          </div>
        </div>
      </div>
      <div className="space-y-4">
        <h6 className="font-medium text-xl">Dukungan</h6>
        <div className="space-y-2">
          <p>Jendral Sudirman, Thehok, Jambi 36138, Indonesia</p>
          <p>lokamart@gmail.com</p>
        </div>
      </div>
      <div className="space-y-4">
        <h6 className="font-medium text-xl">Akun</h6>
        <p>Akun Saya </p>
      </div>
      <div className="space-y-4">
        <h6 className="font-medium text-xl">Dukungan</h6>
        <div className="space-y-2">
          <p>Term Of Use</p>
          <p>FAQ</p>
          <p>Kontak</p>
        </div>
      </div>
      <div className="space-y-4">
        <h6 className="font-medium text-xl">Download</h6>
        <div className="space-y-2">
          <p className="text-gray-300">Hemat IDR 50.000 untuk Pengguna Baru</p>
          <div className="flex items-center justify-start gap-2">
            <div>
              <img src={QrCode} alt="QrCode" />
            </div>
            <div className="flex flex-col gap-1 justify-center items-center">
              <img src={GooglePlay} alt="GooglePlay" />
              <img src={AppStore} alt="AppStore" />
            </div>
          </div>
        </div>
        <div className="flex gap-4 items-center justify-start">
          <Facebook />
          <Twitter />
          <Instagram />
          <Linkedin />
        </div>
      </div>
    </footer>
  );
}
