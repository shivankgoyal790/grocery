import React from "react";
import "./Feedback.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretLeft } from "@fortawesome/free-solid-svg-icons";
import { faCaretRight } from "@fortawesome/free-solid-svg-icons";
const Feedback = () =>{
    return(
    <div className="feedback-container">
            <h1>Our Clients Say!</h1>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
            <div className="clients">
                <div><FontAwesomeIcon className="sliders" icon={faCaretLeft} /></div>
                <div className="client-container">
                    <div className="client-container-back"></div>
                </div>
                <div><FontAwesomeIcon className="sliders" icon={faCaretRight}/></div>
            </div>
    </div>
    );
}

export default Feedback