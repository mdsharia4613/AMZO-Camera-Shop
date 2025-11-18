"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";
import { FaRegStar, FaStar, FaStarHalf } from "react-icons/fa6";


const TopRating = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => {
                const filtered = data.filter(item => item.rating >= 4.5);
                const top = filtered.sort((a, b) => b.rating - a.rating);
                setProducts(top);
            });
    }, []);

    return (
        <div className='my-10'>
            <h2 className='text-3xl text-center font-semibold'>Popular product</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-5 container mx-auto p-20">
                {products.map(item => {
                    const stars = item.rating;
                    const fullStars = Math.floor(stars);
                    const halStar = stars % 1 >= 0.5;
                    return (
                        <div
                            key={item.id}
                            className=" shadow-lg rounded-lg p-3 hover:shadow-xl transition duration-300 relative"
                        >
                            {/* Product Image */}
                            <div className="w-full h-48 overflow-hidden rounded-lg">
                                <Image
                                    src={item.image}
                                    alt={item.title}
                                    width={400}
                                    height={300}
                                    className="object-cover w-full h-full transition-transform duration-500 hover:rotate-x-180"
                                />
                            </div>


                            {/* Title */}
                            <h2 className="text-lg font-semibold mt-3">{item.title}</h2>
                            <p>{item.id}</p>

                            {/* Rating */}
                            <div className="flex items-center gap-2">
                                <div className="flex">
                                    {Array.from({ length: 5 }, (_, i) => {
                                        if (i < fullStars) return <FaStar key={i} className="text-yellow-400" />;
                                        else if (i === fullStars && halStar) return <FaStarHalf key={i} className="text-yellow-400" />;
                                        else return <FaRegStar key={i} className="text-yellow-400" />;
                                    })}
                                </div>
                                <span>{item.rating}</span>
                            </div>
                            <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition cursor-pointer absolute right-1 bottom-20">
                                <HiOutlineShoppingBag size={22} />
                            </button>

                            {/* Price + Cart */}
                            <div className="flex justify-between items-center mt-3">
                                <p className="text-lg font-bold text-blue-600">{item.price} ৳</p>
                                
                            </div>
                        </div>
                    )
                })}
            </div>
        </div>
    );
};

export default TopRating;
