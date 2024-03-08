import React from "react";
import BusinessDashboardProductCard from "./Business-dashboard-product-card";

export default function ListedProducts(props) {
    const business_id = props.business_id;
    return (
        <div className="w-100">
            {
                props.products.map((product) => {
                    return (
                        <BusinessDashboardProductCard 
                            product = 
                                {{
                                    productImage: product.imageUrl,
                                    productName: product.name,
                                    productDescription: product.description,
                                    productPrice: product.price,
                                    productCategory: product.productCategory
                                }}
                        />
                    )
                })
            }
        </div>
    )
}