import React from "react";
import IndexNavbar from "components/Navbars/IndexNavbar.js";
import IndexHeader from "components/Headers/IndexHeader.js";
import SectionCarousel from "views/index-sections/SectionCarousel.js";

function Index() {
    document.documentElement.classList.remove("nav-open");
    React.useEffect(() => {
      document.body.classList.add("index");
      return function cleanup() {
        document.body.classList.remove("index");
      };
    });
    return (
      <>
        <IndexNavbar />
        <IndexHeader />
        <br/>
        <div className="main">
          <h2 className="text-center">Projects</h2>
          <SectionCarousel />
          
          
         
          
        </div>
      </>
    );
  }
  
  export default Index;