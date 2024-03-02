import React from "react";
import { Carousel } from "bootstrap";



export default function MainPageCarousel(props) {
    const carouselItems = props.carouselItems;
    return (
    <Carousel style={{margin: "0px", padding : "0px"}}>
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

    )
}