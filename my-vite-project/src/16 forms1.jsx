import {useState} from 'react';
function App(){
    const[name,setName]=useState('');
    const[password, setpassword]=useState('');
    const handleSubmit=(e)=>{
        e.preventDefault();
        alert(`Username and password submitted: ${name}, ${password}`);
    };
    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={name}
            onChange={(e)=>setName(e.target.value)}
            placeholder="Enter Username"
            />
            <input 
            type="password"
            value={password} 
            onChange={(e)=>setpassword(e.target.value)} 
            placeholder="Enter password"
            />
            <button type="submit">Submit</button>
        </form>
    );
}
export default App;