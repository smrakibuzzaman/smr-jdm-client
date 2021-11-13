import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import { Link } from 'react-router-dom';
import AddCars from '../AddCars/AddCars';
import MakeAdmin from '../MakeAdmin/MakeAdmin';
import MyOrders from '../MyOrders/MyOrders';
import Payment from '../Payment/Payment';
import Reviews from '../Reviews/Reviews';
import  './DashBoard.css'
import useAuth from './../../hooks/useAuth';
import AdminRoute from '../AdminRoute/AdminRoute';
import LogOut from '../LogOut/LogOut';
import PrivateRoute from './../PrivateRoute/PrivateRoute';

const DashBoard = () => {
    let { path, url } = useRouteMatch();
  const { isAdmin } = useAuth();
 

  return (
    <div>
      <div className="dashboard-container ">
        <div className="row">
          <div className="col-md-3 ">
            <div className="dashboard">
              <h5>Dashboard</h5>
              <Link to={`${url}`}>
                <li className="dashboard-menu mt-5">My Orders</li>
              </Link>

              <Link to={`${url}/payments`}>
                <li className="dashboard-menu mt-5">Payments</li>
              </Link>

              <Link to={`${url}/reviews`}>
                <li className="dashboard-menu mt-5">Reviews</li>
              </Link>

              <Link to={`${url}/logOut`}>
                <li className="dashboard-menu mt-5">Log Out</li>
              </Link>
{isAdmin && <div className="admin-dashboard">
                <li className="dashboard-menu mt-5">Orders list</li>

                
                  <Link to={`${url}/addCars`}>
                    <li className="dashboard-menu">Add Cars</li>
                  </Link>
               
                <Link to={`${url}/makeAdmin`}>
                  <li className="dashboard-menu">Make Admin</li>
                </Link>
              
                <Link to={`${url}/logOut`}>
                <li className="dashboard-menu mt-5">Log Out</li>
              </Link>
              </div>}
              
            </div>
          </div>
          <div className="col-md-9">
            <Switch>
              <PrivateRoute exact path={path}>
                <MyOrders></MyOrders>
              </PrivateRoute>
              <PrivateRoute exact path={`${path}/reviews`}>
                <Reviews></Reviews>
              </PrivateRoute>
              <PrivateRoute exact path={`${path}/logout`}>
                <LogOut></LogOut>
              </PrivateRoute>
              <PrivateRoute exact path={`${path}/payments`}>
                <Payment></Payment>
              </PrivateRoute>
              <AdminRoute exact path={`${path}/makeAdmin`}>
                <MakeAdmin></MakeAdmin>
              </AdminRoute>
              <AdminRoute exact path={`${path}/addCars`}>
                <AddCars></AddCars>
              </AdminRoute>
              <AdminRoute exact path={`${path}/logout`}>
                <LogOut></LogOut>
              </AdminRoute>
            </Switch>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashBoard;