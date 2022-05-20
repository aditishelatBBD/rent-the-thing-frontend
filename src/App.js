import logo from './logo.svg';
import './App.css';
import './style.css';
import './component/componentstyle.css';
import React, {useState} from "react";
import Index from './pages/Index';

function App() {

 // const navigate = useNavigate();// for navigation

  // const [isShowLogin,setIsShowLogin] = useState(false)
  // const handleLoginClick = () => {
  //   setIsShowLogin((isShowLogin) => !isShowLogin)
  // }
  // // const [isShowRegister,setIsShowRegister] = useState(false)
  // const handleRegisterClick = () => {
    
  //   console.log("regi clicked");
  //   //navigate("/register");
  // }

  return (
    <>
    <Index></Index>
    </>
);
   
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="register" element={<RegisterFormComponent/>} />
        
      </Routes>
    </BrowserRouter> */}

      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
  
}

export default App;
