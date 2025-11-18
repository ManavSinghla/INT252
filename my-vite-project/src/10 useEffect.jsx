import { useEffect } from "react";
function WelcomeMessage(){
    useEffect(()=>{
        alert("Class has started!");
    },[]);
    return(
        <>
        <h2>Welcome Students!</h2>
        </>
    )
}

export default WelcomeMessage;