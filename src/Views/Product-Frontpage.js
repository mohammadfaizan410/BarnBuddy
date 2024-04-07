import { type } from "@testing-library/user-event/dist/type";
import React from "react";
import { useParams } from "react-router-dom";
import BusinessReviewsComponent from "../components/global/Review-Component";
import { MdFavoriteBorder } from "react-icons/md";

export default function ProductFrontPage() {
    const id = useParams().id;
    const [productData, setProductData] = React.useState(null);
    React.useEffect(() => {
        try{
            fetch(`http://localhost:3001/products/getProduct`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    product_id: id
                })
            })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProductData(data.product);
            })
        }catch(error) {
            console.error("Error fetching product:", error);
        }
    }, [id]);
    return (
        <>
        {
            productData == null ? <div>Loading...</div> :
            
        <div className="business-frontpage-section">
        <div className="form d-flex flex-row">
            <div className="product-front-page-left">
                <img src={productData.imageUrl} alt="product" />
                    <h2 className="featured-buisness-tag">{productData.productCategory}</h2>
                <div className="product-front-page-info">
                    <h3>Strain: {productData.strainName}</h3>
                    <h3>Type: {productData.strainCategory}</h3>
                    <h3>Price(USD): ${productData.price}</h3>
                </div>
            </div>
            <div className="product-front-page-right">
            <div className="business-frontpage-topinfo">
                <h3>{productData.name}</h3>
                <div className="d-flex flex-column">
                <MdFavoriteBorder size={30} fill="#00ADB5" />
                <span>1223</span>
                </div>
            </div>                <p>{productData.description !=="" ? `Product Description: ${productData.Description} `  : "" }</p>
                <p>{productData.strainDescription ? `Strain Description: ${productData.strainDescription}` : ""}</p>
                <button className="btn btn-primary">Buy Now</button>
            </div>
            
        </div>
        <BusinessReviewsComponent 
        type="product"
        id={productData._id}
        />
        </div>
    }
    </>
    );
}