
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
import FarmonyHeader from "components/Headers/FarmonyHeader.js";


function Farmony() {
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
      <FarmonyHeader />
      <div className="main">
        <div className="section text-center">
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="8">
                <h2 className="title">Farmony</h2>
                <h5 className="description">
                React.js | HTML | CSS | MongoDB <br/>

                Eleven day sprint to build out full MERN application from the ground up<br/>
Created API, used MongoDB to store user and urban garden information <br/>
Built robust UI/UX and complex functionality with React and CSS<br/>
Set up authentication for secure user experience<br/>
(Farmony is currently still in production)
                </h5>
               
              </Col>
            </Row>
            
                 
          </Container>
        </div>
      </div>
      
    </>
  );
}

export default Farmony;
