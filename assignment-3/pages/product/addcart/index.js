import React, { useState } from "react";
import { withApollo } from "../../../lib/apollo";
import { Button } from '@material-ui/core';
import { cartItemsVar } from "../../../apollo/resolver";

const AddCart = ({cartName,cartSku,cartImage,cartCurrency,cartPrice,cartQty}) => {
  const cartItems = cartItemsVar();
  const [count, setCount] = useState(0);
  
  const item = [
    {
      id: count,
      sku: cartSku,
      name: cartName,
      image:cartImage,
      currency:cartCurrency,
      price:cartPrice,
      qty:cartQty,
    },
  ];
  //console.log(item);
  return (
    <div>
    <Button
      size="large" color="primary" variant="outlined"
      onClick={() => {
        // set array
        setCount(count + 1);
        cartItemsVar([...cartItems, ...item]);
        alert ("Success add to cart using Apollo Client");
      }}
    >
      Add To Cart
    </Button>
    </div>
  );
};


export default withApollo({ ssr: false })(AddCart);