import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";

export default function InfoSaldo() {
    return (
        <Card className="max-w-sm w-full mx-auto shadow-lg border border-gray-200 rounded-lg overflow-hidden bg-white">
            <CardHeader className="bg-gray-50 px-6 py-4">
                <h3 className="text-xl font-semibold text-gray-800">Informasi Saldo</h3>
            </CardHeader>
            <CardContent className="p-6">
                <div className="space-y-1">
                    <p className="text-sm text-gray-500">Saldo Tersedia</p>
                    <p className="text-2xl font-bold text-gray-800 tracking-wide">IDR 108.120.000</p>
                </div>
            </CardContent>
        </Card>
    );
}
