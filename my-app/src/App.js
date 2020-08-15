import "./index.css";
import Home from './pages/Home';
import FunctionClassEffect from './pages/FunctionClassEffect';
import OrderSimpleNested from './pages/OrderSimpleNested';
import OrderByUrlParam from './pages/OrderByUrlParam';
import OrderByQueryParam from './pages/OrderByQueryParam';
import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


//Content
function Navigation() {
  return (
    <Router>
      <div>
        <ul>
          <li> <Link to="/">Home</Link> </li>
          <li> <Link to="/FunctionClassEffect">FunctionClassEffect</Link> </li>
          <li> <Link to="/OrderSimpleNested">OrderSimpleNested</Link> </li>
          <li> <Link to="/OrderByUrlParam">OrderByUrlParam</Link> </li>
          <li> <Link to="/OrderByQueryParam">OrderByQueryParam</Link> </li>
        </ul>

        <Switch>
          <Route exact path="/">
           <Home />
          </Route>
          <Route path="/FunctionClassEffect">
            <FunctionClassEffect />
          </Route>
          <Route path="/OrderSimpleNested">
            <OrderSimpleNested />
          </Route>
          <Route path="/OrderByUrlParam">
            <OrderByUrlParam />
          </Route>
          <Route path="/OrderByQueryParam">
            <OrderByQueryParam />
          </Route>
        </Switch>
      </div>
    </Router>
  )
}

export default function App() {
  return (
    <div className="App">
      <Navigation />
    </div>
  );
}
