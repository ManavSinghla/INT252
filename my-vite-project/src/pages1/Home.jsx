import { useNavigate } from "react-router-dom";

function Home(){
    const navigate = useNavigate();
    return(
        <>
        <h1>Welcome to Home Page</h1>
        <button onClick={()=>navigate("/restaurant-list")}>Restaurant List</button>
        </>
    );
}
export default Home;