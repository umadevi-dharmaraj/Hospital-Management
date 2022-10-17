import { Component } from "react";
import { AuthContextProvider } from './context/AuthContext';
import Navbar from "./Navbar";
import Dashboard from "./pages/Dashboard";
import Settings from "./pages/Settings";
import Home from "./pages/Home";
import ContactUs from "./pages/ContactUs";
import Features from "./pages/Features";
import Pricing from "./pages/Pricing";
import About from "./pages/About";
import Footer from "./Footer";
import Account from "./pages/Account"
import User from "./pages/User"

import {BrowserRouter as Router, Route, Routes} from "react-router-dom";



function App(){
  console.log(window.location)
  let component 
  switch(window.location.pathname){
    case "/":
      component = <Home/>
      break;
    case "/About":
      component = <About/>
      break
    case "/Pricing":
      component = <Pricing/>
      break
    case "/Features":
      component = <Features/>
      break
    case "/ContactUs":
      component = <ContactUs/>
      break
    case "/Account":
      component = <Account/>
      break
    case "/User":
      component = <User/>
      break
  }
  return (
    <>
    <AuthContextProvider>
    <Navbar/>
    <div className="container">
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/About" element={<About/>}/>
        <Route path="/Pricing" element={<Pricing/>}/>
        <Route path="/Features" element={<Features/>}/>
        <Route path="/Account" element={<Account/>}/>
        <Route path="/User" element={<User/>}/>
        <Route path="/ContactUs" element={<ContactUs/>}/>
      </Routes>
    </div>
    <Footer/>
    </AuthContextProvider>
    </>
  )
} 

export default App