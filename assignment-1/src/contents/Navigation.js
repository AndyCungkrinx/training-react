import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Nav, NavItem} from 'reactstrap';
import { NavLink } from 'react-router-dom';
import {faStarOfLife, faAnchor, faListUl } from '@fortawesome/free-solid-svg-icons';

const tabs = [{
    route: "/newarrivals",
    icon: faAnchor,
    label: "New Arrivals"
  },{
    route: "/bestsellers",
    icon: faStarOfLife,
    label: "Best Sellers"
  },{
    route: "/category",
    icon: faListUl,
    label: "Category"
  }]

const Navigation = () => {
return (
    <>
      <header>
      <div className="bg-nav">
      {/* Top Bar*/}
      <nav className="navbar navbar-expand-md blue-gradient fixed-top" role="navigation">
        <div className="container-fluid">
            <NavLink className="navbar-brand" exact to="/home"><span className='brand'>SPA Ecommerce</span></NavLink>
            <Nav className="ml-auto">
              <NavItem>
                <NavLink to="/home" className="nav-link">
                  Home
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/cart" className="nav-link">
                  Cart
                </NavLink>
              </NavItem>
            </Nav>
        </div>
      </nav>
      {/* Bottom Tab Navigator*/}
      <nav className="navbar fixed-bottom blue-gradient" sticky="bottom" role="navigation">
        <Nav className="w-100">
          <div className=" d-flex flex-row justify-content-around w-100">
            {
              tabs.map((tab, index) =>(
                <NavItem key={`tab-${index}`}>
                  <NavLink exact to={tab.route} className="nav-link" activeClassName="active">
                    <div className="row d-flex flex-column justify-content-center align-items-center">
                      <FontAwesomeIcon size="lg" icon={tab.icon}/>
                      <div>{tab.label}</div>
                    </div>
                  </NavLink>
                </NavItem>
              ))
            }
          </div>
        </Nav>
      </nav>
      </div>
      </header>
    </>
  )
};
export default Navigation;