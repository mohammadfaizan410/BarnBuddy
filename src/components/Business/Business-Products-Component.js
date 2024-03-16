import React from "react";
import BusinessProductCard from "./Business-Product-Card";
import { Spinner } from "react-bootstrap";

export default function BusinessProductsComponent(props) {
    const categories = ["All Products","Flower","Edible","Concentrate","PreRoll","Topicals","Accessories"]; 
    const [Products, setProducts] = React.useState(null);
    const [error, setError] = React.useState(null);
    const [selectedCategory, setSelectedCategory] = React.useState("All Products");
    const businessData = props.businessData;
    
    React.useEffect(() => {
        if (businessData && businessData._id) {
            const fetchData = async () => {
                try {
                    let url = "";
                    let body = {
                        business_id: businessData._id
                    };
    
                    if (selectedCategory === "All Products") {
                        url = "http://localhost:3001/business/getAllProducts";
                    } else {
                        url = "http://localhost:3001/business/getProductsByCategory";
                        body.category = selectedCategory;
                    }
    
                    const response = await fetch(url, {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(body)
                    });
    
                    if (!response.ok) {
                        throw new Error("Failed to fetch data");
                    }
    
                    const data = await response.json();
                    setProducts(data.products);
                } catch (error) {
                    console.error("Error fetching data:", error);
                    setError(error);
                }
            };
    
            fetchData();
        }
    }, [selectedCategory, businessData]);
    return (
        <div className="business-products-component">
            <div className="business-products-component-left">
                <h3>Categories</h3>
                <div className="business-products-component-category-container border">
                    {
                        categories.map((category, index) => {
                            return (
                                <div key={index} className="business-products-component-category">
                                    <span>{category}</span>
                                    <input 
                                    type="radio" 
                                    value={category} 
                                    name="categoryCheckBox" 
                                    checked={selectedCategory === category}
                                    onChange={(e) => {
                                        setSelectedCategory(e.target.value)
                                        console.log(e.target.value)}
                                    }
                                    />
                                </div>
                            )
                        })
                    }
                </div>
            </div>
            <div className="business-products-component-right">
                {Products !== null ? (
                    Products.length > 0 ? (
                        Products.map((product, index) => (
                            <BusinessProductCard key={index} product={product} />
                        ))
                    ) : (
                        <div>No products found</div>
                    )
                ) : (
                    <>
                    <Spinner animation="border" role="status">
                        <span className="sr-only">Loading...</span>
                    </Spinner>
                    </>
                )}
            </div>
        </div>
    )
}