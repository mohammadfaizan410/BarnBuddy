

import React from "react";
import { Modal, Button } from "react-bootstrap";
import { useState } from "react";
import { useStoreState } from "easy-peasy";


export default function UpdateProductBusiness(props) {
    const {show, handleClose, product } = props;
    const business_user = useStoreState(state => state.business_user);
    console.log(product)
    const [formData, setFormData] = useState({
        productName: product.name,
        productDescription: product.description,
        cartUnit: product.cartUnit,
        productPrice: product.price,
        productCategory: product.productCategory,
        productImage: "",
        productImageUrl: product.imageUrl,
        strainName: product.strainName,
        strainDesc: product.strainDescription,
    });

    React.useEffect(() => {
        setFormData({
          productName: product.name,
          productDescription: product.description,
          cartUnit: product.cartUnit,
          productPrice: product.price,
          productCategory: product.productCategory,
          productImage: "",
          productImageUrl: product.imageUrl,
          strainName: product.strainName,
          strainDesc: product.strainDescription,
        });
      }, [product]);

    // const handleFormSubmit = async () => {
    //     const formData = new FormData();
    //     formData.append("productName", formData.productName);
    //     formData.append("productDescription", formData.productDescription);
    //     formData.append("cartUnit", formData.cartUnit);
    //     formData.append("productPrice", formData.productPrice);
    //     formData.append("productCategory", formData.productCategory);
    //     formData.append("productImage", formData.productImage);
    //     formData.append("strainName", formData.strainName);
    //     formData.append("strainDesc", formData.strainDesc);

    //     fetch(`http://localhost:3001/business/${business_id}/products`, {
    //         method: "POST",
    //         headers: {
    //             "authorization": business_user.token,
    //         },
    //         body: formData
    //     })
    //     .then(res => res.json())
    //     .then(data => {
    //         if(data.success) {
    //             console.log(data);
    //             handleClose();
    //         }
    //     })
    //     .catch(err => console.log(err));
    // }


    return (<>
        <Modal
            show={show}
            size="lg"
            centered
            scrollable
        >
            <Modal.Header>
                <Modal.Title>
                    Update Product
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form>
                    <div className="form-group margin-2x-bottom">
                        <label htmlFor="productName" className="text-bold margin-1x-bottom">Product Name</label>
                        <input type="text" className="form-control" id="productName"
                            onChange={(e) => setFormData({...formData, productName: e.target.value})}
                            value={formData.productName}
                        />
                    </div>
                    <div className="form-group margin-2x-bottom">
                        <label htmlFor="productDescription" className="text-bold margin-1x-bottom">Product Description</label>
                        <textarea rows={10} className="form-control"
                            onChange={(e) => setFormData({...formData, productDescription: e.target.value})}
                            value={formData.productDescription}
                        />
                    </div>
                    <div className="form-group margin-2x-bottom">
                        <label htmlFor="brandName" className="text-bold margin-1x-bottom">Brand Name (if any)</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setFormData({...formData, productDescription: e.target.value})}
                            value={formData.brandName}
                        />
                    </div>
                    <div className="form-group margin-2x-bottom">
                        <label htmlFor="productPrice" className="text-bold margin-1x-bottom">Product Price</label>
                        <input type="text" className="form-control"
                            onChange={(e) => setFormData({...formData, productPrice: e.target.value})}
                            value={formData.productPrice}
                        />
                    </div>
                    <div className="form-group margin-2x-bottom">
                        <label htmlFor="cartUnit" className="text-bold margin-1x-bottom">Cart Unit</label>
                        <select name="  " className="form-select"
                            onChange={(e) => setFormData({...formData, cartUnit: e.target.value})}
                            value={formData.cartUnit}
                        >
                            <option value="1g">1g</option>
                            <option value="each">each</option>
                            <option value="Other">Other</option>
                        </select>
                    </div>
                    <div className="form-group margin-2x-bottom">
                        <label htmlFor="productCategory" className="text-bold margin-1x-bottom">Product Category</label>
                        <select name="categories" className="form-select"
                            onChange={(e) => setFormData({...formData, productCategory: e.target.value})}
                            value={formData.productCategory}
                        >
                            <option value="Flower">Flower</option>
                            <option value="Edible">Edible</option>
                            <option value="Concentrate">Concentrate</option>
                            <option value="Topical">Topical</option>
                            <option value="Cartridge">Cartridge</option>
                            <option value="Accessory">Accessory</option>
                            <option value="Other">Other</option>
                        </select>                    
                    </div>
                    <div className="form-group margin-2x-bottom">
                        <label htmlFor="productImage" className="text-bold margin-1x-bottom">Product Image</label>
                       <div> <img src={formData.productImageUrl} alt="product image" className="img-fluid border" width={200} height={200} /></div>
                        <input type="file" className="form-control" id="productImage" 
                            onChange={(e) => setFormData({...formData, productImage: e.target.value})}
                            value={formData.productImage}
                        />
                    </div>
                    <div className="form-group margin-2x-bottom">
                        <label htmlFor="strainName" className="text-bold margin-1x-bottom">Strain Name (if any)</label>
                        <input type="text" className="form-control" 
                            onChange={(e) => setFormData({...formData, strainName: e.target.value})}
                            value={formData.strainName}
                        />
                    </div>
                    <div className="form-group margin-2x-bottom">
                        <label htmlFor="strainDesc" className="text-bold margin-1x-bottom">Strain Description</label>
                        <input type="text" className="form-control" 
                            onChange={(e) => setFormData({...formData, strainDesc: e.target.value})}
                            value={formData.strainDesc}
                        />
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
                            </>
    )
}