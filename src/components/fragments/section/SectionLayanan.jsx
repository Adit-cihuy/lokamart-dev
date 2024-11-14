import React from 'react';
import Services from '@/components/layout/main/card/Services';
import { Truck, Shield, RefreshCw } from 'lucide-react';

export default function SectionLayanan() {
    // Data dummy untuk layanan
    const layanan = [
        {
            icon: <Truck className="size-16" />,
            title: 'Pengiriman Cepat',
            description: 'Kami menyediakan layanan pengiriman cepat dan aman ke seluruh penjuru negeri.',
        },
        {
            icon: <Shield className="size-16" />,
            title: 'Keamanan Terjamin',
            description: 'Jaminan keamanan untuk semua transaksi dan privasi pelanggan.',
        },
        {
            icon: <RefreshCw className="size-16" />,
            title: 'Garansi Pengembalian',
            description: 'Nikmati layanan pengembalian produk dalam 30 hari tanpa syarat.',
        },
    ];

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 container mx-auto p-6">
            {/* Looping data layanan */}
            {layanan.map((service, index) => (
                <Services
                    key={index}
                    icons={service.icon}
                    title={service.title}
                    description={service.description}
                />
            ))}
        </div>
    );
}
