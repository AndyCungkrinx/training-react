import React from "react";
import bestsellers from '../data/ProductBestSellers';
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardFooter,
  MDBTooltip,
} from 'mdbreact';

const BestSellers = () => {
return (
    <>
    <MDBRow>
    {
      bestsellers.map((bestseller, index) =>(
      <MDBCol lg='3' md='6' className='mb-lg-0 mb-4' key={ index }>
        <MDBCard cascade narrow ecommerce>
          <MDBCardImage
            cascade
            src={bestseller.img}
            top
            alt='sample photo'
            overlay='white-slight'
          />
          <MDBCardBody cascade className='text-center'>
            <MDBCardTitle>
              <strong>
                <a href='#!'>{bestseller.title}</a>
              </strong>
            </MDBCardTitle>
            <MDBCardFooter className='px-1'>
              <span className='float-left font-weight-bold'>
                <strong>{bestseller.price}</strong>
              </span>
              <span className='float-right'>
                <MDBTooltip domElement placement='top'>
                  <i className='grey-text fa fa-eye mr-3' />
                  <span>View More</span>
                </MDBTooltip>
                <MDBTooltip domElement placement='top'>
                  <i className='grey-text fa fa-heart' />
                  <span>Add to Whishlist</span>
                </MDBTooltip>
              </span>
            </MDBCardFooter>
          </MDBCardBody>
        </MDBCard>
      </MDBCol>
      ))
    }
    </MDBRow>
    </>
  )
};
export default BestSellers;