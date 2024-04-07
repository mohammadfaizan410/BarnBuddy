import React from "react";



export default function BusinessDashbaordNavbar(){
    return(
        <>
        <div className="business-dashboard-navbar-container">
            <div className="business-dashboard-navbar-item">
                <p className="business-dashboard-navbar-item-text">Dashboard</p>
            </div>
            <div className="business-dashboard-navbar-item">
                <p className="business-dashboard-navbar-item-text">Products</p>
            </div>
            <div className="business-dashboard-navbar-item">
                <p className="business-dashboard-navbar-item-text">Orders</p>
            </div>
            <div className="business-dashboard-navbar-item">
                <p className="business-dashboard-navbar-item-text">Settings</p>
            </div>
        </div>
        <div className="business-dashboard-navbar-seperator"></div>
        </>
    )
}