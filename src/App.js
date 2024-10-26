import logo from './logo.svg';
import './App.css';
import { Home} from './home';
import { Login } from './login';
import { Signup } from './Signup';
import { BrowserRouter ,Route,Routes,Link} from "react-router-dom"
function App() {
  return (
    <div >
      <h1>hello</h1>
   
    <BrowserRouter>
   
        <Routes>

        <Route path="/" element={<Home/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path="login/Signup" element={<Signup/>}/>
        
       
        
        </Routes>
    </BrowserRouter>
      
    </div>
  );
}

export default App;
