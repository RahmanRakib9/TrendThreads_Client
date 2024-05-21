import FlashSale from '@/components/FlashSale/FlashSale';
import React from 'react';

const Home = async () => {
  const res = await fetch("http://localhost:3004/api/v1/flash-sales")
  const flashSales = await res.json();
  return (
    <div>
      <FlashSale flashSales={flashSales} />
    </div>
  );
};

export default Home;