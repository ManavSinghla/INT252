// Command to run program
// npm init vite my-vite-project

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