import React from "react";
import { CiStar } from "react-icons/ci";


export default function Rating(props) {
    const stars = [];
    for (let i = 0; i < 5; i++) {
        if (i < props.rating) {
            stars.push(<CiStar key={i} color="orange" />);
        } else {
            stars.push(<CiStar key={i} color="grey" />);
        }
    }
    return (
        <div>
            <span>
                {props.rating}
            </span>
            <span>
                {stars}
            </span>
            <span>
                ({props.totalReviews})
            </span>
        </div>
    )
};