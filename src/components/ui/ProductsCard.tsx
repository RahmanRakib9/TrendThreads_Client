import React from 'react';
import Image from 'next/image';

const ProductsCard = ({ product }: any) => {
    console.log("products", product);
    return (
        <div className="card w-[80%] bg-base-100 shadow-xl">
            <figure><Image src={product.img} height={500} width={500} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{product.title}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-neutral">Buy Now</button>
                </div>
            </div>
        </div>
    );
};

export default ProductsCard;