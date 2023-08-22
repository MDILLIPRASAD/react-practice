import React, { useState } from "react";

const Usestatehook = () => {

  let [price, priceupdate] = useState("30000");
 

  return (
    <>
    <h1>product:product</h1>
      <h2 >price:{price}</h2>
      <button onClick={() =>{
        priceupdate(()=>{
            return "react"}

  )}}>Update
      </button>

      <button onClick={(prev) =>{

        priceupdate(prev+90)
      }}>Update</button>
    </>
  );
};

export default Usestatehook;
