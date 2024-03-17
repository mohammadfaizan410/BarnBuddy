import React from "react";
import { useParams } from "react-router-dom";
import { Spinner } from "react-bootstrap";
import Banner from "../assets/banners/Claim-Banner.png";


export default function ClaimSelectedBusiness(props) {
    const id = useParams().id;
    const [businessData, setBusinessData] = React.useState({});
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
        formData.append("business_id", id);
        fetch("http://localhost:3001/business/claim", {
            method: "POST",
            body: formData,
        })
        .then(res => res.json())
        .then(data => {
            if(data.success) {
                setSuccess("Your application has been submitted successfully. We will get back to you within 24 hours.");
            }else{
                setSuccess(data.error);
            }
        })
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
        if(form.dob === "") {
            return "Date of birth is required";
        }
        if(government_id === null) {
            return "Government ID is required";
        }
        if(proof_of_ownership === null) {
            return "Proof of ownership is required";
        }
        return null;
    }
    
    function isValidObjectId(id) {
        const objectIdRegex = /^[0-9a-fA-F]{24}$/;
        return objectIdRegex.test(id);
    }
    React.useEffect(() => {
        if (!isValidObjectId(id)) {
            setError("Invalid business id");
            return;
        }else{
            try {
                fetch(`http://localhost:3001/business/getData`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    business_id: id
                })
            })
            .then(res => res.json())
            .then(data => {
                setBusinessData(data.business);
            })
            .catch(err => {
                console.log(err);
                setError(err);
            });
        } catch (error) {
            console.error("Error fetching data:", error);
            setError(error);
        }
        }
    }, [id]);

    const handleFormChange = (e) => {
        if(e.target.name === "government_id" || e.target.name === "proof_of_ownership") {
            setForm({...form, [e.target.name]: e.target.files[0]});
            return;
        }
        setForm({...form, [e.target.name]: e.target.value});
    }
    if(success){
        return (
            <div className="business-frontpage-section">
                <img src={Banner} alt="business logo" className="business-frontpage-cover" />
                <div className="form">
                    <h3 className="textPrimary">{businessData?.name}</h3>
                    <p>{success}</p>
                </div>
            </div>
        )
    }
    return (
        <>
        {businessData ?
            <div className="business-frontpage-section">
            <img src={Banner} alt="business logo" className="business-frontpage-cover" />
            <div className="form">
            <h3 className="textPrimary">{businessData?.name}</h3>
            <div className="business-frontpage-topinfo-tags">
                    {
                        businessData.tags?.map((tag, index) => {
                            return (
                                <span key={index}>{tag}</span>
                                )
                            })
                        }
                </div>
            <p>If you are the owner of this business, you can claim it by filling the form below. Make 
            sure to provide all the necessary information to verify your ownership. Once you have submitted
            the form, we will review your application and get back to you within 24 hours.
            </p>
            </div>
            <form className="form">
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
                <label for="full name">Date of birth*</label>
                <input type="date" 
                    className="form-control" 
                    placeholder="Enter your phone" 
                    name="dob" 
                    onChange={handleFormChange}
                    onBlur={handleFormChange}
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
            :
            <Spinner animation="border" />
        }
        </>
    )
}