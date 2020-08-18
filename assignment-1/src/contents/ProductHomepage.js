import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import { HomepageProducts } from '../data/DataProducts';

import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardFooter,
  MDBTooltip,
  MDBBtn,
  MDBBadge
} from 'mdbreact';

function ProductHompage(){
return (
  <div>
    {
      HomepageProducts.map((HomepageProduct) => {
        return (
          <section className='text-center my-5' key={HomepageProduct.categoryId}>
            <h2 className='h1-responsive font-weight-bold text-center my-5'>{HomepageProduct.name}</h2>
              <p className='grey-text text-center w-responsive mx-auto mb-5'>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum quisquam eum porro a pariatur veniam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Fugit, error amet numquam iure provident voluptate esse quasi, veritatis
                totam voluptas nostrum quisquam eum porro a pariatur veniam.
              </p>  
              <MDBRow>
              {
                HomepageProduct.products.map((product) =>(
                  <MDBCol lg='3' md='6' className='mb-lg-0 mb-4' key={ product.id }>
                    <MDBCard cascade narrow ecommerce>
                      <MDBCardImage
                        cascade
                        object="true"
                        src={product.img}
                        top
                        alt='sample photo'
                        overlay='white-slight'
                      />
                      <MDBBadge className='float-left' color='warning'>{product.category}</MDBBadge>
                      <MDBCardBody cascade className='text-center'>
                        <MDBCardTitle>
                          <span>
                          <h6>{product.title}</h6>
                          </span>
                        </MDBCardTitle>
                        <MDBCardFooter className='px-1'>
                          <span className='float-left font-weight-bold'>
                            <del className='coret'>{product.price}</del><br/>
                            <strong>{product.discount}</strong>
                          </span>
                          <span className='float-right'>
                            <MDBTooltip domElement placement='top'>
                              <i className='red-text fa fa-heart' />
                              <span>Add to Whishlist</span>
                            </MDBTooltip>
                          </span>
                        </MDBCardFooter>
                      </MDBCardBody>
                    </MDBCard>
                    <br></br>
                  </MDBCol>
                  ))
                }
                </MDBRow>
                <Fragment>
                <Link to={`/${HomepageProduct.role}/${HomepageProduct.categoryId}`}>
                  <MDBBtn outline color="info">
                    View More
                  </MDBBtn>
                </Link>
                </Fragment>
                <hr/>
          </section>
        );
      })
    }
  </div>
  )
};
export default ProductHompage;