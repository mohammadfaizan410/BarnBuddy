import React from "react";
import BusinessDashboardProductCard from "./Business-dashboard-product-card";

export default function ListedProducts(props) {
    const business_id = props.business_id;
    const [products, setProducts] = React.useState([]);
    return (
        <div className="w-100">
                <BusinessDashboardProductCard 
                    product = 
                        {{
                            productImage: "https://www.ikea.com/images/eket-storage-combination-with-legs-white-90333907__0637133_pe698650_s5.jpg",
                            productName: "Product Name",
                            productDescription: "Product Description sadasdnsandasdnmasmdmasmdsamdmamnsdmasdasdnasdbbasddddddddddddddddddddnm",
                            productPrice: "Product Price",
                            productCategory: "Product Category"
                        }}
                    
                />
                <BusinessDashboardProductCard 
                    product = 
                        {{
                            productImage: "https://www.ikea.com/images/eket-storage-combination-with-legs-white-90333907__0637133_pe698650_s5.jpg",
                            productName: "Product Name",
                            productDescription: "Product Description",
                            productPrice: "Product Price",
                            productCategory: "Product Category"
                        }}
                    
                />
                <BusinessDashboardProductCard 
                    product = 
                        {{
                            productImage: "https://www.ikea.com/images/eket-storage-combination-with-legs-white-90333907__0637133_pe698650_s5.jpg",
                            productName: "Product Name",
                            productDescription: "Product Description",
                            productPrice: "Product Price",
                            productCategory: "Product Category"
                        }}
                    
                />
                <BusinessDashboardProductCard 
                    product = 
                        {{
                            productImage: "https://www.ikea.com/images/eket-storage-combination-with-legs-white-90333907__0637133_pe698650_s5.jpg",
                            productName: "Product Name",
                            productDescription: "Product Description",
                            productPrice: "Product Price",
                            productCategory: "Product Category"
                        }}
                    
                />
                <BusinessDashboardProductCard 
                    product = 
                        {{
                            productImage: "https://www.ikea.com/images/eket-storage-combination-with-legs-white-90333907__0637133_pe698650_s5.jpg",
                            productName: "Product Name",
                            productDescription: "Product Description",
                            productPrice: "Product Price",
                            productCategory: "Product Category"
                        }}
                    
                />
        </div>
    )
}