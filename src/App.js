import logo from './logo.svg';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./component/navbar"
import Home from "./pages/home"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Deshboard from "./pages/deshboard"
import { useState } from 'react';
import { Toaster } from "react-hot-toast";
import PrivateRoute from "./component/privateroute";


  function App() {
    const [login , setlogin] = useState(false)
 return (
   <div className='w-screen h-screen bg-black flex flex-col'>

    <Navbar login={login} setlogin={setlogin}/>

    <Routes>

      <Route path="/" element={<Home/>} />
          <Route path="/login" element={<Login setlogin={setlogin}/>} />
                <Route path="/signup" element={<Signup/>} />
                <Route path='/deshboard' element = 
                { <PrivateRoute login={login}>
                    <Deshboard/>
                  </PrivateRoute>}/>
                 
   </Routes>
   </div>
 );
}
 
export default App;
