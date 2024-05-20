import React,{useState} from 'react';
import { Link } from 'react-router-dom';
import { nav } from './data/data';
import './Navbar.css';

function Navbar() {
  return (
    <>
   <header>
        <div className="container flex">
           <div className="logo">
            <img src='./images/Logo.png' alt='' />
           </div>
           <div className="nav">
            {/* <ul className='flex'>
                {nav.map((list,index)=>(
                    <li key={index}>
                        <Link to={list.path}>{list.text}</Link>
                    </li>
                ))}
            </ul> */}
            <ul>
                <>About</>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <>Service</>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <>Service Developers</>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                <>Contact Us</>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
            </ul>
           </div>
           <div className="button flex">
            {/* <h4>
                <span>2</span> My List
            </h4> */}
           </div>
        </div>
   </header>
   </>
  )
}
export default Navbar
