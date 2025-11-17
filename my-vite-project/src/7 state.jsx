import { useState } from "react";
function Counter(){
    const [count,setCount]=useState(0);
    return(
        <>
        <div>
            <h1>Counter App</h1>
            <p>Count: {count}</p>
            <button onClick={()=>setCount(count+1)}>Increment</button>
        </div>
        </>
    )
}
export default Counter;