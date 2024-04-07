import React from "react";
import BusinessDashbaordNavbar from "./Business-Components/Business-Dashboard-Navbar";
import { useStoreState } from "easy-peasy";
import { useNavigate } from "react-router-dom";
import BusinessDashboardProductCard from "./Business-Components/Business-dashboard-product-card";
import BusinessDashboardProducts from "./Business-Components/Business-Dashboard-Products";
export default function BusinessDashboardLayout() {
    const business_user = useStoreState(state => state.business_user);
    const [products, setProducts] = React.useState(null);
    const navigate = useNavigate();
    React.useEffect(() => {
        if (!business_user) {
            navigate("/");
        }else{
           try{
            fetch("http://localhost:3001/business/getAllProducts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
           },
              body: JSON.stringify({
                business_id: business_user.business_id
              })
            })
            .then(res => res.json())
            .then(data => {
                if(data.success){
                    setProducts(data.products);
                }
                else{
                    console.log(data.message);
                }
            })
        }
        catch(err){
            console.log(err);
        }
    }
    }, [business_user]);
    return (
       <div className="dashboard-layout-container">
       <BusinessDashbaordNavbar />
       <div className="dashboard-layout-content">
                <BusinessDashboardProducts
                    products={products}
                />
            </div>
       </div>
    )
};