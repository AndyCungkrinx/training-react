import React from 'react';
import clsx from 'clsx';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Typography, Divider, IconButton, ListItem, ListItemIcon, ListItemText  } from '@material-ui/core';
import {  Drawer, AppBar, Toolbar, CssBaseline, List } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';
import HomeRounded from '@material-ui/icons/HomeRounded';
import BusinessCenterRoundedIcon from '@material-ui/icons/BusinessCenterRounded';
import FormatListBulletedRoundedIcon from '@material-ui/icons/FormatListBulletedRounded';
import { useQuery, gql } from "@apollo/client";
import {withApollo} from '../../lib/apollo';
import Loading from '../loading';
import ErrorAlert from '../error';
import CartButton from './CartButton';
import Link from 'next/link';

const MENU_LIST = gql`
query {
    categoryList(filters: {}) {
      id
      level
      name
    }
  }
`;

const drawerWidth = 250;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: drawerWidth,
  },
  title: {
    flexGrow: 1,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  leftdrawer: {
    width: 400,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
    backgroundColor:'#f5f5f5'
  },
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-start',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginRight: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginRight: 0,
  },
}));

function Navigasi() {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };

  //Menu List
  const itemsList = [
    {
      text: "Home",
      icon: <HomeRounded />,
      id:  0,
      route: "/"
    },
    {
      text: "Category",
      icon: <FormatListBulletedRoundedIcon />,
      id: 1,
      route: "/category"
    },
    {
      text: "Product",
      icon: <BusinessCenterRoundedIcon />,
      id: 2,
      route: "/product"
    }
  ];
  const response = useQuery(MENU_LIST,[]);
    const { loading, error, data } = response;
    if (loading) {
      return null;
    }  if (error) {
      return <div><ErrorAlert/> </div>;
    } 
    //console.log(data);
    const category = data.categoryList;
    //console.log(category);

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(classes.appBar, {
          [classes.appBarShift]: open,
        })}
      >
        <Toolbar color="inherit">
          <Typography variant="h6" noWrap className={classes.title}>
            SPA Commerce
          </Typography>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="end"
            onClick={handleDrawerOpen}
            className={clsx(open && classes.hide)}
          >
            <MenuIcon />
          </IconButton>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="persistent"
        anchor="right"
        open={open}
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.drawerHeader}>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === 'rtl' ? <ChevronLeftIcon /> : <ChevronRightIcon />}
          </IconButton>
        </div>
        <Divider />
        <List component="nav">
        {itemsList.map((item) => {
        const { text, icon, id, route } = item;
            return (
              <ListItem 
                button
                key={id}>
                {icon && <ListItemIcon color="primary">{icon}</ListItemIcon>}
                <Link href={route} color="inherit">
                <ListItemText primary={text} />
                </Link>
              </ListItem>
            );
        })}
        </List>
        <Divider />
          <Typography gutterBottom variant="h6" component="h4" style={{margin:'auto',marginTop:5,}}>
            All Category
          </Typography>
        <List component="nav">
          {category.map((nav,idy) => {
            return (
            <ListItem button key={idy}>
              <Link href="/category/[category_id]" as={`/category/${nav.id}`}>
                <div style={{color:'black'}}><ListItemText primary={nav.name}/></div>
              </Link>
            </ListItem>
            );
          })}
        </List>
      </Drawer>
      <CartButton />
    </div>
  );
}

export default withApollo({ ssr: false })(Navigasi);