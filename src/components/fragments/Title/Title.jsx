import React from 'react'

export default function Title() {
    return (
        <div className="max-w-4xl mx-auto p-4">
            {/* Header with red label */}
            <div className="flex flex-col gap-2">
                <div className="flex items-center">
                    <div className="bg-red-500 text-white px-3 py-1 rounded-md">
                        Categories
                    </div>
                </div>

                {/* Main title */}
                <h2 className="text-3xl font-bold text-gray-800">
                    Browse By Category
                </h2>
            </div>
        </div>
    );
}
