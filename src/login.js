import { Link, Outlet } from "react-router-dom";
import "./Login.css"

// export function Login(){
//     return(
//         <>
//         <div className="login-background">
//             <div className="c1">
//             <b>Your name:</b>
//                 <br></br>
//                 <input type="text" placeholder="enter your name"></input>
//                 <br></br>
//                 <b>Password</b>
//                 <br></br>
              
//                 <input type="text" placeholder="enter password"></input>
                
                
//                 <br>
//                 </br>
//                 <h3>Dont have an account Signup..</h3>
//                 <button><Link to="Signup">Signup</Link></button>
//             </div>
           
            
       
//      <Outlet/>
//         </div>
     
        
       
        
//         </>
//     )
// }

export function Login() {
    return (
      <>
        <div className="login-background">
          <div className="c1">
            <h2>Login</h2>
            <input type="text" placeholder="Enter your Mail" />
            <input type="password" placeholder="Enter password" />
            <button>Continue</button>
            <p>Don't have an account? <Link to="Signup">Signup</Link></p>
          </div>
        </div>
        <Outlet />
      </>
    );
  }