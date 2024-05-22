import FlashSale from '@/components/FlashSale/FlashSale';
import Banner from '@/components/shared/Banner';
import React from 'react';
import TopCategory from './category/page';
import Products from './products/page';

const Home = async () => {
  const res = await fetch("https://trend-threads.vercel.app/api/v1/flash-sales", {
    next: {
      revalidate: 30
    }
  })
  const flashSales = await res.json();
  return (
    <div>
      <Banner />
      <FlashSale flashSales={flashSales} />
      <TopCategory />
      <Products />
    </div>
  );
};

export default Home;