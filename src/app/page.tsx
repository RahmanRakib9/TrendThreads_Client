import FlashSale from '@/components/FlashSale/FlashSale';
import Banner from '@/components/shared/Banner';
import React from 'react';
import TopCategory from './TopCategory/page';

const Home = async () => {
  const res = await fetch("http://localhost:3004/api/v1/flash-sales", {
    next: {
      revalidate: 30
    }
  })
  const flashSales = await res.json();
  return (
    <div>
      <Banner />
      <FlashSale flashSales={flashSales} />
      <TopCategory/>
    </div>
  );
};

export default Home;