import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {Link, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import { useQuery, gql } from '@apollo/client';
import {withApollo} from '../../../lib/apollo';
import Carousel from 'react-multi-carousel';
import ErrorAlert from '../../../components/error';


const TOP_LIST = gql`
query CategoryTree{
    categoryList(filters: {name: {match: "Women Sale"}}) {
      id
      level
      name
        products (pageSize: 50) {
        total_count
        items {
          name
          sku
          sale
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
  }
`;

const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 3000 },
    items: 5
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1
  }
};

const useStyles = makeStyles({
  root: {
    maxWidth: 345,
    margin: 'auto',
    marginTop:20,
    height: 350,
    marginLeft: 18,
    marginRight: 10,
  },
  media: {
    height: 250,
    width: '60%',
    margin: 'auto',
  },
});

const SectionTwo = (props) => {
  const classes = useStyles();
  const response = useQuery(TOP_LIST,[]);
    const { loading, error, data } = response;
    if (loading) {
      return null;
    }  if (error) {
      return <div><ErrorAlert/> </div>;
    } 
    //console.log(data);
    const category = data.categoryList;
    const product = data.categoryList[0].products.items;
    //console.log(category);
    //console.log(product);
  return(
    <>
    {category.map((val, idx) => {
      return (
        <div key={idx}>
          <Typography component="h2" variant="h4" align="center" color="textPrimary" gutterBottom>
            <Link href={`/category/${val.id}`} style={{color:'black'}}>
              {val.name}
            </Link>
          </Typography>
          <div style={{height:50}}></div>
        </div>
      );
    })}
    <Carousel responsive={responsive}>
      {product.map((prod, idz) => (
      <div key={idz}>
      <Card className={classes.root}>
      <CardActionArea>
        <CardMedia
          className={classes.media}
          image={prod.small_image.url}
          title={prod.name}
        />
        <CardContent>
          <Typography gutterBottom align="center">
            {prod.name}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions align="center">
        <Button size="small" color="primary">
          <div align="center">
            {prod.price_range.maximum_price.final_price.value} {prod.price_range.maximum_price.final_price.currency}
          </div>
        </Button>
      </CardActions>
    </Card>
    <div style={{height:20}}></div>
    </div>
    ))}
    </Carousel>
    </>
  )
};
  
export default withApollo({ ssr: true })(SectionTwo);