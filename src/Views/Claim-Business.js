import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import SelectBusinessModal from "../components/Modals/Select-Business-Modal";
import BusinessCardRound from "../components/Business/Business-Card-Round";
export default function ClaimBusiness() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedBusiness, setSelectedBusiness] = useState({
        title: "Business Name",
        avatar: "https://via.placeholder.com/150"
    });
    return(
        <form>
            <h3>Claim A business</h3>
            <p>After you have selected a business and added all the necessary details the owner of the website will be notified. Once approved you would be emailed a business account along with its details.</p>
            {selectedBusiness ? 
            <>
            <BusinessCardRound 
            avatar = {selectedBusiness.avatar}
            title = {selectedBusiness.title}
            />
             <div className="btn btn-primary" onClick={ () => {
               setShow(true);
            }
            } >Change Business</div>
            </>
            :
                <div className="btn btn-primary" onClick={ () => {
               setShow(true);
            }
            } >Select a Business</div>
            }
            <SelectBusinessModal show={show} 
            handleClose={handleClose}
            handleShow={handleShow}
            />
            <div>
            <div className="form-section">
            <label for="name">Full Name</label>
            <input type="text" className="form-control" placeholder="Full Name" />
            <span className="textSecondary textSmall">Please make sure the name mathes with your id document</span>
            </div>

            <div className="form-section">
            <label for="email">Email</label>
            <input type="email" className="form-control" placeholder="Email" />
            <span className="textSecondary textSmall">This will be used to contact you for further details</span>
            </div>

            <div className="form-section">
            <label for="email">Email</label>
            <input type="date" className="form-control" placeholder="Date of birth" />
            <span className="textSecondary textSmall">Must match your id document</span>
            </div>
            </div>
            </form>
    )


}