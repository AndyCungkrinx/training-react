import React from "react";
import { Link} from "react-router-dom";
import { CategoryProducts, NewArrivalsProducts, BestSellersProducts } from '../data/DataProducts';

import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBCardTitle,
  MDBCardFooter,
  MDBTooltip,
  MDBBadge
} from 'mdbreact';

function ProductCategory({categoryId}){
  let endpoint= CategoryProducts ;
  if (categoryId) {
    if (categoryId === "1") {
      endpoint = NewArrivalsProducts;
    } else {
      endpoint =BestSellersProducts;
    }
  }else {
    endpoint = CategoryProducts;
  }
return (
  <div>
    {
      endpoint.map((endpoint, index) => {
        return (
            <div key={index}>
              <MDBRow>
              {
                endpoint.products.map((product) =>(
                  <MDBCol lg='3' md='6' className='mb-lg-0 mb-4' key={ product.id }>
                    <MDBCard cascade narrow ecommerce>
                    <Link to={`/detailproduct/${endpoint.name}?idcategory=${product.idcategory}&productId=${product.id}`}>
                      <MDBCardImage
                        cascade
                        object="true"
                        src={product.img}
                        top
                        alt='sample photo'
                        overlay='white-slight'
                      />
                      </Link>
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
                          <Link to={`/detailproduct/${endpoint.name}?idcategory=${product.idcategory}&productId=${product.id}`}>
                            <MDBTooltip domElement placement='top'>
                              <i className='grey-text fa fa-eye mr-3' />
                              <span>Detail</span>
                            </MDBTooltip>
                          </Link>
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
            </div>
        );
      })
    }
  </div>
  )
};
export default ProductCategory;