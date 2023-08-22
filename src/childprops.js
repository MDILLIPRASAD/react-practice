import React from 'react'

const Mainchildprops = () => {
  return (
    <>
    <Childprops x="some child prop">This content is displayed in the window when we 
    use children property like props.children</Childprops>
    <Childprops/>
    <Childprops > <button>subscribe</button></Childprops>
   
    </>
  )
}

// we can call one component any number of times and any where in the app ex:Childprops

export function Childprops (props) {
    console.dir(props)
  return (
    <>
    <div>   
        <h1>this is child props in react</h1>
        <h3>here we use props as parameter in childprops</h3>
        <p style={{display:"flex", gap:20}}>{props.children}</p>
    </div>
    </>
  )
}
export default Mainchildprops;
// put this whole part in app.js
//import Mainchildprops, {Childprops} from "./childprops"
//<Mainchildprops/>
<Childprops><button>like</button>
<button>share</button>
<button>unlike</button></Childprops>

// here it is not rendered b/c Childprops is rendered in Mainchildprops and 
// Mainchildprops is rendered in App.js an App.js is rendered in index.js
// we can render Childprops irectly in app.js - since we get output only whatever is return in  Chilprops function only
// so, the above part is executed only wriitten in App.js  or in Mainchildprops only -it is only rendered.