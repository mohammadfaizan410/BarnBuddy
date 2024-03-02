import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import SelectBusinessModal from "../components/Modals/Select-Business-Modal";
import BusinessCardRound from "../components/Business/Business-Card-Round";
export default function ClaimBusiness() {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        proof: {},
        id: {},
        selectedBusiness : {}
    });

    const handleSelectedBusiness = (business) => {
        setSelectedBusiness(business);
        setFormData({...formData, selectedBusiness: business._id});
    }


    const handleFileChangeOwnership = (e) => {
        setFormData({...formData, proof: e.target.files[0]});
    }

    const handleFileChangeId = (e) => {
        setFormData({...formData, id: e.target.files[0]});
    }


    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    }





    return(
        <form>
            <h3>Claim A business</h3>
            <p>After you have selected a business and added all the necessary details the owner of the website will be notified. Once approved you would be emailed a business account along with its details.</p>
            {selectedBusiness ? 
            <div className="d-flex flex-column align-items-start">
            <BusinessCardRound 
            avatar = {selectedBusiness.avatar}
            title = {selectedBusiness.title}
            width = "200px"
            />
             <div className="btn btn-primary" onClick={ () => {
               setShow(true);
            }
            } >Change Business</div>
            </div>
            :
                <div className="btn btn-primary" onClick={ () => {
               setShow(true);
            }
            } >Select a Business</div>
            }
            <SelectBusinessModal show={show} 
            handleClose={handleClose}
            handleShow={handleShow}
            handleSelectedBusiness={handleSelectedBusiness}
            />
            <div>
            <div className="form-section margin-2x-top">
            <label for="name">Full Name</label>
            <input type="text" className="form-control" placeholder="Full Name" value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} />
            <span className="textSecondary textSmall">Please make sure the name mathes with your id document    </span>
            </div>

            <div className="form-section margin-2x-top">
            <label for="email">Email</label>
            <input type="email" className="form-control" placeholder="Email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} />
            <span className="textSecondary textSmall">This will be used to contact you for further details   </span>
            </div>

            <div className="form-section margin-2x-top">
            <label for="email">Date of Birth</label>
            <input type="date" className="form-control" placeholder="Date of birth" value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} />
            <span className="textSecondary textSmall">Must match your id document   </span>
            </div>
            <div className="form-section margin-2x-top">
            <label for="business-document">Proof of ownership PDF</label>
            <input type="file" className="form-control" placeholder="Proof of ownership" accept="application/pdf"  onChange={(e) => handleFileChangeOwnership(e)} />
            <span className="textSecondary textSmall">Please upload a document that clearly shows that you are an owner of this business   </span>
            </div>
            <div className="form-section margin-2x-top">
            <label for="business-document">Identification Document</label>
            <input type="file" className="form-control" placeholder="Identification Document" accept="application/pdf" onChange={(e) => handleFileChangeId(e)} />
            <span className="textSecondary textSmall">Please upload any government issues identification   </span>
            </div>
            <div className="form-section margin-2x-top margin-3x-bottom">
            <button className="btn btn-primary" type="submit" onClick={handleSubmit}>
            Submit
            </button>
            </div>
            </div>
            </form>
        )


}