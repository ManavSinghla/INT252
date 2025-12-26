import { useNavigate } from "react-router-dom";
function RestaurentList() {
    const navigate = useNavigate();
    return(
        <>
        <ul>
            <li>Restaurent 1</li>
            <li>Restaurent 2</li>
            <li>Restaurent 3</li>
        </ul>
        <button className="m-2 p-4" onClick={()=> navigate("/")}>Back to Home</button>
        </>
    )
}

export default RestaurentList;