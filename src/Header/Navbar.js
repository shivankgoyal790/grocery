import React from "react";
import Navlinks from "./Navlinks";
import "./Navbar.css"
import logo1 from "../images/1.png"

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faHeart} from "@fortawesome/free-regular-svg-icons"
import {faShoppingCart} from "@fortawesome/free-solid-svg-icons"
import {faBars} from "@fortawesome/free-solid-svg-icons"
import {faUser} from "@fortawesome/free-solid-svg-icons"
const Navbar = () =>{
    return(
        <div className="navbar-flex">
        <div className="sitelogo">
        <FontAwesomeIcon className="menubar" icon={faBars} />
            <img src={logo1} alt="company-logo"/>
        </div>
        <div className="navlinks-container"><Navlinks/></div>
        
        <div className="user-exp">
            <i><FontAwesomeIcon icon={faHeart} /></i>
            <i><FontAwesomeIcon icon={faShoppingCart} /></i>
            <i><FontAwesomeIcon icon={faUser} /></i>
        </div>
        </div>
    )
}

export default Navbar