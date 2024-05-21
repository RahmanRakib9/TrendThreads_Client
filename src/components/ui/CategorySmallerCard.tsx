import React from 'react';

const CategorySmallerCard = ({ category }: any) => {
    return (
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
                <div className="card-body">
                    <h2 className="card-title">{category.title}</h2>
                    <p>Category: {category.category}</p>
                    <div className="card-actions justify-end">
                        <button className="btn btn-active btn-neutral">Buy Now</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategorySmallerCard;