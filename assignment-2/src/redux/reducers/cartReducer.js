const initalState = {
    Cart: [],
  };
  
  const cartReducer = (state = initalState, action) => {
    const { type, payload } = action;
    switch (type) {
      case 'REMOVE_CART':
        return state;
  
      case 'ADD_CART':
        let idAlreadyExists = false;
        let Cart = state.Cart.slice();
  
        state.Cart.forEach((item, key) => {
          if (item.product_id === payload.product_id) {
            idAlreadyExists = true;
          }
        });
  
        if (idAlreadyExists) {
          console.log('Cart is Available');
          let objIndex = state.Cart.findIndex(obj => obj.product_id === payload.product_id);
          state.Cart[objIndex].qty = payload.qty;
          console.log(state.Cart[objIndex].qty);
        } else {
          Cart.push(payload);
          console.log('No cart found');
        }
        return {
          ...state,
          Cart,
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;