import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import NavBar from '../Pages/Shared/NavBar/NavBar';

const Dashboard = () => {
    return (
        <div>
            <NavBar></NavBar>
            <div className="drawer drawer-mobile">
                <input id="dashboard-drawer" type="checkbox" className="drawer-toggle" />
                <div className="drawer-content ">
                    {/* <!-- Page content here --> */}
                    <Outlet></Outlet>
                </div>
                <div className="drawer-side bg-purple-50">
                    <label htmlFor="dashboard-drawer" className="drawer-overlay"></label>
                    <ul className="menu p-4 w-80  text-base-content">
                        {/* <!-- Sidebar content here --> */}
                        <li><Link to='/dashboard/myorders'>My Orders</Link></li>
                        <li><Link to='/dashboard/myproducts'>My Products</Link></li>
                        <li><Link to='/dashboard/addproduct'>Add a Product</Link></li>

                        {
                            // isAdmin &&
                            <>
                                <li><Link to='/dashboard/allsellers'>All Sellers</Link></li>
                                <li><Link to='/dashboard/allbuyers'>All Buyers</Link></li>
                                <li><Link to='/dashboard/reporteditems'>Reported Items</Link></li>
                            </>
                        }
                    </ul>

                </div>
            </div>
        </div>
    );
};

export default Dashboard;