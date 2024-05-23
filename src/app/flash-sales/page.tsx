import FlashCard from '@/components/ui/FlashCard';
import React from 'react';

const FlashSale = async () => {
    const res = await fetch("http://localhost:3004/api/v1/flash-sales")
    const flashSales = await res.json()

    return (
        <div className='my-10'>
            <div className='flex justify-between'>
                <h1 className='text-4xl'><b>Flash Sales</b></h1>
                <button className="btn btn-neutral">View More</button>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    flashSales.payload.map((flashSale: any) => <FlashCard flashSale={flashSale} key={flashSale._id} />)
                }
            </div>
        </div>
    );
};

export default FlashSale;