import { useState } from "react";

function Form(){
    const [email, setEmail]= useState("");
    const handleSubmit= (e)=>{
        e.preventDefault();
        alert(`Form submitted with email: ${email}`);
    }
    return (
        <form onSubmit={handleSubmit}>
            <input
                type="email" 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                placeholder="Enter email" 
            />
            <button type="submit">Submit</button>
        </form>
    );
}

export default Form;