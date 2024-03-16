import React, { useState } from "react";
import { Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import "../../styles/styles.css";
import Search from "./Search";
import { CiLocationOn } from "react-icons/ci";
import { FaCartArrowDown } from "react-icons/fa";
import { Dropdown, DropdownItem } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { useStoreState, useStoreActions } from "easy-peasy";
import BusinessAuth from "../Dashboard/Business-Dashboard/Business-Components/Business-Auth";

import { useNavigate } from "react-router-dom";
import SideNav from "./SideNav";






export default function Header() {
    const headerVisibilityArray = ["/", "/businessfrontpage", "/claim-business"];
    const headerBusinessDashboardArray = ["/business-dashboard-products", "/business-dashboard-analytics"];
    const [location, setLocation] = useState("");
    const locationPath = useLocation().pathname;
    const setSelectedMenuBusiness = useStoreActions(actions => actions.setSelectedMenuBusiness);
    const [BusinessAuthModal, setBusinessAuthModal] = React.useState(false);
    const navigate = useNavigate();
    const business_user = useStoreState(state => state.business_user);
    const [sidenav, setSidenav] = useState(false);
    const [business, setBusiness] = useState({});

    React.useEffect(() => {
        setLocation(locationPath);
    }, [locationPath]);

    


    


    const checkBusinessAuth = () => {
        if(Object.keys(business_user).length === 0) {
            setBusinessAuthModal(true)
        }
        else{
                  fetch("http://localhost:3001/auth/verify", {
                    method: "POST",
                    headers: {
                      "Content-Type": "application/json",
                    },
                    body: JSON.stringify({ token: business_user.token, user_id: business_user.user_id }),
                  })
                    .then((res) => res.json())
                    .then((data) => {
                      if (data.success) {
                        setBusiness(data.business);
                        navigate("/business-dashboard-products");
                      } else {
                        setBusinessAuthModal(true);
                      }
                    })
                    .catch((error) => {
                      console.error("Error verifying authentication:", error);
                    })
        }
    }

    if(headerVisibilityArray.includes(location)) {
    return (
        <>
        {sidenav && <SideNav
            show={sidenav}
            setShow={setSidenav}
            checkBusinessAuth={checkBusinessAuth}
        />}
        <BusinessAuth show={BusinessAuthModal} handleClose={() => setBusinessAuthModal(false)} />
        <div className="header-main">
            <div className="header-top">
                <div className="textSecondary">
                    <GiHamburgerMenu size={30} 
                    onClick={() => setSidenav(true)}
                    />
                </div>
                <div>
                    <Link to="/" className="text-decoration-none"><h4 className="textPrimary m-0 p-0">BarnBuddy</h4></Link>
                </div>
                <div className="search-box">
                    <Search />
                </div>
                <div className="location-container" style={{cursor: "pointer"}}>
                            <div className="m-0 p-0">
                                <CiLocationOn size={20} fill="#00ADB5"/>
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
            <div className="header-bottom-wrapper">

            <div className="header-bottom">
                    <Link to="/business" className="text-decoration-none  menu-font">
                        <p className="textPrimary text-bold">Green Stores</p>
                    </Link>
                    <Link to="/business" className="text-decoration-none  menu-font">
                        <p className="textPrimary text-bold">Pharmacies</p>
                    </Link>
                    <Link to="/business" className="text-decoration-none  menu-font">
                        <p className="textPrimary text-bold">Psychedelics</p>
                    </Link>
                    <Link to="/business" className="text-decoration-none  menu-font">
                        <p className="textPrimary text-bold">Products</p>
                    </Link>
                    <Link to="/business" className="text-decoration-none  menu-font">
                        <p className="textPrimary text-bold">All Stores</p>
                    </Link>
                    <Link className="text-decoration-none  menu-font"
                        onClick={() => checkBusinessAuth()}
                    >
                        <p className="textPrimary text-bold">Business Account</p>
                    </Link>
                    <div className="flex-grow-item"></div>
            </div>
            </div>
        </div>
        </>
    );
    }
    if(headerBusinessDashboardArray.includes(location)) {
        return(<>
        </>
            )
    }
}