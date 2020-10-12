import { gql, makeVar } from "@apollo/client";

const CARTID = gql`
mutation {
    createEmptyCart
  }
`;
export const cartItemsVar = makeVar([]);

export const fields = {
  typePolicies: {
    Query: {
      fields: {
        cartItems: {
          read() {
            return cartItemsVar();
          },
        },
      },
    },
  },
};