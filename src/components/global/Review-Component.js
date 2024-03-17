import React from "react";
import { MdFavorite, MdStar } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import { FaStar } from "react-icons/fa";
import { FaRegStar } from "react-icons/fa";

export default function BusinessReviewsComponent(props) {
    const {type, id} = props;
    const [reviews, setReviews] = React.useState(null);
    const [rating, setRating] = React.useState(0);
    const [reviewError, setReviewError] = React.useState(null);
    const [reviewForm, setReviewForm] = React.useState({
        review: "",
        rating: 0
    });
    
    const RatingInput = ({ maxRating }) => {
        const ratingArray = [...Array(maxRating).keys()].map((index) => index + 1);
    
        return (
            <div className="d-flex flex-row align-items-end">
                <span className="mx-2 textPrimary">{rating}</span>
                {ratingArray.map((ratingItem, index) => (
                    <span key={index} onClick={() => {
                        if(rating > ratingItem){
                            setRating(ratingItem - 1);
                        }
                        if(rating === ratingItem){
                            setRating(ratingItem - 1);
                        }
                        else{
                            setRating(ratingItem);
                        }
                    }}>
                        {ratingItem <= rating ? <FaStar 
                            fill="#ffc107"
                        /> : <FaRegStar />}
                    </span>
                ))}
            </div>
        );
    };

    React.useEffect(() => {
        if (!isValidObjectId(id)) {
            console.log("Invalid business id")
            return;
        }
        try{
            fetch(`http://localhost:3001/business/reviews/getReviews`, {
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

    const handleReviewSubmit = () => {
        {/*todo check user login*/}

        if(!isValidObjectId(id)) {
            console.log("Invalid business id")
            return;
        }
        if(reviewForm.review.length < 40) {
            setReviewError("Review must be at least 40 characters");
            return;
        }
        if(rating === 0) {
            setReviewError("Rating is required");
            return;
        }
        setReviewError(null);


    }

    function isValidObjectId(id) {
        const objectIdRegex = /^[0-9a-fA-F]{24}$/;
        return objectIdRegex.test(id);
    }

    if(reviews === null) {
        return <div>Loading...</div>
    }
    if(reviews.length === 0) {
        return <><div className="form">
    <input type="text" 
    className="form-control" 
    placeholder="Write a review, min 100 chars"
    name="review"
    value={reviewForm.review} 
    onChange={(e) => setReviewForm({...reviewForm, review: e.target.value})}
    />
    {
        <RatingInput maxRating={5} />
    }
    <span className="text-danger">{reviewError}</span>
    <button className="btn btn-primary"
    onClick={handleReviewSubmit}
    >Submit</button>
        </div><div className="form">No reviews found</div></>
    }
    return (
        <div className=" form">
           <div className>
                <input type="text" 
                className="form-control" 
                placeholder="Write a review, min 40 chars" 
                name="review"
                value={reviewForm.review} 
                onChange={(e) => setReviewForm({...reviewForm, review: e.target.value})}
                />
                {
                    <RatingInput maxRating={5} />
                }
                <span className="text-danger">{reviewError}</span>
                <button className="btn btn-primary"
                onClick={handleReviewSubmit}
                >Submit</button>
        </div>
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