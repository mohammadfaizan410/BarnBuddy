import React from "react";
import { CiEdit } from "react-icons/ci";
import { MdDelete } from "react-icons/md";
import { CgNotes } from "react-icons/cg";
import UpdateProductBusiness from "../../../Modals/Update-Product-Modal-Business";
import { useState } from "react";


export default function BusinessDashboardProductCard(props) {
    const [showUpdateModal, setShowUpdateModal] = useState(false);

    return (
<>
        <UpdateProductBusiness 
                show={showUpdateModal}
                handleClose={() => setShowUpdateModal(false)}
                product={props.product}
                />
                    <tr>
                            <td className="business-product-name">{props.product.name}</td>
                            <td>{props.product.price}</td>
                            <td>{props.product.productCategory}</td>
                            <td className="text-right">
                                <CiEdit size={20} className="textPrimary cursor-pointer mx-1"
                                    onClick={() => setShowUpdateModal(true)}
                                />
                                <CgNotes size={20} className="textPrimary cursor-pointer mx-2" />
                                <MdDelete size={20} className="text-danger cursor-pointer mx-1" />
                            </td>
                    </tr>
                            </>
    )
}