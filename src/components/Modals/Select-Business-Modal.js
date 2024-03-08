import React from "react";
import { Modal} from "react-bootstrap";
import BusinessCardRound from "../Business/Business-Card-Round";
import { IoClose } from "react-icons/io5";



function SelectBusinessModal(props) {

    const [allBusiness, setAllBusiness] = React.useState([]);
    const [searchInput, setSearchInput] = React.useState("");


    React.useEffect(() => {
      const category = props.category;
      fetch(`http://localhost:3001/business/unclaimed/${category}`)
        .then((res) => {
          if (!res.ok) {
            throw new Error(`HTTP error! Status: ${res.status}`);
          }
          return res.json();
        })
        .then((data) => {
          setAllBusiness(data.businesses);
        })
        .catch((error) => {
          console.error('Error fetching data:', error.message);
        });
    }, [props.category]);

      const handleSearchInput = (e) => {
        setSearchInput(e.target.value);
      }

      const filteredBusiness = allBusiness.filter((business) => {
        if(searchInput === "" || searchInput === null) return business;
        return business.name.toLowerCase().includes(searchInput.toLowerCase());
      });


    return (
      <>  
        <Modal show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
          <Modal.Header className="d-flex flex-column" >
            <div className="d-flex w-100 justify-content-between">
            <Modal.Title>Select An Unclaimed Business</Modal.Title>
            <IoClose size={40} onClick={props.handleClose} style={{cursor: "pointer"}} />
            </div>
            <input type="text" className="form-control" placeholder="Search" onChange={
                handleSearchInput 
            } />
          </Modal.Header>
          <Modal.Body
          style={{overflowY: "scroll", minHeight: "400px", maxHeight: "400px"}}
          >
            <div className="d-flex flex-row flex-wrap">
            {  
                filteredBusiness.map((business) => {
                    return (
                        <div
                        className="px-2"
                        key={business._id}
                        onClick={() => {
                            props.handleSelectedBusiness(business);
                            props.handleClose();
                        }}
                        >
                            <BusinessCardRound 
                            avatar={business.logoUrl}
                            title={business.name}
                            width="132px"
                            />
                        </div>
                    )
                })
            }         
            </div>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


  export default SelectBusinessModal;