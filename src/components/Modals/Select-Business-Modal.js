import React from "react";
import { Modal} from "react-bootstrap";
import BusinessCardRound from "../Business/Business-Card-Round";
import { IoClose } from "react-icons/io5";



function SelectBusinessModal(props) {
    const [allBusiness, setAllBusiness] = React.useState([]);

    React.useEffect(() => {
        fetch("http://localhost:3001/business/unclaimed/all")
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
      }, []);




    return (
      <>  
        <Modal show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
          <Modal.Header className="d-flex justify-content-between" >
            <Modal.Title>Select An Unclaimed Business</Modal.Title>
            <IoClose size={40} onClick={props.handleClose} style={{cursor: "pointer"}} />
          </Modal.Header>
          <Modal.Body
          style={{overflowY: "scroll", maxHeight: "500px"}}
          >
            <div className="d-flex flex-row flex-wrap">
            {  
                allBusiness.map((business) => {
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
                            avatar={business.avatar}
                            title={business.title}
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