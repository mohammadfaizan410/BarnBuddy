import React from "react";
import { Modal, Button } from "react-bootstrap";
import BusinessCardRound from "../Business/Business-Card-Round";



function SelectBusinessModal(props) {
    const [allBusiness, setAllBusiness] = React.useState([]);

    React.useEffect(() => {
        fetch("/business/unclaimed/all")
            .then((res) => res.json())
            .then((data) => {
            setAllBusiness(data);
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
                {/** Map through allBusiness and display the business card */}
            <div 
                onClick={props.handleClose}
            ><BusinessCardRound />
            </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={props.handleClose} >
              Close
            </Button>
            <Button variant="primary" onClick={props.handleClose}>
              Save Changes
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }


  export default SelectBusinessModal;