import React from "react";
import { useState } from "react";
import { Button } from "react-bootstrap";
import SelectBusinessModal from "../components/Modals/Select-Business-Modal";
import BusinessCardRound from "../components/Business/Business-Card-Round";
export default function ClaimBusiness() {
    const [category, setCategory] = useState("");
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [selectedBusiness, setSelectedBusiness] = useState(null);
    const [submitDisabled, setSubmitDisabled] = useState(true);
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        dob: "",
        business_ownership_document: {},
        government_issued_id: {},
        business_id : ""
    });

    const handleSelectedBusiness = (business) => {
        setSelectedBusiness(business);
        setFormData({...formData, business_id: business._id});
    }


    const handleFileChangeOwnership = (e) => {
        const file = e.target.files[0];
        if(file){
            setFormData({...formData, business_ownership_document: file});
                }
    }

    const handleFileChangeId = (e) => {
        const file = e.target.files[0];
        if(file){
            setFormData({...formData, government_issued_id: file});
        }
    }

    const onCategoryChange = () => {
        setSelectedBusiness(null);

    }
    const handleValidation = () => {};


    const handleSubmit = (e) => {
        e.preventDefault();
        const formDataWithFIles = new FormData();
        formDataWithFIles.append("name", formData.name);
        formDataWithFIles.append("email", formData.email);
        formDataWithFIles.append("dob", formData.dob);
        formDataWithFIles.append("business_id", formData.business_id);
        formDataWithFIles.append("business_ownership_document", formData.business_ownership_document);
        formDataWithFIles.append("government_issued_id", formData.government_issued_id);

        fetch("http://localhost:3001/business/claim", {
            method: "POST",
            body: formDataWithFIles,
        })
    }

    return(
        <form noValidate className="container-margins">
            <h3 className="heading-primary mb-lg-5 border-bottom">Claim A business</h3>
            <p className="textSecondary">After you have selected a business and added all the necessary details the owner of the website will be notified. Once approved you would be emailed a business account along with its details.</p>
            <h6>Please select a category:</h6>
            <div className="d-flex flex-row">
            <Button className={
                `btn btn-primary ${category === "greenstore" && "btn-secondary"}`
            } onClick={() => {
                setCategory("greenstore ")
                onCategoryChange();
            }}>Green Stores</Button>
            <Button className= {
                `btn btn-primary margin-2x-left ${category === "pharmacy" && "btn-secondary"}`
            } 
            onClick={() => {
                setCategory("pharmacy");
                onCategoryChange();
            }}>Pharmacies</Button>
            <Button className={
                `btn btn-primary margin-2x-left ${category === "psychedelics" && "btn-secondary"}`
            }
            onClick={() =>{
                setCategory("psychedelics")
                onCategoryChange();
            }}>Psychedelics</Button>
            </div>
            {selectedBusiness ? 
            <div className="d-flex flex-column align-items-start">
            <BusinessCardRound 
            avatar = {selectedBusiness.logoUrl}
            title = {selectedBusiness.name}
            width = "200px"
            />
             <div className="btn btn-primary" onClick={ () => {
               setShow(true);
            }
            } >Change Business</div>
            </div>
            :
                <div className={`btn btn-primary mt-3 ${category == "" && "d-none" }`} onClick={ () => {
               setShow(true);
            }
            } >Select a Business</div>
            }
            <SelectBusinessModal show={show} 
            handleClose={handleClose}
            handleShow={handleShow}
            handleSelectedBusiness={handleSelectedBusiness}
            category={category}
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
            <button className={`btn btn-primary ${submitDisabled ? "disabled" : ""}`}  type="submit" onClick={handleSubmit}>
            Submit
            </button>
            </div>
            </div>
            </form>
        )


}