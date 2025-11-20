import React from "react";
import './App.css'
import Main from './1.jsx'
import Header from './2.jsx'
import Greet from './3.jsx'
import ClassComponent from './4 class.jsx'
import PropsComponent from './5 props.jsx'
import GreetingCard from './6 Greeting Card.jsx'
import Counter from './7 state.jsx'
import Counter1 from './8 counter.jsx'
import Box from "./9 colourChangingbox.jsx";
import WelcomeMessage from "./10 useEffect.jsx";
import NameContext from "./11 useContext.jsx";
import ThemeContext from "./12 dark Light mode.jsx";
import ReducerCounter from "./13 useReducer.jsx";

function App() {
  // const name="John";
  // const marks=75;
  // const display=marks>=40 ? "Pass" : "Fail";
  return (
    <>
    {/* <h1 className="text-red-500">{name}</h1>
    <p>{display}</p> */}
    <ReducerCounter />
    </>
  );
}

export default App;