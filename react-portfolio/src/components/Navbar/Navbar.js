import React from "react";
import {Col, Row, Container} from "../Grid/Grid";
import './Navbar.css'
const Navbar = () => {

    return(
        <div className="Navbar">
          <Row>
                
            <div className="about link">
           
              <div>
              <a href="/about">
                About
              </a>
              </div>
             
            </div> 
            <div className="contact link">
            
              <div>

              <a href="/contact">
                Contact
              </a>
              </div>
         
            </div>
            <div className="portfolio link">
            
              <div>
              <a href="/portfolio">
              Portfolio
              </a>
              </div>
            
            </div>
          </Row>
        </div>
    );

};

export default Navbar; 