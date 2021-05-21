
import React from "react";


import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col,
} from "reactstrap";


import ExamplesNavbar from "components/Navbars/ExamplesNavbar.js";
import LavenderHeader from "components/Headers/LavenderHeader.js";

function Lavender() {
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
      <LavenderHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Lavender recovery</h2>
                <h5 className="description">
                Express | EJS | HTML | CSS | PostgreSQL | Node.js <br/>

                Five day sprint to build out full Express application from the ground up<br/>
Used EJS and CSS to produce styled, full functionality<br/>
Used PostgreSQL to store all user data<br/>
Set up authentication for secure user experience<br/>
(Lavender Recovery is still in production)
                </h5>
               
              </Col>
            </Row>
            
                 
          </Container>
        </div>
      </div>
      
    </>
  );
}

export default Lavender;
