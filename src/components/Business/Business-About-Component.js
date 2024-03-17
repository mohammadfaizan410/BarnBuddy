import React from "react";
import { FaGlobeAmericas } from "react-icons/fa";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa";
import { MdAttachEmail } from "react-icons/md";
import { TbBuildingEstate } from "react-icons/tb";
import { CgWebsite } from "react-icons/cg";
import { TbZip } from "react-icons/tb";
import MapWithMarkers from "../global/MapMarkers";



export default function BusinessAboutComponent(props) {
    const businessData = props.businessData;
    return (
        <div className="business-about-component">
            <h3>About Business</h3>
            <div className="business-about-content">
                <div className="business-about-content-section">
                    <div className="business-about-icon-div">
                        <span>
                        <FaGlobeAmericas 
                        />
                        <span>
                        <a href={businessData.website} target="_blank">website</a>
                        </span>
                        </span>
                    </div>
                    <div className="business-about-icon-div">
                        <span>
                        <FaMagnifyingGlassLocation 
                        />
                        <span>
                        {businessData.address1}
                        </span>
                        </span>
                    </div>
                    <div className="business-about-icon-div">
                        <span>
                        <FaPhone 
                        />
                        <span>
                        {businessData.phone}
                        </span>
                        </span>
                        </div>
                    <div className="business-about-icon-div">
                        <span>
                        <MdAttachEmail 
                        />
                        <span>
                        <a href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(businessData.email)}`}>Email</a>
                        </span>
                        </span>
                    </div>
                    <div className="business-about-icon-div">
                        <span>
                        <TbBuildingEstate 
                        />
                        <span>
                        {businessData.city}
                        </span>
                        </span>
                        </div>
                    <div className="business-about-icon-div">
                        <span>
                        <CgWebsite 
                        />
                        <span>
                        {businessData.state}
                        </span>
                        </span>
                        </div>
                    
                    <div className="business-about-icon-div">
                        <span>
                        <TbZip 
                        />
                        <span>
                        {businessData.zip}
                        </span>
                        </span>
                        </div>
            
                </div>
                <div className="business-about-content-section business-about-content-section-middle">
                        <h4>Amneties</h4>
                    <div className="business-about-amneties">
                        {
                            businessData.flags?.map((flag, index) => {
                                return (
                                    <div key={index}>{flag}</div>
                                )
                            })
                        }
                    </div>
                    <h4>Description:</h4>
                    <div>
                    {businessData.description.replace(/LEAFLY|leafly/g, 'BarnBuddy')}
                    </div>
                </div>
                <div className="business-about-content-section">
                <MapWithMarkers coordinates={businessData.locations} url={businessData.logoUrl} name={businessData.name} />
                <div className="business-about-icon-div">
                        <span>
                        <FaMagnifyingGlassLocation 
                        />
                        <span>
                        {businessData.address1}
                        </span>
                        </span>
                    </div>
                    <div className="business-about-icon-div">
                        <span>
                        <FaPhone 
                        />
                        <span>
                        {businessData.phone}
                        </span>
                        </span>
                        </div>
                </div>
            </div>
        </div>
    );
}