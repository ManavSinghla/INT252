import { useParams } from "react-router-dom"
function Users(){
    const {id}=useParams();
    return(
        <>
        <h1>id: {id}</h1>
        </>
    )
}
export default Users;