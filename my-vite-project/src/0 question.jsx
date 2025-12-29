// Create a React functional component named Welcome that:
// Accepts a prop called name
// Displays the text:
// “Welcome, <name>”
// Uses JSX (not React.createElement)
// Render the component inside App.jsx

// function Welcome(props){
//     return(
//         <>
//         <h1>Welcome, {props.name}</h1>
//         </>
//     )
// }

// export default Welcome;

// Create a React functional component named Counter that:
// Uses useState to store a counter value (initial value = 0)
// Displays the counter value on the screen
// Has a button “Increment”
// On button click, the counter value should increase by 1
// import { useState } from "react";
// function Counter(){
//     const [count,setCount]=useState(0);
//     return(
//         <>
//         <h1>{count}</h1>
//         <button onClick={()=> setCount(count+1)}>Increment</button>
//         </>
//     )
// }
// export default Counter;

// Create a React functional component named LoginForm that:
// Contains two input fields:
// Email
// Password
// Uses controlled components
// On submit:
// Email must contain @
// Password length must be at least 6
// If validation fails, show an error message
// If validation passes, show “Login Successful"

// import { useState } from "react";

// function Login() {
//   const [email, changeEmail] = useState("");
//   const [pass, changepass] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     if (!email.includes("@")) {
//       setError("Invalid email");
//       return;
//     }
//     if (pass.length < 6) {
//       setError("Password must be at least 6 characters");
//       return;
//     }
//     setError("");
//     alert("Login Successful");
//   };
//   return (
//     <>
//       <form onSubmit={handleSubmit}>
//         <input type="text" placeholder="Enter your email" onChange={(e) => changeEmail(e.target.value)} /> <br/>
//         <input type="password" placeholder="Enter password" onChange={(e) => changepass(e.target.value)} /> <br/>
//         <button type="submit">Submit</button> <br/>
//         {error && <p style={{ color: "red" }}>{error}</p>}
//       </form>
//     </>
//   );
// }
// export default Login;



// Create a React functional component named Users that:
// Uses useEffect to fetch data from an API
// https://jsonplaceholder.typicode.com/users
// Stores the data in state using useState
// Displays a list of user names
// Shows “Loading…” while data is being fetched
