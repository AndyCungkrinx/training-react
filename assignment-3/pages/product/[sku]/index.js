import React, {useState} from 'react';
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { withApollo} from "../../../lib/apollo";
import Loading from '../../../components/loading';
import { Breadcrumbs, Container, Paper, Grid, CardContent, TextField, Typography} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import Navigasi from '../../../components/navigation';
import Carousel from "react-multi-carousel";
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import PanelBottom from '../components/TabsPanel';
import ErrorAlert from '../../../components/error';
import AddCart from '../addcart';
import { cache } from '../../../lib/apollo/client';
import { cartItemsVar } from '../../../apollo/resolver';

const PRODUCT_LIST = gql`
query ( $sku:String!) {
  products(filter:{ sku:{eq:$sku}}) {
    items {
      id	
      name
      sku
      sale
      description{
        html
      }
      more_info{
        label
        value
      }
      media_gallery{
        label
        url
      }
      small_image{
        url
        label
      }
      price_range {
        maximum_price {
          final_price {
            value
            currency
          }
        }
      }
    }
  }
}
`;

export const GET_CART_ITEMS = gql`
  query GetCartItems {
    cartItems @client
  }
`;
const ReadState = () => {

  const { cart } = useQuery(GET_CART_ITEMS);
  console.log(cart)
  
  return (
    <p>read state</p>
  );
};

const cartItems = cartItemsVar();

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 1
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing(0),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
  media: {
    height: 365,
    width: '85%',
    margin: 'auto',
  },
  boximage: {
    height: 380,
    maxWidth: 320,
    margin: 'auto',
  },
}));

function ProductId(props) {
  const classes = useStyles();
  const router = useRouter();
  const sku = router.query.sku;
  const response = useQuery(PRODUCT_LIST, {
    variables: {
      sku: sku,
    },
  });
  const { loading, error, data } = response;
    //const products = data.products; 
  if (loading) {
    return <div><Loading /></div>;
  }  
  if (error) {
    return <div><ErrorAlert/> </div>;
  }
  const item = data.products.items;
  const galeri = data.products.items[0].media_gallery;
  //console.log(item); 
  //console.log(galeri);
  const handleChange = (event) => {
    setQty(document.getElementById("qty").value);
  };
  if (qty===0){
    const [qty, setQty] = useState([]);
  }
  else{
    cartItemsVar([...cartItems, ...item]);
  }
  
  return (
    <>
    <Navigasi />
    <Container style={{maxWidth:'lg',marginTop:'5.1em'}}>
      <div className={classes.root}>
        <Grid container spacing={1}>
          <Grid item xs={12}>
            <div className={classes.paper}>
                <div style={{paddingTop:20, paddingBottom:20}}>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="body2" className={classes.breadcumb}>
                      <HomeIcon className={classes.icon} />
                        Home
                      </Typography>
                    <Typography variant="body2" className={classes.breadcumb}>
                      <WhatshotIcon className={classes.icon} />
                        Detail Product
                    </Typography>
                    {item.map((br, idb) => {
                      return (
                      <Typography variant="body2" style={{color:'red'}} key={idb}>
                        <GrainIcon className={classes.icon} />
                          {br.name}
                      </Typography>
                    );
                    })}
                  </Breadcrumbs>
                </div>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div className={classes.paper}>
              <Carousel responsive={responsive}>
                {galeri.map((val, idz) => (
                <div key={idz} className={classes.boximage}>
                <img src={val.url} alt={val.label} className={classes.media}/>
                </div>
                ))}
              </Carousel>
            </div>
          </Grid>
          <Grid item xs={12} sm={6}>
            <div style={{paddingLeft:20}}>
              {item.map((it, idx) => {
                return (
                <div key={idx}>
                  <CardContent style={{textAlign: 'left',}}>
                    <Typography component="h5" variant="h4" align="left" gutterBottom style={{paddingBottom:20}}>
                      {it.name}
                    </Typography>
                    <Typography gutterBottom>
                      {it.price_range.maximum_price.final_price.value} {it.price_range.maximum_price.final_price.currency}
                    </Typography>
                    <Typography gutterBottom>
                      SKU#: {it.sku}
                    </Typography>
                    <div style={{paddingTop:15}}>
                    <TextField
                      id="qty"
                      name="qty"
                      label="Quantity"
                      type="number"
                      defaultValue={qty}
                      onChange={() => handleChange()}
                      InputLabelProps={{
                        shrink: true,
                      }}
                      variant="outlined"
                    />
                    </div>
                    <div style={{paddingTop:15,}}>
                      <AddCart 
                      name={it.name}
                      sku={it.sku}
                      currency={it.price_range.maximum_price.final_price.currency}
                      price={it.price_range.maximum_price.final_price.value}
                      image={it.small_image.url}
                      qty= {qty}
                      />
                    </div>
                  </CardContent>
                </div>
              );
            })}
            </div>
          </Grid>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
            {item.map((tab, idw) => (
            <div key={idw}>
              <PanelBottom sku = {sku}/>
            </div>
            ))}
            </Paper>
          </Grid>
        </Grid>
      </div>
    </Container>
    </>
  )
}

export default withApollo({ ssr: true })(ProductId);
