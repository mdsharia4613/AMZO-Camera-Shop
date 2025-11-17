import Image from 'next/image';
import Link from 'next/link';
import React from 'react';

const Footer = () => {
    return (
        <>
            <div className=' bg-base-200'>
                <footer className="footer sm:footer-horizontal text-base-content p-10 container mx-auto">
                    <nav>
                        <Link href="/" className='flex justify-center items-center'>
                            <Image className='' src="/image/logo.png" alt='logo' width={200} height={100}></Image>
                        </Link>
                        <p>Guarding moments before they become threats.</p>
                    </nav>
                    <nav>
                        <h6 className="text-[16px] font-medium">Complany</h6>
                        <Link className='text-gray-600 text-xs' href="/about">About Us</Link>
                        <Link className='text-gray-600 text-xs' href="/contact">Contact Us</Link>
                        <Link className='text-gray-600 text-xs' href="/returnPolicy">Return policy</Link>
                        <Link className='text-gray-600 text-xs' href="privacyPolicy">Privacy policy</Link>
                        <Link className='text-gray-600 text-xs' href="/paymentPolicy">Payment policy</Link>
                    </nav>
                    <nav>
                        <h6 className="text-[16px] font-medium">Top category</h6>
                        <Link className='text-gray-600 text-xs' href="#">Box camera</Link>
                        <Link className='text-gray-600 text-xs' href="#">Infrared CCTV</Link>
                        <Link className='text-gray-600 text-xs' href="#">PTZ camera</Link>
                        <Link className='text-gray-600 text-xs' href="#">Solar camera</Link>
                        <Link className='text-gray-600 text-xs' href="#">Wirless CCTV</Link>
                    </nav>
                    <nav>
                        <h6 className="text-[16px] font-medium">Address</h6>
                        <p className='text-gray-600 text-xs'>70,Washington square south, <br />unitrd states</p>
                        <p className='text-gray-600 text-xs'>15, 2th floor, new york ny 10012</p>

                    </nav>
                    <form>
                        <h6 className="text-[16px] font-medium">Contact</h6>
                        <p className='text-gray-600 text-xs'>++61 0123 456 789</p>
                        <p className='text-gray-600 text-xs'>demo@gmail.com</p>
                        <div></div>

                    </form>
                </footer>
            </div>
        </>
    );
};

export default Footer;