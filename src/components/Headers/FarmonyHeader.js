/*!

=========================================================
* Paper Kit React - v1.3.0
=========================================================

* Product Page: https://www.creative-tim.com/product/paper-kit-react

* Copyright 2021 Creative Tim (https://www.creative-tim.com)
* Licensed under MIT (https://github.com/creativetimofficial/paper-kit-react/blob/main/LICENSE.md)

* Coded by Creative Tim

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/
import React from "react";

// reactstrap components
import { Button, Container } from "reactstrap";

// core components

function FarmonyHeader() {
  let pageHeader = React.createRef();

  React.useEffect(() => {
    if (window.innerWidth < 991) {
      const updateScroll = () => {
        let windowScrollTop = window.pageYOffset / 3;
        pageHeader.current.style.transform =
          "translate3d(0," + windowScrollTop + "px,0)";
      };
      window.addEventListener("scroll", updateScroll);
      return function cleanup() {
        window.removeEventListener("scroll", updateScroll);
      };
    }
  });

  return (
    <>
      <div
        style={{
          backgroundImage:
            "url(" + require("assets/img/jake-gard.jpg").default + ")",
        }}
        className="page-header"
        data-parallax={true}
        ref={pageHeader}
      >
        <div className="filter" />
        <Container>
          <div className="motto text-center">
            <h1>Farmony</h1>
            <h3>Farmony is a social media website for promoting accessibility to affordable health foods for low income families through community cultivation and providing a virtual farmers market.</h3>
            <br />
            <Button
              href="http://farmony-us.herokuapp.com/"
              className="btn-round mr-1"
              color="neutral"
              target="_blank"
              outline
            >
              <i className="fa fa-play" />
              View Live Demo
            </Button>
            <Button href="https://github.com/SophiaDipaola/Farmony-frontend" className="btn-round" color="neutral" type="button" target="_blank"  outline>
              View  Front-End Code
            </Button>
            <Button href="https://github.com/SophiaDipaola/Farmony-backend" className="btn-round" color="neutral" type="button" target="_blank"  outline>
              View  Back-End Code
            </Button>
          </div>
        </Container>
      </div>
    </>
  );
}

export default FarmonyHeader;
