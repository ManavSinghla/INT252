import React,{createContext,useContext} from "react";
const NameContext=createContext();
function App(){
    return (
    <NameContext.Provider value={"John"}>
    <Child/>
    </NameContext.Provider>
    );
}

function Child(){
    const name=useContext(NameContext);
    return <h1>Hello, {name}!</h1>;
}

export default App;