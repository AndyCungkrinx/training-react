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
        <NewArrivals />
        <hr/>
        <BestSellers />
      </div>
    </>
  );
}

export default Home;
