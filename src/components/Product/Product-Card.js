import React from "react";
import Rating from "../Reviews/Rating";


export default function ProductCard(props) {
    const {title, description, categories, price, reviews, img} = props.productDetails;
    return (
        <div className="d-flex dlex-column">
            <div className="">
                <img src={img} alt="product" />
            </div>
            <p>{description}</p>
            <p>{categories}</p>
            <Rating reviews={reviews} totalReviews={reviews.length} />
            <p>{price}</p>
        </div>
    )
}