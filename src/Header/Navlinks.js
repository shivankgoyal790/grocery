import React  from "react";
import "./Navlinks.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCaretDown} from "@fortawesome/free-solid-svg-icons"

const Navlinks = () =>{
    return(
    <ul className="mainnavlinks">
        <li className="active">Anurag </li>
        <li>Shop<i><FontAwesomeIcon icon={faCaretDown} /></i></li>
        <li>Best Sellers<i><FontAwesomeIcon icon={faCaretDown} /></i></li>
        <li>Deal of the day<i><FontAwesomeIcon icon={faCaretDown} /></i></li>
        <li>Pages<i><FontAwesomeIcon icon={faCaretDown} /></i></li>
        <li>Contact Us</li>

    </ul>)
}

export default Navlinks