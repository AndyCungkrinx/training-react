import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Provider } from "react-redux";

// Import pages
import Home from './pages/home';
import Category from './pages/category';
import DetailProduct from './pages/detailproduct';
import addCart from "./pages/cart";
import UserPage from "./pages/user";
import Dashboard from "./pages/user/components/Dashboard";
import store from "./redux/store";

// Navigation
import Navigation from './components/navigation';

function Routing(setOpen) {
  return (
    <div>
      <Router>
       <Navigation />
        <Switch>
          <Route exact path="/">
           <Home />
          </Route>
          <Route path="/home" component={Home} />
          <Route path="/cart" component={addCart} />
          <Route path="/category/:categoryId" component={Category} />
          <Route path="/category" component={Category} />
          <Route path="/detailproduct" component={DetailProduct} />
          <Route path="/register" >
            <UserPage />
          </Route>
          <Route path="/profile" >
            <Dashboard />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}
export default function App() {
  return (
    <div>
    <Provider store={store}>
      <Routing />
    </Provider>
    </div>
  );
}