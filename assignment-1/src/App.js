import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

// Import views
import Home from './views/Home';
import Cart from './views/Cart';
import Category from './views/Category';

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
        </Switch>
      </Router>
    </div>
  );
}
export default function App() {
  return (
    <div>
      <Routing />
    </div>
  );
}