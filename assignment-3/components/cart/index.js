import { gql, useQuery } from "@apollo/client";
import { withApollo } from "../../lib/apollo";
import { makeStyles } from '@material-ui/core/styles';
import Alert from '@material-ui/lab/Alert';
import ErrorAlert from '../error';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;

const useStyles = makeStyles((theme) => ({
  root: {
    width: '60%',
    '& > * + *': {
      marginTop: theme.spacing(2),
    },
    margin:'auto',
  },
  table: {
    minWidth: 300,
    width:'100%',
  },
  media: {
    height: 90,
    width: '50%',
    maxWidth: 120,
    margin: 'auto',
  },
}));

const Cart = () => {
  const classes = useStyles();
  const response = useQuery(GET_CART_ITEMS);
  //console.log(response)
  const { loading, error, data } = response;
  //console.log(data);
  if (loading) {
    return null;
  }  if (error) {
    return <div><ErrorAlert/> </div>;
  }  
  const cart = data.cartItems;
  //console.log(cart);
  
  if (cart.length === 0){
    return <div className={classes.root}>
      <Alert variant="filled" severity="error">
        Your Cart Is Empty!
      </Alert>
    </div>;
  }
  else{
    return (
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell colSpan={8} style={{backgroundColor:'red', color:'white'}}>Cart</TableCell>
          </TableRow>
          <TableRow>
            <TableCell>Image</TableCell>
            <TableCell align="right">SKU</TableCell>
            <TableCell align="right">Name</TableCell>
            <TableCell align="right">QTY</TableCell>
            <TableCell align="right">Price</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {cart.map((val,idx) => (
            <TableRow key={idx}>
              <TableCell component="th" scope="row">
              <img src={val.image} alt={val.name} className={classes.media}/>
              </TableCell>
              <TableCell align="right">{val.sku}</TableCell>
              <TableCell align="right">{val.name}</TableCell>
              <TableCell align="right">{val.qty}</TableCell>
              <TableCell align="right">{val.currency}{val.price}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
      );
    };
  }

export default withApollo({ ssr: true })(Cart);