import Link from 'next/link';
import React from 'react';

//TODO: make this navbar section responsive

const Navbar = () => {
    return (
        <nav className='mt-5'>
            <div className='space-x-10 text-center'>
                <Link href="/">TrendThreads</Link>
                <Link href="/">Home</Link>
                <Link href="/flash-sales">Flash Sale</Link>
                <Link href="/category">Categories</Link>
                <Link href="/">Products</Link>
                <Link href="/">Admin</Link>
            </div>
        </nav>
    );
};

export default Navbar;