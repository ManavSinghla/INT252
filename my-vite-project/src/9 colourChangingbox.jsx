// Make a component that displays a box colored red by default which changes its color when clicked the button.
import { useState } from "react";
function Box(){
    const [colour,setColor] = useState("red");
    return(
        <>  
        <div style={{backgroundColor: colour}} className={`h-20 w-20`}>
        </div>
        <div>
            <button onClick={()=>setColor("green")}>Change Color</button>
        </div>
        </>
    )
}

export default Box;