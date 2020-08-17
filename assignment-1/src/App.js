import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Import views
import Home from './views/Home';
import Cart from './views/Cart';
import Category from './views/Category';


// Contents
import Navigation from './contents/Navigation';
import Arrivals from './views/Arrivals';
import Sellers from './views/Sellers';

//Content
function Menu() {
  return (
    <div>
      <BrowserRouter>
       <Navigation />
        <Switch>
          <Route exact path="/">
           <Home />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/category" component={Category} />
          <Route path="/newarrivals" component={Arrivals} />
          <Route path="/bestsellers" component={Sellers} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <Menu />
    </div>
  );
}