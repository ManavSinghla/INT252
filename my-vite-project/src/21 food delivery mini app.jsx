import { Routes , Route } from "react-router-dom";
import Home from "./pages1/Home.jsx";
import List from "./pages1/Restaurent List.jsx";

function MyRoutes(){
    return(
        <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/restaurant-list" element={<List/>}/>
        </Routes>
    );
}

export default MyRoutes;