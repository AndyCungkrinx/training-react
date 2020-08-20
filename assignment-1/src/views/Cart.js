import React from "react";
import { useLocation} from "react-router-dom";
import { CategoryProducts, NewArrivalsProducts, BestSellersProducts } from '../data/DataProducts';
import { MDBJumbotron, MDBContainer } from "mdbreact";

export default function Cart() {
    let query = new URLSearchParams(useLocation().search);
    let isQueryExist = query && query.get("productId");
    return (
      <div>
        {!isQueryExist && (
          <Null />
        )}
        {isQueryExist && (
          <CartList />
        )}
      </div>
    );
  }

function CartList() {
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
    {
      endpoint.map((endpoint,index) => {
        return (
            <div key={index}>
              {
                endpoint.products.filter(product => product.id.includes(idproduct)).map(filterProduct =>(
                  <table className="table table-borderless" width='100%' key={idproduct}>
                    <thead>
                      <tr>
                        <th scope="col">Id Order</th>
                        <th scope="col">Product Name</th>
                        <th scope="col">Qty</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr>
                        <th scope="row">SPA-001</th>
                        <td>{filterProduct.title}</td>
                        <td>1</td>
                      </tr>
                    </tbody>
                  </table>
                ))
              }
            </div>
        );
      })
    }
    </div>
    </>
    );
}

function Null() {   
    return (
    <>
      <div className='detail-content'>
      <div className="mt-2 col-md-12 space"/>
        <MDBJumbotron fluid>
            <MDBContainer>
                <h2 className="display-4">Cart Empty!</h2>
                <p className="lead">Your cart is empty! Please add your product to cart.</p>
            </MDBContainer>
        </MDBJumbotron>
      </div>
    </>
  );
}
