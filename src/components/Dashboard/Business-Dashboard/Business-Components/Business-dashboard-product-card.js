import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import UpdateProductBusiness from "../../../Modals/Update-Product-Modal-Business";
import { useState } from "react";


export default function BusinessDashboardProductCard(props) {
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    return (
        <div className="row mb-3 border-bottom">
            <UpdateProductBusiness 
                show={showUpdateModal}
                handleClose={() => setShowUpdateModal(false)}
                product={props.product}
            />
                    <h6 className="textSecondary col-2 text-bold">{props.product.name}</h6>
                    <h6 className="textSecondary col-2 text-bold text-overflow">{props.product.description}</h6>
                    <h6 className="textSecondary col-2 text-bold">{props.product.price}</h6>
                    <h6 className="textSecondary col-2 text-bold">{props.product.productCategory}</h6>
                    <div className="d-flex col-4">
                        <CiEdit size={20} className="textPrimary cursor-pointer mx-1"
                            onClick={() => setShowUpdateModal(true)}
                        />
                        <CgNotes size={20} className="textPrimary cursor-pointer mx-2" />
                        <MdDelete size={20} className="text-danger cursor-pointer mx-1" />
                    </div>
        </div>
    )
}