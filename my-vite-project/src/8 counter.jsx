import { useState } from "react";
function Counter1(){
    const [count,setCount]=useState(0);
    return(
        <>
        <div>
            <h1 className="text-3xl font-bold">Counter</h1>
            <p>Count: {count}</p>
            <button className="m-5" onClick={()=>setCount(count+1)}>Increment</button>
            <button onClick={()=>setCount(count-1)}>Decrement</button>
        </div>
        </>
    )
}

export default Counter1;