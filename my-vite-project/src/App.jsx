import React from "react";
import './App.css'
import Main from './1.jsx'
import Header from './2.jsx'
import Greet from './3.jsx'

function App() {
  const [count, setCount] = React.useState(0);
  const name="John";
  const marks=75;
  const display=marks>=40 ? "Pass" : "Fail";
  return (
    <>
    <h1>{name}</h1>
    <Greet/>
    <p>{display}</p>
    </>
  );
}

export default App;