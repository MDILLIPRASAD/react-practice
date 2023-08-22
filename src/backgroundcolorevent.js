import React from 'react'

const Backgroundcolorevent = () => {

  return (
    <div >
        <h1>This is Backgroundcolorevent</h1>
        <h2>what color you changed the color appear in background </h2>
        <input type="color" onChange={
            (e)=>
            {document.body.style.background = e.target.value}
        }/>
      
    </div>
  )
}

export default Backgroundcolorevent;
