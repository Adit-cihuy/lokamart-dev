import React from 'react';
import { Card, CardHeader, CardContent } from "@/components/ui/card";
import { Copy } from "lucide-react";

export default function RekeningBank() {
    const accountNumber = "7234567890987654321";

    const copyToClipboard = () => {
        navigator.clipboard.writeText(accountNumber);
        // Optional: Add toast notification for feedback
    };

    return (
        <Card className="max-w-md">
            <CardHeader>
                <h3 className="text-lg font-medium">Rekening Bank</h3>
            </CardHeader>
            <CardContent className="space-y-4">
                <div className="space-y-2">
                    <p className="font-medium">Bank BNI</p>
                    <div className="text-gray-500 text-sm">No. Rekening (LOKAMART)</div>
                    <div className="flex items-center justify-between bg-gray-50 p-3 rounded-md">
                        <span className="font-mono text-lg">{accountNumber}</span>
                        <button
                            onClick={copyToClipboard}
                            className="text-gray-500 hover:text-gray-700 p-1 rounded-md hover:bg-gray-200 transition-colors"
                            title="Copy to clipboard"
                        >
                            <Copy size={18} />
                        </button>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}