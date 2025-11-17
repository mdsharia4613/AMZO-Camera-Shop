"use client";
import Image from "next/image";
import Link from "next/link";
import { FiShoppingBag, FiUser, FiSearch } from "react-icons/fi";
import { useState } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { usePathname } from "next/navigation";

const MainNavber = () => {
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const pathname = usePathname();

    // Active class
    const isActive = (path) =>
        pathname === path ? "text-[#0c8cd9] font-bold" : "hover:text-blue-400";

    const navmenu = (
        <>
            <li className={isActive("/")}>
                <Link href="/">Home</Link>
            </li>

            {/* SHOP Mega Dropdown */}
            <li
                className="relative"
                onMouseEnter={() => setDropdownOpen(true)}
                onMouseLeave={() => setDropdownOpen(false)}
            >
                <Link
                    href="/shop"
                    className={`flex items-center ${isActive("/shop")} text-gray-600`}
                >
                    <p>Shop</p>
                    <RiArrowDropDownLine />
                </Link>

                {/* Mega Menu */}
                <div
                    className={`absolute -left-[550px] top-10 mt-4 w-[1400px] bg-white text-gray-600 shadow-xl rounded-xl p-8 grid grid-cols-3 z-50 transition-all duration-300 ${dropdownOpen ? "opacity-100 visible" : "opacity-0 invisible"
                        }`}
                >
                    {/* Column 1 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-black">Solar camera</h3>
                        <ul className="space-y-2 text-[15px]">
                            <li className={isActive("/boxCamera")}>
                                <Link href="/boxCamera">Box camera</Link>
                            </li>

                            <li className={isActive("/solarCamera")}>
                                <Link href="/solarCamera">Solar camera</Link>
                            </li>

                            <li className={isActive("/demoCamera")}>
                                <Link href="/demoCamera">Dome camera</Link>
                            </li>

                            <li className={isActive("/floodlightCamera")}>
                                <Link href="/floodlightCamera">Floodlight camera</Link>
                            </li>

                            <li className={isActive("/bulletCamera")}>
                                <Link href="/bulletCamera">Bullet camera</Link>
                            </li>
                        </ul>
                    </div>

                     {/* Column 2 */}
                    <div>
                        <h3 className="text-lg font-semibold mb-3 text-black">Thermal camera</h3>
                        <ul className="space-y-2 text-[15px]">
                            <li>
                                <Link
                                    href="/solarCamera"
                                    className= {` ${isActive("/solarCamera")} text-gray-600`}
                                >
                                    Solar camera
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/nightCamera"
                                    className={` ${isActive("/nightCamera")} text-gray-600`}
                                >
                                    Night vision camera
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/demoCamera"
                                    className={` ${isActive("/demoCamera")} text-gray-600`}
                                >
                                    Dome camera
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/outdoorCamera"
                                    className={` ${isActive("/outdoorCamera")} text-gray-600`}
                                >
                                    Outdoor camera
                                </Link>
                            </li>

                            <li>
                                <Link
                                    href="/wirelessCamera"
                                    className={` ${isActive("/wirlessCamera")} text-gray-600`}
                                >
                                    Wi-Fi camera
                                </Link>
                            </li>
                        </ul>
                    </div>


                    {/* Images */}
                    <div className="flex gap-6 ">
                        <div className="relative w-[2600px] h-[200px] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.03] transition duration-500">
                            <Image src="/image/shop1.jpg" alt="promo1" fill />
                        </div>

                        <div className="relative w-[2600px] h-[200px] rounded-2xl overflow-hidden shadow-xl hover:scale-[1.03] transition duration-500">
                            <Image src="/image/shop2.jpg" alt="promo2" fill className="object-cover" />
                        </div>
                    </div>
                </div>
            </li>

            <li className={`${isActive("/collection")} text-gray-600`}>
                <Link href="/collection">Collection</Link>
            </li>

            <li className={`${isActive("/blog")} text-gray-600`}>
                <Link href="/blog">Blog</Link>
            </li>

            {/* Page Dropdown */}
            <li className="relative group">
                <div className="flex items-center gap-1 cursor-pointer">
                    <Link
                        href="/page"
                        className={`font-semibold text-gray-600 ${isActive("/page")}`}
                    >
                        Page
                    </Link>
                    <RiArrowDropDownLine className="text-xl text-gray-700 group-hover:text-gray-900 transition-colors" />
                </div>

                <ul className="absolute left-0 top-full mt-2 w-56 bg-white rounded-lg shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 z-50">
                    <li className={isActive("/about")}>
                        <Link href="/about" className="block px-4 py-2 hover:bg-gray-100">
                            About
                        </Link>
                    </li>

                    <li className={isActive("/contact")}>
                        <Link href="/contact" className="block px-4 py-2 hover:bg-gray-100">
                            Contact Us
                        </Link>
                    </li>

                    <li className={isActive("/faq")}>
                        <Link href="/faq" className="block px-4 py-2 hover:bg-gray-100">
                            Faqs
                        </Link>
                    </li>

                    <li className={isActive("/returnPolicy")}>
                        <Link href="/returnPolicy" className="block px-4 py-2 hover:bg-gray-100">
                            Return Policy
                        </Link>
                    </li>

                    <li className={isActive("/privacyPolicy")}>
                        <Link href="/privacyPolicy" className="block px-4 py-2 hover:bg-gray-100">
                            Privacy Policy
                        </Link>
                    </li>

                    <li className={isActive("/paymentPolicy")}>
                        <Link href="/paymentPolicy" className="block px-4 py-2 hover:bg-gray-100">
                            Payment Policy
                        </Link>
                    </li>

                    <li className={isActive("/terms")}>
                        <Link href="/terms" className="block px-4 py-2 hover:bg-gray-100">
                            Terms & Conditions
                        </Link>
                    </li>
                </ul>
            </li>
        </>
    );

    return (
        <div className="w-full bg-base-100 shadow-sm fixed top-10 z-50">
            <div className="navbar px-5 lg:px-10 container mx-auto">
                {/* Left */}
                <div className="navbar-start">
                    <Link href="/">
                        <Image src="/image/logo.png" width={140} height={80} alt="logo" />
                    </Link>
                </div>

                {/* Center */}
                <div className="navbar-center hidden lg:flex">
                    <ul className=" flex items-center gap-10 px-1 font-semibold text-[15px] ">
                        {navmenu}
                    </ul>
                </div>

                {/* Right */}
                <div className="navbar-end gap-4">
                    <div className="hidden md:flex items-center  rounded-full px-3 py-1 bg-gray-100 ">
                        <FiSearch className="text-xl opacity-60 text-[#0c8cd9]" />
                        <input type="text" placeholder="Search..." className="px-2 text-sm outline-none border-none" />
                    </div>

                    <FiUser className="text-[#0c8cd9] cursor-pointer"/>
                    <FiShoppingBag className="text-2xl cursor-pointer text-[#0c8cd9]" />
                </div>
            </div>
        </div>
    );
};

export default MainNavber;
