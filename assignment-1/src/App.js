import React from 'react';
import { BrowserRouter, Switch, Route } from "react-router-dom";

// Import views
import Home from './views/Home';
import Cart from './views/Cart';
import Navigation from './contents/Navigation';

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