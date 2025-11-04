import React from "react";
import './App.css'

function App() {
  const [count, setCount] = React.useState(0);
  return (
    <>
      <div>
        <h1>Manav</h1>
        <p>Count: {count}</p>
        <button onClick={() => setCount(count + 1)}>Increment</button>
      </div>
    </>
  );
}

export default App;