import Link from 'next/link';
import React from 'react';

const AdminDashboard = () => {
    return (
        <div className='my-10'>
            <h1 className='text-2xl text-pretty text-center'><b>Welcome to Admin Dashboard!</b></h1>
            <div className='flex flex-col space-y-8'>
                <Link href="/flash-sales">Flash Sales</Link>
                <Link href="/category">Categories</Link>
                <Link href="/products">Products</Link>
            </div>
        </div>
    );
};

export default AdminDashboard;