import React, { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import BusinessCardRound from "../components/Business/Business-Card-Round";
import BusinessAuth from "../components/Dashboard/Business-Dashboard/Business-Components/Business-Auth";
import { Spinner } from "react-bootstrap";

export default function Home() {
    const [businessArray, setBusinessArray] = React.useState([]);
    const [featuredProducts, setFeaturedProducts] = React.useState([]);

useEffect(() => { 
  try {
      fetch("http://localhost:3001/business/all")
          .then(res => res.json())
          .then(data => {
              setBusinessArray(data.businesses);
          })
          .catch(err => {
              console.log(err);
          });
  } catch (error) {
      console.error("Error in useEffect:", error);
  }
}, []);


  if(businessArray.length === 0){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <Spinner animation="border" role="status">
            </Spinner>
        </div>
    )
  }
    return (
        <div className="container-margins">
       <Carousel className="rounded" style={{margin: "0px", padding : "0px"}}>
      <Carousel.Item>
      <img src="https://images.leafly.com/menu/gXfSWzrhQBmaiTVyzUgU_C311EB87-D7C9-44DD-A00B-49B454A7969D%20(1).JPG" className="carousel-image-banner" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img src="https://leafly-public.imgix.net/dispensary/photos/gallery380021/BwAVdx2LRL6S1OpbrPCG_Milwaukie-20McLoughlin-20(4).png" className="carousel-image-banner" alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
      <img src="https://images.leafly.com/menu/Uu332l7aQ2u6WjrLflxD_revised-leafly-banner.jpg" className="carousel-image-banner" alt="Second slide" />
      </Carousel.Item>
    </Carousel>

        <div className="d-flex flex-column mt-4">
            <h3 className="textSecondary text-bold margin-2x-top heading-primary">Top Rated Stores</h3>
            <div className="d-flex flex-row" style={{overflow: "auto"}}>
            {
                businessArray?.map((business, index) => {
                    return (
                        <div key={index} className={`${index === businessArray.length - 1 ? "margin-2x-top" : "margin-5x-right margin-2x-top"}`}>
                            <BusinessCardRound 
                            title={business.name}
                            avatar={business.logoUrl}
                            width="110px"
                            />
                        </div>
                    )
                })
            }
            </div>
        </div>
        <div className="d-flex flex-column mt-4">
            <h3 className="textSecondary text-bold margin-2x-top heading-primary">Top Rated Stores</h3>
            <div className="d-flex flex-row" style={{overflow: "auto"}}>
            {/* {
                featuredProducts.map((product, index) => {
                    Image = product.imgSrcset.split(" ")[0];
                    title = product.title;
                    category = product.type;
                    description = product.description;
                    price = product.price;
                    rating = product.starRating;
                })
            } */}
            </div>
        </div>
    </div>
    );
};