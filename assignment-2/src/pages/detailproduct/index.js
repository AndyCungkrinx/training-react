import React, {Fragment} from "react";
import { useLocation, Link } from "react-router-dom";
import {  MDBRow, MDBCol, MDBIcon } from "mdbreact";
import { useDispatch } from 'react-redux';
import { CategoryProducts } from '../../data';
import {Cart} from '../../redux/action/cart';

export default function DetailProduct() {
    const dispatch = useDispatch();
    let query = new URLSearchParams(useLocation().search);
    let idproduct = query && query.get("productId");
    let endpoint= CategoryProducts ;
    const handleAdd = () => {
      dispatch(Cart({
          product_id: idproduct,
          title: document.getElementById("productTitle").innerText,
          price : document.getElementById("productPrice").innerText,
          qty : 1
      }))
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
                    <h3 className="h2-responsive font-weight-bold text-center my-5 blue-text" id="productTitle">
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
                            <p className="grey-text" id="productPrice">
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
                        <Link to="/cart">
                          <button className="btn peach-gradient" onClick={handleAdd}>Add To Cart</button>
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
