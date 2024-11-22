import React, { useEffect, useState } from 'react';
import banner4 from "@/assets/banner4.svg";
import banner5 from "@/assets/banner5.svg";
import banner6 from "@/assets/banner6.svg";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
} from "@/components/ui/carousel";

export default function Banner() {
    const [api, setApi] = useState();
    const [current, setCurrent] = useState(0);

    // Setup autoplay and slide tracking
    useEffect(() => {
        if (!api) return;

        // Listen to slide changes
        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });

        const interval = setInterval(() => {
            api.scrollNext();
        }, 5000);

        return () => {
            clearInterval(interval);
            api.off("select"); // Cleanup event listener
        };
    }, [api]);

    // Images array
    const banners = [banner4, banner5, banner6];

    return (
        <div className="relative w-full">
            <Carousel
                setApi={setApi}
                className="w-full"
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {banners.map((banner, index) => (
                        <CarouselItem key={index} className="relative">
                            <img
                                src={banner}
                                alt={`Banner ${index + 1}`}
                                className="w-full h-auto"
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>

            {/* Dots container - positioned below the carousel */}
            <div className="flex justify-center gap-2 mt-4">
                {banners.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`
                            w-3 h-3 rounded-full transition-all duration-300
                            ${current === index
                                ? 'bg-stone-800 w-6'
                                : 'bg-gray-300 hover:bg-gray-400'
                            }
                        `}
                        aria-label={`Go to slide ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}