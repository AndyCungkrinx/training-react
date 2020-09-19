import React from 'react';
import { useQuery, gql } from "@apollo/client";
import { withApollo} from "../../../lib/apollo";
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Box from '@material-ui/core/Box';
import RatingReview from './RatingReview';
import ErrorAlert from '../../../components/error';

const PRODUCT_LIST = gql`
query ($ids: String!, $sku:String!) {
  products(filter:{category_id:{eq: $ids}, sku:{eq:$sku}}) {
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
      review{
        rating_summary
      }
    }
  }
}
`;

const useStyles = makeStyles((theme) => ({
  tabs: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <div>{children}</div>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

function PanelBottom({item_id, sku}) {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const response = useQuery(PRODUCT_LIST, {
    variables: {
      ids: item_id,
      sku: sku,
    },
  });
  const { loading, error, data } = response;
  if (loading) {
    return null;
  }  
  if (error) {
    return <div><ErrorAlert/> </div>;
  }
  const item = data.products.items;
  const more = data.products.items[0].more_info;
  //console.log(more);
  function createMarkup() {
    return {__html: 'First &middot; Second'};
  }

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.tabs}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <Tab label="Description" {...a11yProps(0)} />
          <Tab label="More Info" {...a11yProps(1)} />
          <Tab label="Review" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        {item.map((valo, idx) => {
          function createMore() {
            return {__html: `${valo.description.html}`};
          }
          return (
            <div key={idx}>
              <div dangerouslySetInnerHTML={createMore()}/>
            </div>
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={1}>
        {more.map((val, idx) => {
          return (
            <div key={idx}>
            {val.label} : {val.value}
            </div>
          );
        })}
      </TabPanel>
      <TabPanel value={value} index={2}>
        {item.map((valr, idx) => {
          return (
            <div key={idx}>
            <RatingReview review={valr.review.rating_summary}/>
            </div>
          );
        })}
      </TabPanel>
    </div>
  );
}

export default withApollo({ ssr: true })(PanelBottom);