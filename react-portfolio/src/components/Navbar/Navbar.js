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
                  <p className="text">
                About
                </p>
              </a>
              </div>
             
            </div> 
            <div className="contact link">
            
              <div>

              <a href="/contact">
              <p className="text">
                Contact
                </p>
              </a>
              </div>
         
            </div>
            <div className="portfolio link">
            
              <div>
              <a href="/portfolio">
              <p className="text">
              Portfolio
              </p>
              </a>
              </div>
            
            </div>
          </Row>
        </div>
    );

};

export default Navbar; 