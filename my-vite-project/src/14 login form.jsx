// Login Form using useRef and useContext
import React, { useRef, useContext, createContext } from "react";
const AuthContext = createContext();
function LoginForm() {
    const auth = useContext(AuthContext);
    const usernameRef = useRef();
    const passwordRef = useRef();
    const handleSubmit = (e) => {
        e.preventDefault();
        const username = usernameRef.current.value;
        const password = passwordRef.current.value;
        if (username === "admin" && password === "password") {
            auth.setIsAuthenticated(true);
            alert("Login Successful!");
        } else {
            alert("Invalid Credentials");
        }
    };
    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Username: </label>
                <input type="text" ref={usernameRef} required />
            </div>
            <div>
                <label>Password: </label>
                <input type="password" ref={passwordRef} required />
            </div>
            <button type="submit">Login</button>
        </form>
    );
}

function App() {
    const [isAuthenticated, setIsAuthenticated] = React.useState(false);
    return (
        <AuthContext.Provider value={{ isAuthenticated, setIsAuthenticated }}>
            {isAuthenticated ? <h2>Welcome, you are logged in!</h2> : <LoginForm />}
        </AuthContext.Provider>
    );
}
export default App;
