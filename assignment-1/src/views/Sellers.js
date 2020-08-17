import React from "react";
import { Link } from 'react-router-dom';
import { MDBJumbotron, MDBContainer, MDBRow, MDBCol, MDBCardTitle, MDBBreadcrumb, MDBBreadcrumbItem } from "mdbreact";
import BestSellers from '../contents/BestSellers';

const Sellers = () => {
  return (
    <>
    <div className='category-content'>
    {/* Banner*/}
    <MDBContainer className='mw-100 h-25 d-inline-block' style={{ margin: 0 }}>
      <MDBRow style={{ margin: 0 , padding: 0 }}>
        <MDBCol>
          <MDBJumbotron style={{ padding: 0 }}>
            <MDBCol className="text-white text-center py-1 px-1 my-1" style={{ backgroundImage: `url(https://mdbootstrap.com/img/Photos/Others/gradient1.jpg)` }}>
              <MDBCol className="py-5">
                <MDBCardTitle className="h1-responsive pt-3 m-5 font-bold">Best Sellers</MDBCardTitle>
              </MDBCol>
            </MDBCol>
          </MDBJumbotron>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
    {/* Breadcrumb*/}
    <MDBContainer className='mw-100' style={{ margin: 0, height:'10px' }}>
      <MDBBreadcrumb light color="peach-gradient lighten-2">
      <MDBBreadcrumbItem iconRegular icon="star"><Link to="/home">Home</Link></MDBBreadcrumbItem>
      <MDBBreadcrumbItem iconRegular icon="star"><Link to="/category">All Category</Link></MDBBreadcrumbItem>
      <MDBBreadcrumbItem iconRegular icon="star" active>BestSellers</MDBBreadcrumbItem>
      </MDBBreadcrumb>
    </MDBContainer>
    {/* Content*/}
    <MDBContainer className='mw-100 category-1'>
        <BestSellers />
    </MDBContainer>
    </div>
    </>
  )
}

export default Sellers;
