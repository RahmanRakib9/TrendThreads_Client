import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const CategoryBiggerCard = ({ category }: any) => {
    console.log(category);
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
            <figure><Image src={category.img} height={500} width={500} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{category.title}</h2>
                <p>Category: {category.category}</p>
                <div className="card-actions justify-end">
                    <button className="btn btn-active btn-neutral"><Link href={`/category/${category._id}`}>View More</Link></button>
                </div>
            </div>
        </div>
    );
};

export default CategoryBiggerCard;