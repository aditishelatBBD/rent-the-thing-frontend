import logo from './logo.svg';
import './App.css';
import './style.css';
import './component/componentstyle.css';
import React, {useState} from "react";
import LoginForm from './component/LoginFormComponent';
import NavBar from './component/NavBar';
import {useNavigate,BrowserRouter, Routes, Route} from 'react-router-dom';
import RegisterFormComponent from './component/RegisterFormComponent.js';
import Home from './component/Home';
import NavBar2 from './component/NavBar2';
import Slider from './component/Slider.js';
import Footer from './component/Footer.js';
import HomeProducts from './component/HomeProducts.js';

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
    <div className="App">
      {/* <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="register" element={<RegisterFormComponent/>} />
        
      </Routes>
    </BrowserRouter> */}
  <NavBar></NavBar>
  <NavBar2></NavBar2>
  <Slider></Slider>
  <HomeProducts></HomeProducts>
  <Footer></Footer>
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
    </div>
  );
}

export default App;
