import ProductsCard from '@/components/ui/ProductsCard';
import React from 'react';

const Products = async () => {
    const res = await fetch("https://trend-threads.vercel.app/api/v1/products", {
        next: {
            revalidate: 30
        }
    })
    const products = await res.json()
    return (
        <div className='my-10 flex flex-col justify-center items-center min-h-screen'>
            <h1 className='text-4xl text-center'><b>Our Products</b></h1>
            <h3 className='text-2xl w-2/4 mx-auto text-center'><i>If you are on our site, you have a particular idea of what you are looking for</i></h3>

            <div className='grid grid-cols-4 gap-4 my-10'>
                {
                    products.payload.map((product: any) => <ProductsCard product={product} key={product._id} />)
                }
            </div>
        </div>
    );
};

export default Products;