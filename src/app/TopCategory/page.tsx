import CategoryBiggerCard from '@/components/ui/CategoryBiggerCard';
import CategorySmallerCard from '@/components/ui/CategorySmallerCard';
import React from 'react';

const TopCategory = async () => {
    const res = await fetch("http://localhost:3004/api/v1/categories")
    const categories = await res.json()
    return (
        <div className='my-10 flex flex-col justify-center items-center min-h-screen'>
            <h1 className='text-4xl text-center'>Our Category</h1>
            <h3 className='text-2xl text-center'><i>What do you want to wear?</i></h3>
            <div className='grid grid-cols-2 my-10 gap-4'>
                {
                    categories.payload.slice(0, 2).map((category) => <CategoryBiggerCard category={category} key={category._id} />)
                }
            </div>
            <div className='grid grid-cols-3 my-10 gap-4'>
                {
                    categories.payload.slice(2, 5).map((category) => <CategorySmallerCard category={category} key={category._id} />)
                }
            </div>
        </div>
    );
};

export default TopCategory;