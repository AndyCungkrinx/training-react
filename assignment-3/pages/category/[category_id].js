import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Link, Breadcrumbs, Paper, Container, Card, Grid, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography} from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import Navigasi from '../../components/navigation';
import { useRouter } from "next/router";
import { useQuery, gql } from "@apollo/client";
import { withApollo} from "../../lib/apollo";
import Loading from '../../components/loading';
import ErrorAlert from '../../components/error';
//import Link from 'next/link';

const CATEGORY_ID = gql`
query Category($ids: String!) {
  categoryList(filters: { ids: { eq: $ids } }) {
    id
    name
    url_key
    url_path
    display_mode
    product_count
    image_path
    description
    products (pageSize: 50) {
      total_count
      items {
        id
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  gridlist: {
    padding: theme.spacing(2),
    textAlign: 'center',
    width:'100%',
    color: theme.palette.text.secondary,
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    maxWidth: 280,
    marginLeft:10,
    height: 390,
  },
  imagebanner: {
    resizeMode: 'stretch', 
    width: '100%', 
    height:400,
  },
  media: {
    height: 205,
    width: '60%',
    marginLeft: 50,
  },
  button: {
    marginLeft: 62,
  },
  breadcumb: {
    color: 'red'
  },
  icon: {
    marginRight: theme.spacing(0.5),
    width: 20,
    height: 20,
  },
}));

function CategoryId(props) {
  const router = useRouter();
  const classes = useStyles();
  const category_id = router.query.category_id;
  //Category By Id
  const response1 = useQuery(CATEGORY_ID, {
    variables: {
      ids: category_id,
    },
  });
  const { loading, error, data } = response1;
  if (loading) {
    return <div><Loading /></div>;
  }  if (error) {
    return <div><ErrorAlert /> </div>;
  } 
  const category = data.categoryList;
  const product = data.categoryList[0].products.items;
  //console.log(category);
  //console.log(product);
  
  return (
    <>
    <Navigasi />
    <Container style={{maxWidth:'lg',marginTop:'5.1em'}}>
      {category.map((val, idx) => {
        return (
          <div key={idx}>
            <Grid container spacing={3}>
              <Grid item xs={12}>
                <Paper className={classes.gridlist}>
                  <CardMedia>
                  <img src={val.image_path} className={classes.imagebanner}/>
                  </CardMedia>
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {val.name}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {val.description}
                    </Typography>
                  </CardContent>
                  <Breadcrumbs aria-label="breadcrumb">
                    <Typography variant="body2" className={classes.breadcumb}>
                      <HomeIcon className={classes.icon} />
                      Home
                    </Typography>
                    <Typography variant="body2" className={classes.breadcumb}>
                      <WhatshotIcon className={classes.icon} />
                      Category
                    </Typography>
                    <Typography variant="body2" color="textSecondary">
                      <GrainIcon className={classes.icon} />
                      {val.name}
                    </Typography>
                  </Breadcrumbs>
                </Paper>
              </Grid>
            </Grid>
            <div style={{height:50}}></div>
          </div>
        );
      })}
      <div className={classes.root} align="center">
      <Grid container spacing={1}>
      {product.map((prod, idz) => (
        <Grid item xs={12} sm={3} key={idz}>
        <Link href={`/product/${category_id}?sku=${prod.sku}`}>
        <Card className={classes.paper}>
          <CardActionArea >
            <CardMedia
              className={classes.media}
              image={prod.small_image.url}
              title={prod.name}
            />
            <CardContent>
              <Typography gutterBottom align="center">
                {prod.name}
              </Typography>
              <Typography gutterBottom align="center" color="primary">
              {prod.price_range.maximum_price.final_price.value} {prod.price_range.maximum_price.final_price.currency}
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary" variant="outlined" align="center" className={classes.button}>
                View Detail
            </Button>
          </CardActions>
        </Card>
        </Link>
        <div style={{height:20}}></div>
        </Grid>
      ))}
      </Grid>
      </div>
    </Container>
    </>
  )
}



export default withApollo({ ssr: true })(CategoryId);
