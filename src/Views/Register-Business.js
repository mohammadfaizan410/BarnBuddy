import React from "react";
import Banner from "../assets/banners/Register-Banner.png";
import { CountryDropdown, CountryRegionData } from "react-country-region-selector";


export default function RegisterBusiness(props) {
    const [error, setError] = React.useState(null);
    const [success, setSuccess] = React.useState(null);
    const [form, setForm] = React.useState({
        full_name: "",
        email: "",
        phone: "",
        dob: "",
    });
    const [government_id, setGovernmentId] = React.useState(null);
    const [proof_of_ownership, setProofOfOwnership] = React.useState(null);

    const handleFileInputChange = (e) => {
        if(e.target.name === "government_id") {
            setGovernmentId(e.target.files[0]);
        }else{
            setProofOfOwnership(e.target.files[0]);
        }
    }

    const handleFormSubmit = (e) => {
        e.preventDefault();
        const validationError = validateForm();
        if(validationError) {
            console.log("here")
            setError(validationError);
            return;
        }
        setError(null);
        const formData = new FormData();
        console.log(form.full_name);
        formData.append("fullname", form.full_name);
        formData.append("email", form.email);
        formData.append("phone", form.phone);
        formData.append("dob", form.dob);
        formData.append("government_id", government_id);
        formData.append("proof_of_ownership", proof_of_ownership);
    
    }            
    const validateForm = () => {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const phoneRegex = /^[0-9]{10}$/;
        if(form.full_name === "") {
            return "Full name is required";
        }
        if(form.email === "") {
            return "Email is required";
        }
        if(!emailRegex.test(form.email)) {
            return "Invalid email";
        }
        if(form.phone === "") {
            return "Phone is required";
        }
        if(!phoneRegex.test(form.phone)) {
            return "Invalid phone number";
        }
        if(government_id === null) {
            return "Government ID is required";
        }
        if(proof_of_ownership === null) {
            return "Proof of ownership is required";
        }
        return null;
    }
    
    const handleFormChange = (e) => {
        if(e.target.name === "government_id" || e.target.name === "proof_of_ownership") {
            setForm({...form, [e.target.name]: e.target.files[0]});
            return;
        }
        setForm({...form, [e.target.name]: e.target.value});
    }
    return (
        <div className="business-frontpage-section">
                <img src={Banner} alt="business logo" className="business-frontpage-cover" />
                <form className="form">
                <h3>Register a Business</h3>
                <div className="form-section">
                <label for="full name">Full Name*</label>
                <input type="text" className="form-control" placeholder="Enter your full name"
                name="full_name" onChange={handleFormChange}
                autoComplete="off"
                />
                </div>
                <div className="form-section">
                <label for="full name">Email Address*</label>
                <input type="text" className="form-control" placeholder="Enter your email address" 
                name="email" onChange={handleFormChange}
                autoComplete="off"
                />
                </div>
                <div className="form-section">
                <label for="full name">Phone Number*</label>
                <input type="tel" className="form-control" placeholder="Enter your phone" 
                name="phone" onChange={handleFormChange}
                autoComplete="off"

                />
                
                </div>
                <div className="form-section">
                <label for="full name">Business Type*</label>
                <input type="text" className="form-control" placeholder="Enter your business name" 
                name="businesName" onChange={handleFormChange}
                autoComplete="off"
                />
                </div>
                <div className="form-section">
                <label for="full name">Business Name*</label>
                <input type="text" className="form-control" placeholder="Enter your business name" 
                name="businesName" onChange={handleFormChange}
                autoComplete="off"
                />
                </div>
                <div className="form-section">
                <label for="full name">Business Description*</label>
                <textarea rows={5} type="text" className="form-control" placeholder="Enter your business name"
                name="businesName" onChange={handleFormChange}
                autoComplete="off"
                />
                </div>
                <div className="form-section">
                    <CountryDropdown className="form-control" />
                </div>
                <div className="form-section">
                <label for="full name">Business City*</label>
                <input type="text" className="form-control" placeholder="Enter your business name" 
                name="businesName" onChange={handleFormChange}
                autoComplete="off"
                />
                </div>
                <div className="form-section">
                <label for="full name">Government-Issued ID*</label>
                <input type="file" 
                        className="form-control" placeholder="Enter your full name" 
                        accept="image/*, application/pdf"
                        name="government_id"
                        onInput={handleFileInputChange}
                        onBlur={handleFileInputChange}
                />
                </div>
                <div className="form-section">
                <label for="full name">Proof of Ownership*</label>
                <input type="file" 
                    className="form-control"
                    accept="image/*, application/pdf"
                    name="proof_of_ownership"
                    onInput={handleFileInputChange}
                    onBlur={handleFileInputChange}
                />
                </div>
                    <button className="btn btn-primary" onClick={
                        handleFormSubmit
                    }>Submit</button>
                {
                    error && <p className="text-danger"
                    >{error}</p>
                }
            </form>
        </div>
    );
};