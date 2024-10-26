import { Link} from "react-router-dom"
import { Login } from "./login"

export function Home(){
    return(
        <>
        
         <h1>this is home page</h1>
         <ul>
         <li><Link to="/">Home</Link></li>
                <li><Link to="/Login">Login</Link></li>
            </ul>
         
         
         
        </>
       
    )
}
