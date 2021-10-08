import React from "react";
import "./Footer.css"
import logo from "../images/1.png"
import Supportitem from "./Supportitem";
import {faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faTruck } from "@fortawesome/free-solid-svg-icons";
import { faHeadphones } from "@fortawesome/free-solid-svg-icons";
import { faExchangeAlt } from "@fortawesome/free-solid-svg-icons";
const Footer = () =>{
    return(
        <div style={{position:"relative"}}>
         <div className="support">
      <Supportitem image={faTruck} line1="Free Shipping" line2="Worldwide"/>
      <Supportitem image={faPhoneAlt} line1="Helpline" line2="+(000)1214-235"/>
      <Supportitem image={faHeadphones} line1="24x7" line2="Customer Support"/>
      <Supportitem image={faExchangeAlt} line1="Returns" line2="and Exchanges"/>
      
        </div>
    <div className="footer-container">
    <div className="flex1">
        <div className="inform">
            <img src={logo} alt="hi"></img>
            <p>No: 58 A, East Madison Street,
              Baltimore, MD, USA 4508</p>
            <p>+0000 1234 56789</p>
            <p>mail@example.com</p>
        </div>
        <div className="inform">
            <h2>Help</h2>
            <p>Search</p>
            <p>Help</p>
            <p>information</p>
            <p>Privacy Policy</p>
            <p>Shipping information</p>
        </div>
    </div>
    <div className="flex1">
        <div className="inform">
            <h2>Support</h2>
            <p>Contact</p>
            <p>About Us</p>
            <p>Carrers</p>
            <p>Refund & Returns</p>
            <p>Deliveries</p>
        </div>
        <div className="inform">
            <h2>Information</h2>
            <p>Search Terms</p>
            <p>Advances seatch</p>
            <p>Helps & Faqs</p>
            <p>Store Location</p>
            <p>Orders & Returns</p>
        </div>
    </div>
    </div>
    </div>
    )
}

export default Footer