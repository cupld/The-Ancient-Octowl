import logo from './logo.svg';
import './App.css';
import React, { useState } from "react";

let guessingNumber = Math.floor(Math.random() * 100);
function App() {

  const [value, setValue] = useState("");
const userClick = () => {
  
  if (value === "") return alert("7e6 ragam!");
  else if (+value === guessingNumber) alert("Correct!");
  else if (+value != guessingNumber) alert("Try Again!");
};
const astaslem = () =>{
  setValue("")
  alert("7awel mara o5ra!");
  guessingNumber = Math.floor(Math.random() * 100);
  console.log(guessingNumber);
};
console.log(guessingNumber);
  return (
    <div className="App">
      <h1>The Ancient Octowl<br /></h1>
      <h2>stirs beneath the tumultuous waves, thinking of a number that will end the world</h2>
      <p>Find the secret number and use it to banish The Octowl</p>
      <input
       type="number"
        value={value}
        onChange={e => setValue(e.target.value)}
        placeholder="1-100"></input>
      <div><button onClick={userClick}>BANISH</button></div>
      <div>
      <button onClick={astaslem}>Surrender</button>
      <button>Seek Wisdom</button>
      </div>
    </div>
  );
}

export default App;
