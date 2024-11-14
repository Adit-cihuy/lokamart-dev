import React from 'react'

export default function Category({icons,title}) {
    return (
        <div className="flex flex-col items-center justify-center p-6 bg-white rounded-lg shadow-sm border hover:shadow-md transition-shadow cursor-pointer w-40">
            {/* Icon */}
            <div className="text-gray-600 mb-2">
                {icons}
            </div>

            {/* Category Name */}
            <span className="text-gray-700 text-sm font-medium">
                {title}
            </span>
        </div>
    );
}
