import React from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../styles/styles.css";
import Search from "./Search";
import { CiLocationOn } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";



export default function Header() {
    return (
        <div className="d-flex flex-column pt-4 boxShadow fixed-top bg-white" style={{zIndex: "10000"}}>
            <div className="d-flex flex-row justify-content-between align-items-center container-margins">
                <div className="textSecondary">
                    <GiHamburgerMenu size={30} />
                </div>
                <div className="m-0 p-0 mx-5">
                    <Link to="/" className="text-decoration-none"><h4 className="textPrimary m-0 p-0">BarnBuddy</h4></Link>
                </div>
                <div className="d-flex flex-grow-1 mx-3">
                    <Search />
                </div>
                <div className="d-flex flex-row align-items-center mx-4" style={{cursor: "pointer"}}>
                            <div className="m-0 p-0">
                                <CiLocationOn size={20} fill="#00ADB5"/>
                            </div>
                            <div className="d-flex d-flex flex-row align-items-end">
                            <div >
                                <p className="textSmall px-1 m-0 text-bold textSecondary">Location</p>
                            </div>
                            <div className="textPrimary text-decoration-">
                                <p className="textSmall px-1 m-0 text-bold text-decoration-underline">Change</p>
                            </div>  
                            </div>
                </div>
                <div className="px-3">
                    <div className="d-flex flex-row align-items-center">
                        <div>
                            <FaCartArrowDown size={20} />
                        </div>  
                    </div>

                </div>
            </div>
            <div className="d-flex flex-row mt-2 mb-0 container-margins">
                    <Link to="/business" className="text-decoration-none  menu-margin menu-font">
                        <p className="textPrimary text-bold">Green Stores</p>
                    </Link>
                    <Link to="/business" className="text-decoration-none  menu-margin menu-font">
                        <p className="textPrimary text-bold">Shroom Shops</p>
                    </Link>
                    <Link to="/business" className="text-decoration-none  menu-margin menu-font">
                        <p className="textPrimary text-bold">Supply Stores</p>
                    </Link>
                    <Link to="/business" className="text-decoration-none  menu-margin menu-font">
                        <p className="textPrimary text-bold">Health Stores</p>
                    </Link>
                    <Link to="/business" className="text-decoration-none  menu-margin menu-font">
                        <p className="textPrimary text-bold">All Stores</p>
                    </Link>
            </div>
        </div>
    );
}