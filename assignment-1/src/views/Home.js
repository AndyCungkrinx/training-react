import React from "react";
import Banner from "../contents/Banner";
import NewArrivals from "../contents/NewArrivals";
import BestSellers from "../contents/BestSellers";

function Home() {    
    return (
    <>
      <div className='content'>
        <Banner />
        <div className="mt-2 col-md-12 space"/>
        <hr/>
        <section className='text-center my-5'>
          <h2 className='h1-responsive font-weight-bold text-center my-5'>New Arrival</h2>
            <p className='grey-text text-center w-responsive mx-auto mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
            <NewArrivals />
        </section>
        <hr/>
        <section className='text-center my-5'>
          <h2 className='h1-responsive font-weight-bold text-center my-5'>Best Sellers</h2>
            <p className='grey-text text-center w-responsive mx-auto mb-5'>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
              totam voluptas nostrum quisquam eum porro a pariatur veniam.
            </p>
            <BestSellers />
        </section>  
      </div>
    </>
  );
}

export default Home;
