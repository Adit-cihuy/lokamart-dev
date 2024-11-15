import React from 'react';
import {
    Collapsible,
    CollapsibleContent,
    CollapsibleTrigger,
} from "@/components/ui/collapsible";
import { Button } from "@/components/ui/button";
import {
    ChevronDown,
    Store,
    Phone,
    Mail,
    Wallet,
    CreditCard,
    Package,
    PlusCircle,
    ListOrdered,
    Info
} from "lucide-react";
import { Separator } from "@/components/ui/separator";
import { useNavigate } from 'react-router-dom';


const Sidebar = () => {
    const navigate=useNavigate()
    return (
        <div className="w-64 min-w-[300px] bg-white p-4 flex flex-col gap-4">
            {/* Shop Logo and Info */}
            <div className="flex flex-col items-center text-center mb-4">
                <div className="w-20 h-20 bg-gray-200 rounded-full mb-3" />
                <h2 className="font-bold text-xl">LOKAMART</h2>
            </div>

            <Separator className="my-4" />

            {/* Contact Information */}
            <div className="space-y-2">
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Mail size={16} />
                    <span>lokamart@gmail.com</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Phone size={16} />
                    <span>+628881111122</span>
                </div>
                <div className="flex items-center gap-2 text-sm text-gray-600">
                    <Store size={16} />
                    <span>LOKAMART</span>
                </div>
            </div>

            <Separator className="my-4" />
            <div className='space-y-2'>
                {/* Main Menu Items */}
                <Collapsible>
                <CollapsibleTrigger onClick={()=>navigate("/InformasiSaldo")} className="flex items-center justify-between w-full p-2 hover:bg-gray-100 rounded-md">
                    <div className="flex items-center gap-2">
                        <Wallet size={16} />
                        <span>Saldo Penjualan</span>
                    </div>
                </CollapsibleTrigger>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-100 rounded-md">
                    <div className="flex items-center gap-2">
                        <CreditCard size={16} />
                        <span>Rekening Bank</span>
                    </div>
                </CollapsibleTrigger>
            </Collapsible>
            {/* Products Collapsible */}
            <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-100 rounded-md">
                    <div className="flex items-center gap-2">
                        <Package size={16} />
                        <span>Produk</span>
                    </div>
                    <ChevronDown size={16} />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-8 space-y-2 mt-2">
                    <Button onClick={()=>navigate("/TambahProduk")} variant="ghost" className="w-full justify-start gap-2">
                        <PlusCircle size={16} />
                        Tambah Produk
                    </Button>
                    <Button onClick={()=>navigate("/DaftarProduk")} variant="ghost" className="w-full justify-start gap-2">
                        <ListOrdered size={16} />
                        Daftar Produk
                    </Button>
                </CollapsibleContent>
            </Collapsible>

            {/* Info LOKAMART Collapsible */}
            <Collapsible>
                <CollapsibleTrigger className="flex items-center justify-between w-full p-2 hover:bg-gray-100 rounded-md">
                    <div className="flex items-center gap-2">
                        <Info size={16} />
                        <span>Info LOKAMART</span>
                    </div>
                    <ChevronDown size={16} />
                </CollapsibleTrigger>
                <CollapsibleContent className="ml-8 space-y-2 mt-2">
                    <Button variant="ghost" className="w-full justify-start">
                        Tentang Kami
                    </Button>
                    <Button variant="ghost" className="w-full justify-start">
                        Informasi Pengajuan
                    </Button>
                </CollapsibleContent>
            </Collapsible>
            </div>            
        </div>
    );
};

export default Sidebar;