import React from "react";
import "./Conatct.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhoneAlt } from "@fortawesome/free-solid-svg-icons";
import { faFacebookF, faGooglePlusG, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";
const Contact = () =>{
    return(
        <div className="contact-container">
            <div>
                <div className="phone"><FontAwesomeIcon icon={faPhoneAlt} />(00) 000 111 222</div>
                <div className="hrule"></div>
                <div className="email"><FontAwesomeIcon icon={faEnvelope} />info@somedomain.com</div>
            </div>
            <div>
                <div className="connect">
                    <FontAwesomeIcon icon={faTwitter} />
                    <FontAwesomeIcon icon={faFacebookF} />
                    <FontAwesomeIcon icon={faGooglePlusG} />
                    <FontAwesomeIcon icon={faInstagram} />
                </div>
                <div className="hrule"></div>
                <select className = "currency"> 
                <option value="USD">USD</option>
                <option value="INR">INR</option>
                <option value="BTC">BTC</option>
                </select>
            </div>
        </div> 
    )
}

export default Contact