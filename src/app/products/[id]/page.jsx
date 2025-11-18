"use client"
import Image from 'next/image';
import { useParams } from 'next/navigation';
import React, { useEffect, useState } from 'react';

const ProductCard = () => {
    const { id } = useParams();
    const [product, setProduct] = useState(null);

    useEffect(() => {
        fetch("/products.json")
            .then(res => res.json())
            .then(data => {
                const findItem = data.find(item => item.id == id); // fix here
                setProduct(findItem);
            });
    }, [id]);

    if (!product) return <p>Loading.......</p>;

    return (
        <div className='mt-30'>
            <h2 className="text-3xl font-bold">{product.title}</h2>

            <Image
                width={400}
                height={300}
                src={product.image}
                alt={product.title}
            />

            <p className="mt-3 text-xl">Price: {product.price} ৳</p>
            <p className="mt-3">Rating: {product.rating}</p>
        </div>
    );
};

export default ProductCard;
