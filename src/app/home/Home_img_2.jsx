import Image from 'next/image';
import React from 'react';
import { GrGallery } from "react-icons/gr";
import { FiTarget } from "react-icons/fi";
import { GrStorage } from "react-icons/gr";
import Link from 'next/link';

const Home_img_2 = () => {
    return (
        <div className="w-full relative">

            {/* Background Image */}
            <Image
                src="/image/home_img_2.jpg"
                alt="home_camera"
                className="w-full h-auto object-cover"
                width={1920}
                height={1080}
                priority
            />

            {/* Content */}
            <div className="container mx-auto relative">

                <div
                    className="
                        absolute 
                        bottom-6 left-4 
                        sm:bottom-14 sm:left-8 
                        md:bottom-24 md:left-12
                        lg:bottom-32 lg:left-16 
                        space-y-4 
                        sm:space-y-6 
                        md:space-y-7 
                        lg:space-y-8
                    "
                >
                    {/* Title */}
                    <h2
                        className="
                            text-white 
                            text-2xl 
                            md:text-4xl 
                            lg:text-5xl 
                            font-extrabold 
                            leading-snug 
                            sm:leading-snug 
                            md:leading-tight
                        "
                    >
                        360° View, zero blind spots.
                    </h2>

                    {/* Row 1 */}
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                        <div className="
                            bg-white 
                            p-3 
                            sm:p-3.5 
                            md:p-4 
                            rounded-full 
                            hover:bg-[#0c8cd9] 
                            hover:text-white 
                            transition duration-300
                        ">
                            <GrGallery className="text-lg sm:text-xl md:text-2xl" />
                        </div>
                        <div className="text-white">
                            <h2 className="text-base sm:text-lg md:text-xl font-medium">3K 5mp camera view</h2>
                            <p className="text-xs sm:text-sm md:text-base">
                                Lorem Ipsum is simply dummy text of the printing industry.
                            </p>
                        </div>
                    </div>

                    {/* Row 2 */}
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                        <div className="
                            bg-white 
                            p-3 
                            sm:p-3.5 
                            md:p-4 
                            rounded-full 
                            hover:bg-[#0c8cd9] 
                            hover:text-white 
                            transition duration-300
                        ">
                            <FiTarget className="text-lg sm:text-xl md:text-2xl" />
                        </div>
                        <div className="text-white">
                            <h2 className="text-base sm:text-lg md:text-xl font-medium">Auto Tracking Motion</h2>
                            <p className="text-xs sm:text-sm md:text-base">
                                Lorem Ipsum is simply dummy text of the printing industry.
                            </p>
                        </div>
                    </div>

                    {/* Row 3 */}
                    <div className="flex items-start gap-3 sm:gap-4 md:gap-5">
                        <div className="
                            bg-white 
                            p-3 
                            sm:p-3.5 
                            md:p-4 
                            rounded-full 
                            hover:bg-[#0c8cd9] 
                            hover:text-white 
                            transition duration-300
                        ">
                            <GrStorage className="text-lg sm:text-xl md:text-2xl" />
                        </div>
                        <div className="text-white">
                            <h2 className="text-base sm:text-lg md:text-xl font-medium">Cloud & SD Storage</h2>
                            <p className="text-xs sm:text-sm md:text-base">
                                Lorem Ipsum is simply dummy text of the printing industry.
                            </p>
                        </div>
                    </div>

                    {/* Button */}
                    <button className="
                        bgcpr 
                        px-3 py-1.5 
                        sm:px-4 sm:py-2 
                        md:px-5 md:py-2 
                        rounded-lg 
                        text-xs sm:text-sm md:text-base
                    ">
                        <Link href="#">Read More</Link>
                    </button>

                </div>
            </div>
        </div>
    );
};

export default Home_img_2;
