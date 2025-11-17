"use client";
import Image from 'next/image';
import React, { useEffect, useState } from 'react';
import { HiOutlineShoppingBag } from "react-icons/hi";

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
                {products.map(item => (
                    <div
                        key={item.id}
                        className=" shadow-lg rounded-lg p-3 hover:shadow-xl transition duration-300"
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
                        <p className="mt-1 text-blue-500 font-medium">
                            ⭐ {item.rating}
                        </p>

                        {/* Price + Cart */}
                        <div className="flex justify-between items-center mt-3">
                            <p className="text-lg font-bold text-blue-600">{item.price} ৳</p>
                            <button className="bg-blue-600 text-white p-2 rounded-lg hover:bg-blue-700 transition cursor-pointer">
                                <HiOutlineShoppingBag size={22} />
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopRating;
