import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CgNotes } from "react-icons/cg";


export default function BusinessDashboardProductCard(props) {
    return (
        <div className="row mb-3 border-bottom">
                    <h6 className="textSecondary col-2 text-bold">{props.product.productName}</h6>
                    <h6 className="textSecondary col-2 text-bold text-overflow">{props.product.productDescription}</h6>
                    <h6 className="textSecondary col-2 text-bold">{props.product.productPrice}</h6>
                    <h6 className="textSecondary col-2 text-bold">{props.product.productCategory}</h6>
                    <div className="d-flex col-4">
                        <CiEdit size={20} className="textPrimary cursor-pointer mx-1" />
                        <CgNotes size={20} className="textPrimary cursor-pointer mx-2" />
                        <MdDelete size={20} className="text-danger cursor-pointer mx-1" />
                    </div>
        </div>
    )
}