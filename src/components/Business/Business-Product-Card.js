import React from "react";
import "../..//styles/business-styles.css";
import { FaCrown } from "react-icons/fa";
import { MdStarRate } from "react-icons/md";
import { Link } from "react-router-dom";



export default function BusinessProductCard(props) {
    const {product, index} = props;    
    return (
        <Link to={`/productFrontpage/${product._id}`} style={{textDecoration: "none"}}>
        <div className="featured-business-container">
            <div className="featured-business-image-container">
                <div className="top-tagged-container">
                {/* {featured == "true" && <FaCrown className="featured-business-crown" size={20} fill="#00ADB5" />}
                {topRated == "true" && <MdStarRate className="featured-business-crown" size={20} fill="#00ADB5" />} */}
                </div>
                <img src={product.imageUrl} className="featured-business-image" alt="product" />
            </div>
            <p className="featured-business-name"></p>
            
            
            {product.strainName && <div className="featured-business-type">{product.strainName}</div>}
            <div className="featured-business-tags">
            <span key={index} className="featured-buisness-tag">{product.strainName}</span>
            <span key={index} className="featured-buisness-tag">{product.strainCategory}</span>
            </div>
            <div className="featured-business-tags">
            <span key={index} className="featured-buisness-tag">{product.productCategory}</span>
            </div>
            <p>{product.price}</p>
        </div>
        </Link>
    )
}