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

// import { useState, useEffect } from "react";
// function Users() {
//   const [data, setData] = useState([]);
//   const [load, changeLoad] = useState(true);

//   useEffect(() => {
//     fetch("https://jsonplaceholder.typicode.com/users")
//     .then((res)=>res.json())
//     .then((data)=>{
//         setData(data);
//         changeLoad(false);
//     });
//   }, []);

//   if (load) return <h1>Loading....</h1>;
//   return (
//     <>
//       <h1>User List</h1>
//       <ul>
//         {data.map((user)=>(
//             <li>{user.name}</li>
//         ))}
//       </ul>
//     </>
//   );
// }

// export default Users;



// Create a React app using react-router-dom that:
// Has two pages:
// Home page
// About page
// Uses BrowserRouter, Routes, and Route
// Displays navigation links to switch between pages
// When user clicks About, it should navigate to /about
// import {Link} from "react-router-dom"
// function NavBar(){
//     return(
//         <>
//         <Link to="/">Home</Link>
//         <Link to="/about">About</Link>
//         </>
//     )
// }
// export default NavBar;

// App.jsx
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import NavBar from "./NavBar";
// import Home from "./pages/Home";
// import About from "./pages/About";

// function App() {
//   return (
//     <BrowserRouter>
//       <NavBar />
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </BrowserRouter>
//   );
// }

// export default App;


// Displays a list of users on Home page
// Each user name should be clickable
// On click, navigate to:
// /user/:id
// On the User page, display:
// User ID: <id>
// Use useParams() to read the route parameter

// function Home(){
//     const users=[
//         { id:1, name: "Manav"},
//         { id:2, name: "ABC"},
//         { id:3, name: "XYZ"}
//     ]
//     return(
//         <>
//         <h1>Users List</h1>
//         <ul>
//             {users.map((user)=>(
//                 <li><Link to={`/users/${user.id}`}>{user.name}</Link></li>
//             ))}
//         </ul>
//         </>
//     )
// }
// export default Home;

// App.jsx
// import './App.css';
// import Home from './0 question';
// import {Route, Routes, BrowserRouter } from 'react-router-dom';
// import User from './pages/user'

// function App(){
//   return (
//   <>
//   <BrowserRouter>
//   <Routes>
//     <Route path='/' element={<Home/>} />
//     <Route path='/users/:id' element={<User/>} />
//   </Routes>
//   </BrowserRouter>
//   </>
//   );
// }

// export default App;