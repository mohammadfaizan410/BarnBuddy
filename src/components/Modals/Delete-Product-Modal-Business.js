import React from "react";
import { useState } from "react";
import { useStoreState } from "easy-peasy";
import Modal from "react-bootstrap/Modal";


export default function DeleteProductBusiness(props) {
    const {show, handleClose, product } = props;
    const business_user = useStoreState(state => state.business_user);
    return(
        <Modal show={show}
            centered

        >
            <Modal.Header closeButton>
                <Modal.Title>Delete Product</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <h6>Are you sure you want to delete this product?</h6>
            </Modal.Body>
            <Modal.Footer>
                <button className="btn btn-secondary" onClick={handleClose}>Close</button>
                <button className="btn btn-danger" onClick={() => {
                    fetch(`http://localhost:3001/business/product/delete`, {
                        method: "DELETE",
                        headers: {
                            "authorization-user_id" : business_user.user_id,
                            "authorization-token" : business_user.token,
                        },
                        body : JSON.stringify({productId: product._id, businessId: business_user.business_id})
                    })
                    .then(res => res.json())
                    .then(data => {
                        if(data.success) {
                            console.log(data);
                            handleClose();
                        }
                    })
                    .catch(err => console.log(err));
                }}>Delete</button>
            </Modal.Footer>
        </Modal>

    )
}