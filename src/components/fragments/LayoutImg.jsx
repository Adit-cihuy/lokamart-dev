import React from 'react'

export default function LayoutImg({ image, title, description, large = false }) {
    return (
        <div
            className={`relative group overflow-hidden rounded-lg ${large ? 'lg:col-span-2 lg:row-span-2' : ''
                }`}
        >
            {/* Background Image */}
            <div className="aspect-square w-full h-full">
                <img
                    src={image}
                    alt={title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
            </div>

            {/* Overlay Content */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent p-6 flex flex-col justify-end">
                <h3 className="text-white text-xl font-semibold mb-2">{title}</h3>
                <p className="text-white/80 text-sm mb-4">{description}</p>
                <button className="bg-white/20 hover:bg-white/30 text-white px-4 py-2 rounded-md backdrop-blur-sm transition-colors w-fit">
                    Shop Now
                </button>
            </div>
        </div>
    );
};