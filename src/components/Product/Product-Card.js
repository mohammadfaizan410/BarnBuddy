import React from "react";


export default function ProductCard(props) {
    const {title, description, categories, price, reviews, img} = props.productDetails;
    return (
        <div className="d-flex dlex-column">
            <div className="">
                <img src={img} alt="product" />
            </div>
            <p>{description}</p>
            <p>{categories}</p>
            <p>{price}</p>
        </div>
    )
}