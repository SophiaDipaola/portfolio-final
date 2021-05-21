
import React from "react";


import {

  Container,
  Row,
  Col,
} from "reactstrap";


import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import MindHeader from "components/Headers/MindHeader.js";
import DemoFooter from "components/Footers/DemoFooter.js";

function Mind() {
  document.documentElement.classList.remove("nav-open");
  React.useEffect(() => {
    document.body.classList.add("profile-page");
    return function cleanup() {
      document.body.classList.remove("profile-page");
    };
  });
  return (
    <>
      <ExamplesNavbar />
      <MindHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
               
                <h5 className="description">
                Created on SquareSpace </h5>

            
               
              </Col>
            </Row>
            
                 
          </Container>
        </div>
      </div>
      
    </>
  );
}

export default Mind;
