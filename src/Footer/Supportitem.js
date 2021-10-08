import React from "react";
import "./Supportitem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Supportitem = (props) =>{
    return(
    <div className="support-item">
            <div className="icon-back"><FontAwesomeIcon className="support-icon" icon={props.image} /></div>
            <div className="content">
                <h3 className="line">{props.line1}</h3>
                <p className="line line2">{props.line2}</p>
            </div>
    </div>
    )}


export default Supportitem