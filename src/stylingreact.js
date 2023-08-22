import "./App.css"
export default  function Stylingreact(){

    let s1={
      background:"green",
      color:"white",
      marginTop:"100px", //margin-top is not cor rect
    }
  // export function App(){ we can export like this also
    return (<>
    <h1 style={s1}>This is appjs variable styling inside the function</h1>
    <p>this is just child para in app.js</p>
    <h1 className="secondary" id="second2">this is third line</h1>
{/* class name is return like className in react  */}
    <p id="paraid">this is child para in app.js id based</p>
    <h4 style={{
    background:"green", 
    color:"white",
    marginTop:"100px", //inine css in react
    }}>this is for object styling in return, means it is html styling </h4>
    <h2 id="heading2">this is public styling gstyle.css </h2> 
    </>)
}// export default function App we can export like this also

// App.CSS

// h1, p{
//   background-color: aquamarine;
// }
// p, h1 {
//   color:blue;
// }
// .secondary {  
//   //same element class 
//   background-color: blueviolet;
//   color: aqua;
// }
// #second2 {
//   // same element id but id>class>element 
//   background-color: aquamarine;
//   color: bisque;
// }
// #paraid {
//   background-color: black;
//   color: white;
// }
// // styling for react styles over //