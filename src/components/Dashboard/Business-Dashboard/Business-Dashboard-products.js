import React from "react";
import AddProductBusiness from "../../Modals/Add-Product-Modal";
import { useStoreState } from "easy-peasy";
import { useState, useEffect } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import ListedProducts from "./Business-Components/Listed-Products";


export default function BusinessDashboardProducts() {
    const business = useStoreState(state => state.business);
    const [show, setShow] = useState(false);
    const [products, setProducts] = useState([]);

    // router.get("/business/products/:business_id", async (req, res) => {

    useEffect(() => {
        if(business._id) {
            fetch(`http://localhost:3001/business/products/${business._id}`)
            .then(res => res.json())
            .then(data => {
                console.log(data);
                setProducts(data.products); 
            })
            .catch(err => console.log(err));
        }
    }, [business._id]);
    return (
        <div className="dashboard-margin-top dashboard-margin p-3 pb-4 border shadow-sm border-rounded ">
            <div className="d-flex flex-row justify-content-between">
                <h4 className=" border-bottom heading-primary">Listed Products</h4>
                <IoAddCircleOutline size={30} className="textPrimary cursor-pointer" onClick={() => setShow(true)} />
            </div>
           
                <div className="row mt-4 mb-4 border-bottom border-color">
                        <h6 className="textSecondary col-2">Product Name</h6>
                        <h6 className="textSecondary col-2">Product Description</h6>
                        <h6 className="textSecondary col-2">Product Price</h6>
                        <h6 className="textSecondary col-2">Product Category</h6>
                        <h6 className="textSecondary col-2">Actions</h6>
                </div>
                <ListedProducts products={products} />
            <AddProductBusiness 
            show={show}
            handleClose={() => setShow(false)}
            business_id={business._id}
            />
        </div>
    )
}