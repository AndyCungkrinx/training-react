import React from "react";
import { useSelector } from 'react-redux';



const CartComponents = () => {
  const data = useSelector(state => state.cart) || [];
  console.log(data);
  
    return (
      <div className="detail-content">
                      <table className="table table-borderless" width='100%'>
                      <thead>
                        <tr>
                          <th scope="col">Id</th>
                          <th scope="col">Product Name</th>
                          <th scope="col">Price</th>
                          <th scope="col">Qty</th>
                        </tr>
                      </thead>
                      <tbody>
                      {data.Cart.map((cart) => {
                        return (
                        <tr key={cart.product_id}>
                          <th scope="row">{cart.product_id}</th>
                          <td>{cart.title}</td>
                          <td>{cart.price}</td>
                          <td>{cart.qty}</td>
                        </tr>
                        );
                      })}
                      </tbody>
                    </table>
                  
      </div>
    );
}

export default CartComponents;
