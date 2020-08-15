import React from "react";
import Card from "../components/Card";
import { Switch, Route, Link, useRouteMatch } from "react-router-dom";

export default function OrderSimpleNested() {
  let { path } = useRouteMatch();
  return (
    <Card color="red">
      <Switch>
        <Route exact path={path}>
          <OrderGroups />
        </Route>
        <Route path={`${path}/unpaid`}>
          <OrderList title="Unpaid Orders" />
        </Route>
        <Route path={`${path}/paid`}>
          <OrderList title="Paid Orders" />
        </Route>
        <Route path={`${path}/processing`}>
          <OrderList title="Processing Orders" />
        </Route>
      </Switch>
    </Card>
  );
}

function OrderGroups() {
  let { url } = useRouteMatch();
  return (
    <>
      <h3>Order Group for OrderSimpleNested</h3>
      <ul>
        <li><Link to={`${url}/unpaid`}>Unpaid Orders</Link></li>
        <li><Link to={`${url}/paid`}>Paid Orders</Link></li>
        <li><Link to={`${url}/processing`}>Processing Orders</Link></li>
      </ul>
    </>
  );
}

function OrderList(props) {
  return (
    <Card color="blue">
      <h3>{props.title}</h3>
      Order 1 ... <br/>
      Order 2 ... <br/> 
      Order 3 ... <br/>
    </Card>
  )
}
