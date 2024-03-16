import React from "react";
import { useParams } from "react-router-dom";
import "../styles/business-styles.css";
import { MdFavorite } from "react-icons/md";
import { MdFavoriteBorder } from "react-icons/md";
import BusinessProductsComponent from "../components/Business/Business-Products-Component";

export default function BusinessFrontpage() {
    const [businessData, setBusinessData] = React.useState({});
    const [error, setError] = React.useState(null);
    const {id} = useParams();
    const menuItems = ["Products", "Reviews", "About", "Deals"];
    const [selectedMenuItem, setSelectedMenuItem] = React.useState("Products");
   
React.useEffect(() => {
    if (!isValidObjectId(id)) {
        setError("Invalid business id");
        return;
    }else{
        try {
            fetch(`http://localhost:3001/business/getData`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                business_id: id
            })
        })
        .then(res => res.json())
        .then(data => {
            setBusinessData(data.business);
        })
        .catch(err => {
            console.log(err);
            setError(err);
        });
    } catch (error) {
        console.error("Error fetching data:", error);
        setError(error);
    }
    }
}, [id]);

function isValidObjectId(id) {
    const objectIdRegex = /^[0-9a-fA-F]{24}$/;
    return objectIdRegex.test(id);
}

if (error) {
    return <div>Error: {error}</div>;
}
    return (
        <>
        <div className="business-frontpage-section" style={{marginTop: "20px", paddingTop:"0"}}>
            <img src={businessData.coverPhotoUrl} alt="business logo" className="business-frontpage-cover" />
            <div className="business-frontpage-topinfo">
                <h3>{businessData.name}</h3>
                <div className="d-flex flex-column">
                <MdFavoriteBorder size={30} fill="#00ADB5" />
                <span>1223</span>
                </div>
            </div>
            <div className="business-frontpage-topinfo-tags">
                    {
                        businessData.tags?.map((tag, index) => {
                            return (
                                <span key={index}>{tag}</span>
                            )
                        })
                    }
                </div>

            <div className="business-frontpage-menu">
                {
                    menuItems.map((item, index) => {
                        return (
                            <div key={index} className={selectedMenuItem === item ? "business-frontpage-menu-item-selected" : "business-frontpage-menu-item"} onClick={() => setSelectedMenuItem(item)}>
                                <p>{item}</p>
                            </div>
                        )
                    })
                }
                </div>

            <BusinessProductsComponent businessData={businessData} />
        </div>
        </>
    );
};