import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const FlashCard = ({ flashSale }: any) => {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure><Image src={flashSale.img} alt="Shoes" width={300} height={300} /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {flashSale.title}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline"><Link href={`/flash-sales/${flashSale._id}`}>More About</Link></div>
        </div>
      </div>
    </div>
  );
};

export default FlashCard;