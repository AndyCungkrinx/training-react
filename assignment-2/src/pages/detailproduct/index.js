import React, {Fragment} from "react";
import { useLocation, Link } from "react-router-dom";
import {  MDBRow, MDBCol, MDBIcon, MDBBtn } from "mdbreact";
import { CategoryProducts, NewArrivalsProducts, BestSellersProducts } from '../../data';


export default function DetailProduct() {
    let query = new URLSearchParams(useLocation().search);
    let idproduct = query && query.get("productId");
    let idcategory = query && query.get("idcategory");
    let endpoint= CategoryProducts ;
    if (idcategory) {
        if (idcategory === "newarrivals") {
            endpoint = NewArrivalsProducts;
        } else {
            endpoint = BestSellersProducts;
        }
    }else {
        endpoint = CategoryProducts;
    }
    return (
    <>
    <div className='detail-content'>
    <div className="mt-2 col-md-12 space"/>
    {
      endpoint.map((endpoint,index) => {
        return (
            <div key={index}>
              {
                endpoint.products.filter(product => product.id.includes(idproduct)).map(filterProduct =>(
                    <section className="my-5" key={idproduct}>
                    <h3 className="h2-responsive font-weight-bold text-center my-5 blue-text">
                      {filterProduct.title}
                    </h3>
                    <MDBRow>
                      <MDBCol lg="5" className="mb-lg-0 mb-5">
                        <img
                          src={filterProduct.img}
                          alt={filterProduct.img}
                          className="img-fluid rounded z-depth-1"
                        />
                      </MDBCol>
                      <MDBCol lg="7">
                        <MDBRow className="mb-3">
                          <MDBCol md="1" size="2">
                            <MDBIcon icon="dollar-sign" size="2x" className="pink-text" />
                          </MDBCol>
                          <MDBCol md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Price</h5>
                            <p className="grey-text">
                              {filterProduct.discount}<br/>
                            </p>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                          <MDBCol md="1" size="2">
                            <MDBIcon far icon="clipboard" size="2x" className="blue-text" />
                          </MDBCol>
                          <MDBCol md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Category</h5>
                            <p className="grey-text">
                              {filterProduct.category}
                            </p>
                          </MDBCol>
                        </MDBRow>
                        <MDBRow className="mb-3">
                          <MDBCol md="1" size="2">
                            <MDBIcon far icon="chart-bar" size="2x" className="indigo-text" />
                          </MDBCol>
                          <MDBCol md="11" size="10">
                            <h5 className="font-weight-bold mb-3">Description</h5>
                            <p className="grey-text">
                            {filterProduct.description}
                            </p>
                          </MDBCol>
                        </MDBRow>
                        <Fragment>
                        <Link to={`/cart?idcategory=${filterProduct.idcategory}&productId=${filterProduct.id}`}>
                        <MDBBtn outline color="warning">
                            Add To Cart
                        </MDBBtn>
                        </Link>
                        </Fragment>
                      </MDBCol>
                    </MDBRow>
                </section>
                ))
              }
            </div>
        );
      })
    }
    </div>
    </>
    )
}
