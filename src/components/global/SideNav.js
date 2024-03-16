import React from "react";
import { CgClose } from "react-icons/cg";
import { Link } from "react-router-dom";

export default function SideNav(props) {
    return (
        <>
        <div className="overlay">
        </div>
        <div className="sidenav">
            <div className="d-flex justify-content-between ">
            <Link to="/" onClick={() => props.setShow(false)}><h4 className="textPrimary">BarnBuddy</h4></Link>
            <CgClose
            style={{cursor: "pointer"}}                
             size={25}
                onClick={
                () => props.setShow(false)
            } />
            </div>
            <Link to="/claim-business" className="side-nav-item" onClick={
                () => props.setShow(false)
            }>
                <h6>Green Stores</h6>
            </Link>
            <Link to="/claim-business" className="side-nav-item" onClick={
                () => props.setShow(false)
            }>
                <h6>Pharmacies</h6>
            </Link>
            <Link to="/claim-business" className="side-nav-item" onClick={
                () => props.setShow(false)
            }>
                <h6>Psychedelics</h6>
            </Link>
            <div  className="side-nav-item" onClick={
                () => {
                    props.checkBusinessAuth();
                    props.setShow(false)}
            }>
                <h6>Business Account</h6>
            </div>
            <Link to="/claim-business" className="side-nav-item" onClick={
                () => props.setShow(false)
            }>
                <h6>Claim Business</h6>
            </Link>
            <Link to="/claim-business" className="side-nav-item" onClick={
                () => props.setShow(false)
            }>
                <h6>All Brands</h6>
            </Link>
            <Link to="/claim-business" className="side-nav-item" onClick={
                () => props.setShow(false)
            }>
                <h6>All Products</h6>
            </Link>
        </div>
        </>
    )
}