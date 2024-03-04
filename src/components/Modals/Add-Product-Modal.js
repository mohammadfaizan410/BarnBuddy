

import React from "react";
import { Modal, Button } from "react-bootstrap";


export default function AddProductBusiness(props) {
    const {show, handleClose, business_id } = props;
    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">
                    Add Product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group">
                        <label htmlFor="productName">Product Name</label>
                        <input type="text" className="form-control" id="productName" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productDescription">Product Description</label>
                        <input type="text" className="form-control" id="productDescription" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productPrice">Product Price</label>
                        <input type="text" className="form-control" id="productPrice" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productCategory">Product Category</label>
                        <input type="text" className="form-control" id="productCategory" />
                    </div>
                    <div className="form-group">
                        <label htmlFor="productImage">Product Image</label>
                        <input type="file" className="form-control" id="productImage" />
                    </div>
                </form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary"
                    onClick={handleClose}
                >Close</Button>
                <Button variant="primary">Save</Button>
            </Modal.Footer>
        </Modal>
    )
}