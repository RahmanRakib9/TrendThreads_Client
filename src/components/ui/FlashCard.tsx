import React from 'react';
import Image from 'next/image'
import flashSale from "../../assets/images.png"
// import  flashSal1 from "../../assets/images.jpg"


const FlashCard = () => {
    return (
        <div className="card w-96 bg-base-100 shadow-xl">
  <figure><Image src={flashSale} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">Product One!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
    );
};

export default FlashCard;