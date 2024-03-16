import React from "react";



export default function CategoryCard(props) {
    console.log(props.image);
    return (
        <div className="category-card-wrapper shadow-md border">
            <div className="card border-0">
                <img src={props.image} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="text-center textPrimary">{props.category}</h5>
                </div>
            </div>
        </div>
    )
}