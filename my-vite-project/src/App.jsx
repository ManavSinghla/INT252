import React from "react";
import './App.css'
import Main from './1.jsx'
import Header from './2.jsx'
import Greet from './3.jsx'
import ClassComponent from './4 class.jsx'
import PropsComponent from './5 props.jsx'
import GreetingCard from './6 Greeting Card.jsx'

function App() {
  const name="John";
  const marks=75;
  const display=marks>=40 ? "Pass" : "Fail";
  return (
    <>
    <h1>{name}</h1>
    <p>{display}</p>
    <ClassComponent/>
    <PropsComponent name="Alice"/>
    <GreetingCard name="Bob" message="Welcome to the React world!"/>
    </>
  );
}

export default App;