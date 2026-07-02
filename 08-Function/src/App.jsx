import React from 'react'

const App = () => {

const btnLogin = () =>{
  console.log("Login Button is clicked");
};
const btn = () =>{
  console.log("Button is clicked");
};

const input = (val) => {
  console.log(val);
}

const containerFun = (props) => {
  console.log(props.clientX);
}

  return (
    <div className="parent">
      <div>
      <h1>Hello</h1>
      <button onClick={btn}>Click me</button>
      <button onClick={btnLogin}>Login</button> 
      <input onChange={(props) =>{
       input(props.target.value);
      }} type="text" placeholder = "Enter your name" />
    </div>
    <div onClick={ (props) =>{containerFun(props)}} className="container">

    </div>
    </div>
  )
}

export default App
