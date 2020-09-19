import React, { useState } from "react";
import { withApollo } from "../../../../lib/apollo";
import { Button } from '@material-ui/core';
import { cartItemsVar } from "../../../../apollo/resolver";

const AddCart = ({name,sku,image,currency,price,qty}) => {
  const cartItems = cartItemsVar();
  const [count, setCount] = useState(0);
  
  const item = [
    {
      id: count,
      sku: sku,
      name: name,
      image:image,
      currency:currency,
      price:price,
      qty:qty,
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


export default withApollo({ ssr: true })(AddCart);