import React from "react";
import { Modal, Button } from "react-bootstrap";
import BusinessCardRound from "../Business/Business-Card-Round";



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
            // Handle the error, show a message to the user, or perform other actions as needed
          });
      }, []);




    return (
      <>  
        <Modal show={props.show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
          <Modal.Header >
            <Modal.Title>Select An Unclaimed Business</Modal.Title>

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