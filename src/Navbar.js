import { Link, useMatch, useResolvedPath } from "react-router-dom"
import Dropdown from "./dropdown";
import React, {useState} from 'react';
import healthlogo from "./images/healthapp.png";

import { UserAuth } from "./context/AuthContext.js";


export default function Navbar(){
    const [click,setClick] = useState(false)
    const [dropdown, setDropdown] = useState(false)

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false);
    const { user, logOut } = UserAuth();


    const onMouseEnter = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        }
        else{
            setDropdown(true)
        }
    };

    const onMouseLeave = () => {
        if(window.innerWidth < 960){
            setDropdown(false)
        }
        else{
            setDropdown(false)
        }
    };

    const path = window.location.pathname
    return <nav className="nav">
        <div >
        <Link to="/" className="site-title">
        <img src={healthlogo} alt="healthlogo" className="healthlogo"/>
        <span>HealthApp</span>
        </Link>
        
        </div>
        

        <ul className='navbar-nav'>
            <CustomLink to="/About">About</CustomLink>
            <CustomLink to="/Pricing">Pricing</CustomLink>
            <CustomLink to="/Features">Features</CustomLink>
            <CustomLink to="/Contact Us">Contact Us</CustomLink>
            <CustomLink to="/Settings">Settings &nbsp; <i className="fas fa-caret-down"/></CustomLink>
            {dropdown && <Dropdown/>}
           
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    const resolvedPath = useResolvedPath(to)
    const isActive = useMatch({path: resolvedPath.pathname, end:true})
    return(
        <li className={isActive ? "active": ""}>
            <Link to={to}{...props}>{children}</Link>
        </li>
    )
}