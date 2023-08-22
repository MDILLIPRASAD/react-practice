import "./App.css"
import React from 'react'

const Functional = () => {
  return (
    <React.Fragment >
      <Header style = {{display:"flex"}}/>
      {header2()}
      <Secondary></Secondary> 
{/* we can call function in 3 ways :-
1.{Secondary()} 2.<Secondary/> 3.<Secondary></Secondary>*/}
      <Variable/>
      <Avar/>
    </React.Fragment>
  )
}

function Header() {
  return
  (
      <>
          <h1>helloo this is child of first child</h1>
          <h6>helloo this is child of second child</h6>
      </>
  )
}

//named functions
function header2() {
  return (
    <div><h2>2.Header2- praenthesis started in return line return"("</h2>
        <h3>second executed -rendered from app.js</h3>
        <h3>this is called like normal as JS function</h3>
        <div>this is app.js named function</div>
        <div>Header() is not returned b/c of "(" write in next line</div>
    </div>
  )
}

export function Secondary() {
  return (
    <div>
      <h2>last. lastly- executed from index.js</h2>
      <h3>index.js lastly executed</h3>
    </div>);
}

//immediately invoked function
(() => {
  return (<div>
    <h2>this is iif </h2>
  </div>);
})()

//arrow functions
// so we need to assign a variable for calling function
let Variable =() => {
  return (
  <div>
    <h2>3. this is Immediately Invoked function </h2>
    <div> THIRD  </div>
    <div>index.js is executed lately then app.js</div>
    <div>this is app.js arrow function</div>
  </div>);
}

//anonymous function
let Avar = function() {
  return (
  <div>
    <h2>4. this is anonymous function without variable not working</h2>
  </div>);
}

export default Functional;


// <Functional/>