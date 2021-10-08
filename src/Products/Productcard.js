import React from "react";
import "./Productcard.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faStar } from "@fortawesome/free-solid-svg-icons";

const Productcard = (props) =>{
return(
    <div className="product-container" style={{flexDirection:props.flexdir , width:props.length , border:props.border}}>
        {props.sale && <div className="sale">sale</div>}
        <div style={{flex:"40%"}}>
        <img src={props.image} alt="hi" className="product-image"></img>
        </div>
        <div style={{textAlign:props.alignment}}>
        <div className="weight-box">
            <span>{props.weight1}</span>
            <span>{props.weight2}</span>
            <span>{props.weight3}</span>
        </div>
        <h2 className="productname">{props.name}</h2>
        <div className="rating">
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
            <FontAwesomeIcon icon={faStar} />
        </div>
        <p className="price">${props.price}</p>
        <button className="buybtn">Add to Cart</button>
        </div>
    </div>
)
}

export default Productcard