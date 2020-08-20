import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Websocket from 'react-websocket';

// Import views
import Home from './views/Home';
import Cart from './views/Cart';
import Category from './views/Category';
import DetailProduct from './views/DetailProduct';

// Contents
import Navigation from './contents/Navigation';

function Routing() {
  return (
    <div>
      <Router>
       <Navigation />
        <Switch>
          <Route exact path="/">
           <Home />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/cart" component={Cart} />
          <Route path="/category/:categoryId" component={Category} />
          <Route path="/category" component={Category} />
          <Route path="/detailproduct" component={DetailProduct} />
        </Switch>
      </Router>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <Websocket url='ws://localhost:3000'/>
      <Routing />
    </div>
  );
}