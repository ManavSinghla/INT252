import React,{createContext, useContext } from "react";

const ThemeContext = createContext();
function App(){
    return (
        <ThemeContext.Provider value={"dark"}>
            <Child />
        </ThemeContext.Provider>
    );
}
function Child(){
    const theme = useContext(ThemeContext);
    const styles = {
        backgroundColor: theme === "dark" ? "#333" : "#fff",
        color: theme === "dark" ? "#fff" : "#000"
    };
    return (
        <div style={styles}>
            <h1>{theme === "dark" ? "Dark Mode" : "Light Mode"}</h1>
            <p>This is an example of {theme} theme.</p>
            <button onClick={()=>theme=useContext("light")}>Toggle Theme</button>

        </div>
    );
}

export default App;