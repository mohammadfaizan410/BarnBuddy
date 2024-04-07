import React from "react";
import BusinessDashboardProductCard from "./Business-dashboard-product-card";
import { useState } from "react";

export default function BusinessDashboardProducts({ products }) {
    const categories = ["All","Flower", "Edible", "Concentrate", "Preroll", "Cartridge", "Topical", "Accessories", "Other"];
    const [selectedCategory, setSelectedCategory] = useState("All");
    const [filteredProducts, setFilteredProducts] = useState(products);
    React.useEffect(() => {
        if (selectedCategory === "All") {
            setFilteredProducts(products);
        } else {
            setFilteredProducts(products.filter(product => product.productCategory === selectedCategory));
        }
    }, [selectedCategory, products]);
    return (
      <>
      <div className="dashboard-unit">
        <div className="dashboard-content-wrappers ">
            <h5 className="">Your Products</h5>
            <div className="dashboard-content-category-picker">
           {categories.map((category, index) => (
                <button key={index} id={selectedCategory === category ? "dashboard-content-category-picker-selected" : ""} onClick={() => setSelectedCategory(category)}
                 >{category}</button>
            ))
            }
            </div>
        </div>
        <div className="dashboard-layout-products dashboard-content-wrappers">
        <table className="table table-responsive table-striped">
            <tbody>
                {filteredProducts === null ? (
                    <tr>
                        <td colSpan="4"><h1>Loading...</h1></td>
                    </tr>
                ) : filteredProducts.length === 0 ? (
                    <tr>
                        <td colSpan="4"><h1>No Products</h1></td>
                    </tr>
                ) : (
                    filteredProducts?.map((product, index) => (
                        <BusinessDashboardProductCard key={index} product={product} />
                        ))
                        )}
            </tbody>
        </table>
        </div>
                    </div>
</>
    )
}
