import Image from "next/image";
import React from "react";

const HeroSection = () => {
    return (
        <div className="relative w-full h-[600px] md:h-[700px] lg:h-[800px] mt-24">
            {/* Background Image */}
            <Image
                src="/image/banner.jpg"
                alt="banner-title"
                fill
                className="object-cover w-full h-full"
            />

            {/* Overlay Content */}
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-gradient-to-b from-black/10 via-black/10 to-black/10 space-y-6 text-center px-4 pt-60">
                <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white drop-shadow-lg">
                    Eyes on your safety
                </h2>

                <button className="bgcpr text-white font-semibold px-6 py-3 rounded-lg shadow-lg hover:bg-[#ff4c1b] transition-all duration-300 cursor-pointer">
                    Shop Now
                </button>
            </div>
        </div>
    );
};

export default HeroSection;
