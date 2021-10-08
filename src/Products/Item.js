import React from "react";
import "./Item.css"

const Item = (props) =>{
    return(
<div className="image-container" style={{backgroundColor:`${props.color}`}}>
<img src={props.image} alt="hi"></img>
<h3>{props.itemname}</h3>
</div>
    )
}


export default Item