// Command to run program
// npm init vite my-vite-project
import React from "react";

function Main() {
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

export default Main;