import React, { useState,useEffect, useCallback } from "react";
import "./Discount.css"

const Discount = () =>{
    let t1 = 12;
    let t2 = 34;

        let [hours , setTime1] = useState(t1);
        let [minutes , setTime2] = useState(t2);
        let [seconds , setTime3] = useState(59);

    const UpdateTime = useCallback(()=>{
                setTime3(seconds-1);
    },[seconds])

    useEffect(
        () => {
            if (seconds <= 0) {
                setTime3(59)
                if(minutes === 0){
                    setTime1(hours-1);
                }
                else
                setTime2(minutes-1);
            }
            const id = setInterval(UpdateTime, 1000);
            return () => clearInterval(id);
        },
        [seconds,UpdateTime,setTime2,minutes,setTime1,hours]
    );


    return( 
        <div className="discount-container">
            <div className="discount">
                <h1>Special Discount for all Grocery products</h1>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s</p>
                <div className="counter">
                    <span>171 :</span>
                    <span>{hours} :</span>
                    <span>{minutes} :</span>
                    <span>{seconds}</span>
                </div>
                <button className="buybtn">Buy Now</button>
            </div>
        </div>
    )
}

export default Discount