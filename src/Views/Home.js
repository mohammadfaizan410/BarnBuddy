import React, { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import BusinessCardRound from "../components/Business/Business-Card-Round";
import { Spinner } from "react-bootstrap";
import CategoryCard from "../components/Product/Category-Card"
import { FaBorderAll } from "react-icons/fa";
import homeData from "../context/homeData.json";
import ProductCard from "../components/Product/Product-Card";
import FeaturedBusinessCard from "../components/Business/Featured-Business-Card";
import ediblesImage from "../assets/CategoryImages/edibles.avif";
import pharmacuticalsImage from "../assets/CategoryImages/pharmaceuticals.avif";
import concentratesImage from "../assets/CategoryImages/concentrates.avif";
import psychedelicsImage from "../assets/CategoryImages/psychedelics.avif";
import shrooms from "../assets/CategoryImages/shrooms.avif";

export default function Home() {
    const [businessArray, setBusinessArray] = React.useState([]);
    const [featuredProducts, setFeaturedProducts] = React.useState([]);
    const images = 
    {"edibles" :   ediblesImage,
    "pharmaceuticals" : pharmacuticalsImage,
    "concentrates" : concentratesImage,
    "psychedelics" : psychedelicsImage,
    "shrooms" : shrooms};
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

  try {
      fetch("http://localhost:3001/products/featured")
          .then(res => res.json())
          .then(data => {
              setFeaturedProducts(data.products);
          })
          .catch(err => {
              console.log(err);
          });
  } catch (error) {
        console.error("Error in useEffect:", error);
    }
}, []);


  if(businessArray?.length === 0){
    return (
        <div className="d-flex justify-content-center align-items-center" style={{height: "100vh"}}>
            <Spinner animation="border" role="status">
            </Spinner>
        </div>
    )
  }
    return (
        <div  style={{minWidth: "100vw", margin: ""}}>
        <div className="home-section home-section-top">
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
    </div>

        <div className="home-section">
            <div className="home-section-header">
            <h3 className="textSecondary text-bold margin-2x-top heading-primary">Featured Businesses</h3>
            <p className="textPrimary text-bold margin-2x-top cursor-pointer">View All</p>
            </div>
            <div className="home-section-content" style={{overflow: "auto"}}>
            {
                businessArray?.map((business, index) => {
                    if(index > 10 && index < 15){
                        return (
                            <FeaturedBusinessCard key={index} businessDetails={business} type="Green Store" featured="true" />
                            )
                        }
                })
            }
            </div>
        </div>

        <div className="home-section">
            <div className="home-section-header">
            <h3 className="textSecondary text-bold margin-2x-top heading-primary">Top Pharmacies</h3>
            <p className="textPrimary text-bold margin-2x-top cursor-pointer">View All</p>
            </div>
            <div className="home-section-content" style={{overflow: "auto"}}>
            {
                businessArray?.map((business, index) => {
                    if(index > 20 && index < 25){
                        return (
                            <FeaturedBusinessCard key={index} businessDetails={business} type="Pharmacy" topRated= "true" />
                            )
                        }
                })
            }
            </div>
        </div>

        <div className="home-section">
            <div className="home-section-header">
            <h3 className="textSecondary heading-primary">Top Psychedelic Vendors</h3>
            <p className="textPrimary text-bold margin-2x-top cursor-pointer">View All</p>
            </div>
            <div className="home-section-content" style={{overflow: "auto"}}>
            {
                businessArray?.map((business, index) => {
                    if(index > 30 && index < 35){
                        return (
                            <FeaturedBusinessCard key={index} businessDetails={business} type="Psychedelics" topRated= "true"  />
                            )
                        }
                })
            }
            </div>
        </div>



        <div className="home-section">
            <div className="home-section-header">
            <h3 className="textSecondary heading-primary">All Stores</h3>
            <FaBorderAll size={30} className="textPrimary cursor-pointer ml-2" />
            </div>
            <div className="home-section-content" style={{overflow: "auto"}}>
            {
                businessArray?.map((business, index) => {
                    return (
                        <div key={index} className={`${index === 0 ? "mx-2" : "mx-4"} cursor-pointer`}>
                            <BusinessCardRound 
                            title={business.name}
                            avatar={business.logoUrl}
                            width="110px"
                            businessDetails={business}
                            />
                        </div>
                    )
                })
            }
            </div>

            </div>

        <div className="home-section">
        <div className="home-section-header">
            <h3 className="textSecondary heading-primary">Shop By Category</h3>
            <FaBorderAll size={30} className="textPrimary cursor-pointer ml-2" />
            </div>
            <div className="home-section-content" style={{overflow: "auto"}}>
            {
                homeData.categoryArray.map((category, index) => {
                    return (
                        <div key={index} cursor-pointer >
                            <CategoryCard
                            category={category.name}
                            image={images[category.name.toLowerCase()]}
                            />
                        </div>
                    )
                })
            }
            </div>
        </div>

        
    </div>
    );
};