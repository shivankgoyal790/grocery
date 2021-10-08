import React from "react";
import "./Newscard.css"
const Newscard = (props) =>{
    return(
        <div className="news-card" style={{flexDirection:props.flexdir}}>
            <div className="newsflex1">
                <img className="newsimages" src={props.image} alt="hi"></img>
            </div>
            <div className="newsflex2">
            <div className="dates">{props.date}</div>
            <h3>{props.head}</h3>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text</p>
            <button className="buybtn">Read More</button>  
            </div>   
        </div>
    )
}

export default Newscard