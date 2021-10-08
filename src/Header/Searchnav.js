import React from "react";
import "./Searchnav.css"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faBars} from "@fortawesome/free-solid-svg-icons"

const Searchnav = ()=>{
    return(
        <div className="search-flex">
            <div className="category">
                <FontAwesomeIcon icon={faBars} />
                <select className = "select-tag"> 
                <option classname="choice" value="All Departments">All departments</option>
                </select>
            </div>
            <div className="search-container">
                <select className="select-tag2">
                    <option>All Categories</option>
                </select>
                <span className="vr"></span>
                <input type="text" placeholder="Search here" className="searchbar"></input>
                <button className="searchbtn">Search</button>
            </div>
        </div>
    );

}

export default Searchnav
