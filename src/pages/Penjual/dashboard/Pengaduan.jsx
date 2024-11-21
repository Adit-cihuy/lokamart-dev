import React from 'react'

export default function Pengaduan() {
    return (
        <div className="flex flex-col items-center justify-center min-h-[400px] relative">
            {/* Background Illustration */}
            <div className="absolute inset-0 flex items-center justify-center opacity-10">
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="200"
                    height="200"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="text-gray-400"
                >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12" y2="16" />
                </svg>
            </div>

            {/* Text Content */}
            <div className="z-10">
                <h2 className="text-xl text-gray-400 font-medium">
                    TIDAK ADA INFORMASI PENGADUAN
                </h2>
            </div>
        </div>
    );
}
