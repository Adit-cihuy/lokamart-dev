import React from 'react'

export default function Services({icons,title,description}) {
    return (
        <div className="flex flex-col items-center p-4 text-center">
            {/* Icon Container */}
            <div className="bg-gray-200 p-4 rounded-full mb-4">
                {icons}
            </div>

            {/* Title */}
            <h3 className="text-lg font-bold text-gray-900 mb-2">
                {title}
            </h3>

            {/* Description */}
            <p className="text-sm text-gray-600">
                {description}
            </p>
        </div>
    );
}
