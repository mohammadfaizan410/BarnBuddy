import React, { useEffect } from "react";
import Carousel from 'react-bootstrap/Carousel';
import BusinessCardRound from "../components/Business/Business-Card-Round";
import BusinessAuth from "../components/Dashboard/Business-Dashboard/Business-Components/Business-Auth";
import { Spinner } from "react-bootstrap";

export default function Home() {
    const [businessArray, setBusinessArray] = React.useState([]);
    const [featuredProducts, setFeaturedProducts] = React.useState([]);



    useEffect(() => { 
        setBusinessArray([{
            "imgSrcset": "https://leafly-public.imgix.net/dispensary/photos/gallery381191/D3DM7qOSIWlhWMo40Pkg_20230529_174040_0000.png?auto=compress%2Cformat&w=48&dpr=1 1x, https://leafly-public.imgix.net/dispensary/photos/gallery381191/D3DM7qOSIWlhWMo40Pkg_20230529_174040_0000.png?auto=compress%2Cformat&w=48&dpr=2 2x",
            "starRating": "5.0",
            "title": "Red Eye - Ontario -  PICK UP AVAILABLE!!",
            "href": "https://www.leafly.com/dispensary-info/red-eye-ontario-",
            "primaryLocation": " 833 SW 30th St, Ontario, OR",
            "phoneNumber": "5412165104",
            "about": "",
            "backgroundImg": "https://leafly-public.imgix.net/dispensary/photos/gallery381191/vocZnkRQtmAAuhFUkwP3_IMG_4007-20(1).jpg?auto=compress%2Cformat&fill=blur&fit=fill&h=288&w=736&dpr=1"
          },
          {
            "imgSrcset": "https://leafly-public.imgix.net/dispensary/photos/gallery381992/tKxpc4wERaeHYh4BNwiu_High-Profile_Leafly_Logo_340x340.jpg?auto=compress%2Cformat&w=48&dpr=1 1x, https://leafly-public.imgix.net/dispensary/photos/gallery381992/tKxpc4wERaeHYh4BNwiu_High-Profile_Leafly_Logo_340x340.jpg?auto=compress%2Cformat&w=48&dpr=2 2x",
            "starRating": "4.5",
            "title": "High Profile - Ironwood",
            "href": "https://www.leafly.com/dispensary-info/high-profile-ironwood",
            "primaryLocation": "100W Cloverland Dr, Ironwood, MI",
            "phoneNumber": "906-767-0994",
            "about": "High Profile Cannabis Shop is Michigan’s premier cannabis dispensary offering premium marijuana products at everyday low prices. Our Ironwood dispensary, located in the Upper Peninsula, is 1 mile east of the Wisconsin border, 1 mile south of Mount Zion Park, half mile north of Longyear Park, and 1.5 miles west of Super One Foods. High Profile is conveniently located off Route 2 and is easily accessible from N. Lowell Street. Check out our wide selection of flower, carts, edibles, concentrates, and more or browse our online menu. High Profile Ironwood is coming soon and will be seven days a week.",
            "backgroundImg": "https://leafly-public.imgix.net/dispensary/photos/gallery381992/ebKIHWtCSjKWEbC9gXF5_High-Profile_Leafly_Cover-Photo_1920x1080.jpg?auto=compress%2Cformat&fill=blur&fit=fill&h=288&w=736&dpr=1"
          },
          {
            "imgSrcset": "https://leafly-public.imgix.net/dispensary/photos/gallery83119/niWclX77RauIntG58fn9_Screen-20Shot-202022-11-09-20at-202.50.04-20PM.png?auto=compress%2Cformat&w=48&dpr=1 1x, https://leafly-public.imgix.net/dispensary/photos/gallery83119/niWclX77RauIntG58fn9_Screen-20Shot-202022-11-09-20at-202.50.04-20PM.png?auto=compress%2Cformat&w=48&dpr=2 2x",
            "starRating": "4.9",
            "title": "Miller's Marijuana",
            "href": "https://www.leafly.com/dispensary-info/the-3-ms-of-grays-harbor-llc",
            "primaryLocation": "5675 US Hwy 12, Elma, WA",
            "phoneNumber": "3608614300",
            "about": "",
            "backgroundImg": "https://leafly-public.imgix.net/dispensary/photos/gallery83119/k21UgXP2Ql6n6SoZclw6_Screen-20Shot-202022-11-09-20at-202.44.33-20PM.png?auto=compress%2Cformat&fill=blur&fit=fill&h=288&w=736&dpr=1"
          },
          {
            "imgSrcset": "https://leafly-public.imgix.net/dispensary/photos/gallery362986/EqccGP7wRwS2rm5eyqxI_HL_leafly_logo.jpg?auto=compress%2Cformat&w=48&dpr=1 1x, https://leafly-public.imgix.net/dispensary/photos/gallery362986/EqccGP7wRwS2rm5eyqxI_HL_leafly_logo.jpg?auto=compress%2Cformat&w=48&dpr=2 2x",
            "starRating": "4.5",
            "title": "Higher Love - Ironwood (REC)",
            "href": "https://www.leafly.com/dispensary-info/higher-love---ironwood",
            "primaryLocation": "824 E Cloverland Dr, Ironwood, MI",
            "phoneNumber": "9069327288",
            "about": "Here at Higher Love we provide you with exceptional cannabis, grown organically. We’re on a mission—a mission to empower others on their wellness journey. Whether you’re seeking relief from chronic pain or are looking for a natural means to relax your mind & body, we are at your service. Regardless of your past experience (or lack thereof) with cannabis, we have the tools to help you make the right decision about which product is best suited to your needs.  As a reminder, this menu is a sample of our full product list. To view our FULL MENU and place an order, visit out website and select your location to shop now!",
            "backgroundImg": "https://leafly-public.imgix.net/dispensary/photos/gallery362986/Qex0grmzRR2GqHAWMgI3_HL_leafly_cover_0002_IRW.jpg?auto=compress%2Cformat&fill=blur&fit=fill&h=288&w=736&dpr=1"
        },
          {
            "imgSrcset": "https://images.leafly.com/menu/wOWqBPMnSOGFTzzgmAsm_leafly-logo-.png?auto=compress%2Cformat&w=48&dpr=1 1x, https://images.leafly.com/menu/wOWqBPMnSOGFTzzgmAsm_leafly-logo-.png?auto=compress%2Cformat&w=48&dpr=2 2x",
            "starRating": "4.0",
            "title": "Gypsy Greens - Chehalis",
            "href": "https://www.leafly.com/dispensary-info/gypsy-greens-chehalis",
            "primaryLocation": "1570 N National Ave, Chehalis, WA",
            "phoneNumber": "(360) 996-4030",
            "about": "Our entry into the cannabis industry developed organically out of our community’s need for safe access to quality cannabis. The cannabis industry is ever evolving and has seen immense change over the last few years. Through its physical and mental renewal, it is essential to preserve the spiritual role that cannabis has played in our society.  We strive to bring the Chehalis community and customers peace, love and cannabis. We carry Brands by;  Freddys Gold, Aurum Farms, Phat panda, Willies Reserve, Noble Farms, Svin Gardens, Kush Brothers, Kush Family,  Exotiks, High Tide, Artizen, Skord & much more.",
            "backgroundImg": "https://images.leafly.com/menu/CfQxyWMvSG2Yk4xd1sZV_chehalis_7.JPG?auto=compress%2Cformat&fill=blur&fit=fill&h=288&w=736&dpr=1"
        },
          {
            "imgSrcset": "https://leafly-public.imgix.net/dispensary/photos/gallery369141/2EHpP1R1RtSiVC4llwY4_green-20dots-20logo.png?auto=compress%2Cformat&w=48&dpr=1 1x, https://leafly-public.imgix.net/dispensary/photos/gallery369141/2EHpP1R1RtSiVC4llwY4_green-20dots-20logo.png?auto=compress%2Cformat&w=48&dpr=2 2x",
            "starRating": "5.0",
            "title": "CannaCare Medical Dispensary",
            "href": "https://www.leafly.com/dispensary-info/cannacare-medical-dispensary",
            "primaryLocation": "3215 S Carolyn Ave , Sioux Falls, SD",
            "phoneNumber": "605-271-4803",
            "about": "Cannacare Medical Dispensary is located in Sioux Falls, SD and is family owned and operated. We are open from 8am-10pm seven days a week! Our main goal is to provide patients with the best possible products available on the market.",
            "backgroundImg": "https://leafly-public.imgix.net/dispensary/photos/gallery369141/r0UIQUSRORemw1Wzd6bQ_slim-20margins-20dots-20logo.jpg?auto=compress%2Cformat&fill=blur&fit=fill&h=288&w=736&dpr=1"
          },
          {
            "imgSrcset": "https://leafly-public.imgix.net/dispensary/photos/gallery370011/wBBlExJFRCKA7W3jtTiw_logo-204.jpg?auto=compress%2Cformat&w=48&dpr=1 1x, https://leafly-public.imgix.net/dispensary/photos/gallery370011/wBBlExJFRCKA7W3jtTiw_logo-204.jpg?auto=compress%2Cformat&w=48&dpr=2 2x",
            "starRating": "4.9",
            "title": "The Tea Tree",
            "href": "https://www.leafly.com/dispensary-info/the-tea-tree-",
            "primaryLocation": "115 Lipton St suite c, Tea, SD",
            "phoneNumber": "6052130194",
            "about": "The Tea Tree is a family owned Medical Marjiuana Dispensary located in Tea, SD. We have a variety of different strains of flower, vape cartridges, edibles, and concentrates as they are available!",
            "backgroundImg": "https://leafly-public.imgix.net/dispensary/photos/gallery370011/i7tvoIjiRQGsgIBjxQR5_logo-202.jpg?auto=compress%2Cformat&fill=blur&fit=fill&h=288&w=736&dpr=1"
        }])
      
        setFeaturedProducts([
          {
            "title" : "white widow",
            "image" : "https://images.leafly.com/menu/8Jn4vL7aQ2u6WjrLflxD_white-widow.jpg",
            "starRating" : "4.5",
            "price" : "20",
            "category" : "flower",
            "type" : "Indica",
            "description" : "White Widow",
            "owner" : "Red Eye - Ontario -  PICK UP AVAILABLE!!",
            "href" : "https://www.leafly.com/dispensary-info/red-eye-ontario-"
        },
          {
            "title" : "white widow",
            "image" : "https://images.leafly.com/menu/8Jn4vL7aQ2u6WjrLflxD_white-widow.jpg",
            "starRating" : "4.5",
            "price" : "20",
            "category" : "flower",
            "type" : "Indica",
            "description" : "White Widow",
            "owner" : "Red Eye - Ontario -  PICK UP AVAILABLE!!",
            "href" : "https://www.leafly.com/dispensary-info/red-eye-ontario-"
        },
          {
            "title" : "white widow",
            "image" : "https://images.leafly.com/menu/8Jn4vL7aQ2u6WjrLflxD_white-widow.jpg",
            "starRating" : "4.5",
            "price" : "20",
            "category" : "flower",
            "type" : "Indica",
            "description" : "White Widow",
            "owner" : "Red Eye - Ontario -  PICK UP AVAILABLE!!",
            "href" : "https://www.leafly.com/dispensary-info/red-eye-ontario-"
        },
          {
            "title" : "white widow",
            "image" : "https://images.leafly.com/menu/8Jn4vL7aQ2u6WjrLflxD_white-widow.jpg",
            "starRating" : "4.5",
            "price" : "20",
            "category" : "flower",
            "type" : "Indica",
            "description" : "White Widow",
            "owner" : "Red Eye - Ontario -  PICK UP AVAILABLE!!",
            "href" : "https://www.leafly.com/dispensary-info/red-eye-ontario-"
        },
          {
            "title" : "white widow",
            "image" : "https://images.leafly.com/menu/8Jn4vL7aQ2u6WjrLflxD_white-widow.jpg",
            "starRating" : "4.5",
            "price" : "20",
            "category" : "flower",
            "type" : "Indica",
            "description" : "White Widow",
            "owner" : "Red Eye - Ontario -  PICK UP AVAILABLE!!",
            "href" : "https://www.leafly.com/dispensary-info/red-eye-ontario-"
        },
      ]);
      
      
      },[]);
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
                            starRating={business.starRating}
                            title={business.title.split(" - ")[0].slice(0, 12)}
                            avatar={business.imgSrcset.split(" ")[0]}
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