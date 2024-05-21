import ProductsCard from '@/components/ui/ProductsCard';
import React from 'react';

const Products = async () => {
    const res = await fetch("http://localhost:3004/api/v1/products", {
        next: {
            revalidate: 30
        }
    })
    const products = await res.json()
    console.log(products);
    return (
        <div className='flex flex-col justify-center items-center min-h-screen my-10'>
            <div className='text-center'>
                <h1 className='text-4xl'><b>Our Products</b></h1>
                <h3 className='text-2xl w-2/4 mx-auto'><i>If you are on our site, you have a particular idea of what you are looking for</i></h3>
            </div>
            <div className='grid grid-cols-4 gap-4 my-10'>
                {
                    products.payload.map((product) => <ProductsCard product={product} key={product._id} />)
                }
            </div>
        </div>
    );
};

export default Products;