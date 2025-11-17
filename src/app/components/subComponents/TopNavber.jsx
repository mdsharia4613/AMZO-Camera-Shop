import Link from 'next/link';
import React from 'react';

const TopNavber = () => {

    const navmenu = (
        <>
            <li><Link href="/contact">Contact us</Link></li>
            <li><Link href="/login">Login & Register</Link></li>
            <li><Link href="/wishlist">Wishlist</Link></li>
        </>
    )
    return (
        <>
            <div className=''>
                <div className='fixed top-0 left-0 w-full z-50 bgcpr '>
                    <div className='container mx-auto px-2'>
                        <div className='flex justify-between items-center text-sm font-medium px-10 py-3'>
                            <div>
                                <p className=''>Sale alert: smart cameras from <span className='font-semibold underline'>$99.00</span></p>
                            </div>
                            <div className=''>
                                <ul className='flex items-center gap-5'>
                                    {navmenu}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default TopNavber;