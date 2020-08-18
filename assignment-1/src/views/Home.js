import React from "react";

// Import Hompage contents
import Banner from "../contents/Banner";
import ProductHomepage from '../contents/ProductHomepage';

function Home() {   
    return (
    <>
      <div className='content'>
        <Banner />
      <div className="mt-2 col-md-12 space"/>
        <hr/>
        <ProductHomepage />
        <hr/>
      </div>
    </>
  );
}
export default Home;

