import React from "react";
import "../..//styles/business-styles.css";
import { FaCrown } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";



export default function FeaturedBusinessCard(props) {
    const type = props.type;
    const featured = props.featured;
    const topRated = props.topRated;
    const {name, description, logoUrl, business_type, tags, price, reviews, img} = props.businessDetails;
    return (
        <div className="featured-business-container">
            <div className="featured-business-image-container">
                <div className="top-tagged-container">
                {featured == "true" && <FaCrown className="featured-business-crown" size={20} fill="#00ADB5" />}
                {topRated == "true" && <MdStarRate className="featured-business-crown" size={20} fill="#00ADB5" />}
                </div>
                <img src={logoUrl} className="featured-business-image" alt="product" />
            </div>
            <p className="featured-business-name">{name}</p>
            
            
            <div className="featured-business-type">{type}</div>
            <div className="featured-business-tags">
              {
                tags.map((tag, index) => {
                if(index < 2)
                  return <span key={index} className="featured-buisness-tag">{tag}</span>
                })
              }
            </div>
            <p>{price}</p>
        </div>
    )
}