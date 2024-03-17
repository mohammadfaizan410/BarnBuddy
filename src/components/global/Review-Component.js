import React from "react";


export default function BusinessReviewsComponent(props) {
    const {type, id} = props;
    const [reviews, setReviews] = React.useState(null);

    React.useEffect(() => {
        if (!isValidObjectId(id)) {
            return;
        }
        try{
            fetch(`http://localhost:3001/reviews/getReviews`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    type: type,
                    id: id
                })
            })
            .then(res => res.json())
            .then(data => {
                setReviews(data.reviews);
            })
            .catch(err => {
                console.log(err);
            });
        }catch(err){
            console.log(err);
        }
    }, [type, id]);

    function isValidObjectId(id) {
        const objectIdRegex = /^[0-9a-fA-F]{24}$/;
        return objectIdRegex.test(id);
    }

    if(reviews === null) {
        return <div>Loading...</div>
    }
    return (
        <div className=" ">
            {
                reviews.map((review, index) => {
                    return (
                        <div key={index} className="business-reviews-component-review">
                            <div className="business-reviews-component-review-top">
                                <span>{review.user_name}</span>
                                <span>{review.date}</span>
                            </div>
                            <div className="business-reviews-component-review-middle">
                                <span>{review.rating}</span>
                                <span>{review.review}</span>
                            </div>
                            <div className="business-reviews-component-review-bottom">
                                <span>{review.likes} <MdFavoriteBorder /></span>
                                <span>{review.dislikes} <MdFavorite /></span>
                            </div>
                        </div>
                    )
                })
            }
        </div>
    )
}