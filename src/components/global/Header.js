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
import { CiShop } from "react-icons/ci";
import { IoAnalytics } from "react-icons/io5";
import { CiSettings } from "react-icons/ci";
import { FaUserFriends } from "react-icons/fa";
import { CiHome } from "react-icons/ci";
import { useNavigate } from "react-router-dom";






export default function Header() {
    const headerVisibilityArray = ["/", "/businessfrontpage", "/claim-business"];
    const headerBusinessDashboardArray = ["/business-dashboard-products", "/business-dashboard-analytics"];
    const [location, setLocation] = useState("");
    const locationPath = useLocation().pathname;
    const setSelectedMenuBusiness = useStoreActions(actions => actions.setSelectedMenuBusiness);
    const selectedMenuBusiness = useStoreState(state => state.selectedMenuBusiness);
    const [BusinessAuthModal, setBusinessAuthModal] = React.useState(false);
    const navigate = useNavigate();
    const business_user = useStoreState(state => state.business_user);
    const setBusiness = useStoreActions(actions => actions.setBusiness);



    React.useEffect(() => {
        setLocation(locationPath);
        setSelectedMenuBusiness("myproducts");
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
        <BusinessAuth show={BusinessAuthModal} handleClose={() => setBusinessAuthModal(false)} />
        <div className="d-flex flex-column pt-4 boxShadow fixed-top bg-white" style={{zIndex: "10000"}} id="header-main">
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
                    <Dropdown>
                        <Dropdown.Toggle id="dropdown-basic" >
                            Business
                        </Dropdown.Toggle>

                        <Dropdown.Menu className="p-2 ">
                        <DropdownItem><Link to="/claim-business" className="text-decoration-none textSecondary">Claim Business</Link></DropdownItem>
                            <DropdownItem
                            onClick={
                                () => checkBusinessAuth()
                            }
                            >Business Account</DropdownItem>
                        </Dropdown.Menu>    
                    </Dropdown>
            </div>
        </div>
        <div style={{height : "140px"}}></div>
        </>
    );
    }
    if(headerBusinessDashboardArray.includes(location)) {
        return(<>
            <div className="d-flex flex-column mb-0 align-items-center  sidebar pt-2 " >
                    <Link 
                        to="/" 
                        className={`text-decoration-none dashboard-menu-item menu-margin menu-font mx-auto mb-5 border-bottom`}
                        >
                        <CiHome 
                        size={60}
                        fill= "Gray"
                        className={`p-2 ${selectedMenuBusiness == "myproducts" && "sidebar-icons-selected"}`}
                        >
                        </CiHome>
                    </Link>
                    <div 
                        className={`text-decoration-none dashboard-menu-item menu-margin menu-font mx-auto mb-4 border-bottom`}
                        onClick={() => {
                            setSelectedMenuBusiness("myproducts")
                            navigate("/business-dashboard-products")
                        }}
                        >
                        <CiShop 
                        size={50}
                        fill={selectedMenuBusiness === "myproducts" ? "#00ADB5" : "gray"}
                        className={`p-2 ${selectedMenuBusiness == "myproducts" && "sidebar-icons-selected"}`}
                        style={selectedMenuBusiness === "myproducts" && {borderRadius: "20px", backgroundColor: "#E8E8E8"}}
                        >
                        </CiShop>
                    </div>
                    <div 
                        className={`text-decoration-none dashboard-menu-item menu-margin menu-font mx-auto mb-4 border-bottom`}
                        onClick={() => {setSelectedMenuBusiness("analytics")
                        navigate("/business-dashboard-analytics")
                    }}
                        >
                        <IoAnalytics 
                        size={50}
                        fill={selectedMenuBusiness === "analytics" ? "#00ADB5" : "gray"}
                        className={`p-2 ${selectedMenuBusiness == "myproducts" && "sidebar-icons-selected"}`}
                        style={selectedMenuBusiness === "analytics" && {borderRadius: "20px", backgroundColor: "#E8E8E8"}}
                        >
                        </IoAnalytics>
                    </div>
                    <Link 
                        to="/business-dashboard-products" 
                        className={`text-decoration-none dashboard-menu-item menu-margin menu-font mx-auto mb-4 border-bottom`}
                        onClick={() => setSelectedMenuBusiness("followers")}
                        >
                        <FaUserFriends 
                        size={50}
                        fill={selectedMenuBusiness === "followers" ? "#00ADB5" : "gray"}
                        className={`p-2 ${selectedMenuBusiness == "myproducts" && "sidebar-icons-selected"}`}
                        style={selectedMenuBusiness === "followers" && {borderRadius: "20px", backgroundColor: "#E8E8E8"}}
                        >
                        </FaUserFriends>
                    </Link>
                    
                    <Link 
                        to="/business-dashboard-products" 
                        className={`text-decoration-none dashboard-menu-item menu-margin menu-font mx-auto mb-4 border-bottom`}
                        onClick={() => setSelectedMenuBusiness("settings")}
                        >
                        <CiSettings 
                        size={50}
                        fill={selectedMenuBusiness === "settings" ? "#00ADB5" : "gray"}
                        className={`p-2 ${selectedMenuBusiness == "settings" && "sidebar-icons-selected"}`}
                        style={selectedMenuBusiness === "settings" && {borderRadius: "20px", backgroundColor: "#E8E8E8"}}
                        >
                        </CiSettings>
                    </Link>
            </div>
        
        </>
            )
    }
}