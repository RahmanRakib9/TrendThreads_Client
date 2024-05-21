import { FlashSale } from '@/types';
import React from 'react';
import FlashCard from '../ui/FlashCard';

const FlashSale = ({ flashSales }: { flashSales: FlashSale[] }) => {

    return (
        <div className='my-10'>
            <div className='flex justify-between'>
                <h1 className='text-4xl'>Flash Sales</h1>
                <button className="btn btn-neutral">View More</button>
            </div>
            <div className='grid grid-cols-3 gap-4'>
                {
                    flashSales.payload.map((flashSale) => <FlashCard flashSale={flashSale} key={flashSale._id} />)
                }
            </div>
        </div>
    );
};

export default FlashSale;