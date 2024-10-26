import { Link, Outlet } from "react-router-dom";


export function Login(){
    return(
        <>
        <div className="login-background">
            
        <button><Link to="Signup">Signup</Link></button>
     <Outlet/>
        </div>
     
        
       
        
        </>
    )
}