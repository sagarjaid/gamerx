import Card from '@/components/Card';
import Footer from '@/components/Footer';
import Nav from '@/components/Nav';
import React from "react";

const Home = () => {
  return (
    <div>
      <main className="max-w-7xl flex m-auto flex-col px-6 pb-4 gap-4">
        <Nav />
        <div className="flex flex-col gap-2 py-6">
          <div className="text-3xl">Blog</div>
          <div className="text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit
          </div>
        </div>
        <Card />
        <Card />
        <Footer />
      </main>
    </div>
  );
};

export default Home;
