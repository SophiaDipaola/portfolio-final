
import React from "react";


import {
  Container,
  Row,
  Col,
} from "reactstrap";


import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import SeleneHeader from "components/Headers/SeleneHeader.js";


function Selene() {
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
      <SeleneHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Selene</h2>
                <h5 className="description">
                Django | Python | CSS | HTML | PostgresSQL <br/>

                5 day sprint to build out full stack application from the ground up<br/>
Built ecommerce functionality with Django cart<br/>
Built robust UI/UX and complex functionality with Django + CSS<br/>
Set up authentication for secure user experience
                </h5>
               
              </Col>
            </Row>
            
                 
          </Container>
        </div>
      </div>
      
    </>
  );
}

export default Selene;
