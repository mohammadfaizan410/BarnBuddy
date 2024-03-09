import React from "react";
import AddProductBusiness from "../../Modals/Add-Product-Modal-Business";
import { useStoreState } from "easy-peasy";
import { useState, useEffect } from "react";
import { IoAddCircleOutline } from "react-icons/io5";
import ListedProducts from "./Business-Components/Listed-Products";
import { Spinner } from "react-bootstrap";


export default function BusinessDashboardProducts() {
    const business = useStoreState(state => state.business);
    const business_user = useStoreState(state => state.business_user);
    const [showAddModal, setShowAddModal] = useState(false);
    const [products, setProducts] = useState(null);

    useEffect(() => {
        if(business_user.business_id) {
            fetch(`http://localhost:3001/business/${business_user.business_id}/products`,
            {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'authorization-user_id': business_user.user_id,
                    'authorization-token': business_user.token,
                    'authorization-user_id': business_user.user_id,
                }}
            )
            .then(res => res.json())
            .then(data => {
                if(data.success)
                setProducts(data.products);
            else{
                setProducts([]);
            } 
            })
            .catch(err => console.log(err));
        }
    }, []);
    return (
        <div className="dashboard-margin-top dashboard-margin p-3 pb-4 border shadow-sm border-rounded ">
            <div className="d-flex flex-row justify-content-between">
                <h4 className=" border-bottom heading-primary">Listed Products</h4>
                <IoAddCircleOutline size={30} className="textPrimary cursor-pointer" onClick={() => setShowAddModal(true)} />
            </div>
           
                <div className="row mt-4 mb-4 border-bottom border-color">
                        <h6 className="textSecondary col-2">Product Name</h6>
                        <h6 className="textSecondary col-2">Product Description</h6>
                        <h6 className="textSecondary col-2">Product Price</h6>
                        <h6 className="textSecondary col-2">Product Category</h6>
                        <h6 className="textSecondary col-2">Actions</h6>
                </div>
                {products === null ? (
                <Spinner />
                ) : products.length > 0 ? (
                <ListedProducts products={products} />
                ) : (
                <h6>No products listed</h6>
                )}
            <AddProductBusiness 
            show={showAddModal}
            handleClose={() => setShowAddModal(false)}
            business_id={business._id}
            />
        </div>
    )
}