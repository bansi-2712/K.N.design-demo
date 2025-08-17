import React, { useState } from "react";
import { Link } from "react-scroll"
import  LOGO from '../assets/KN-logo.png'

import  './Navbar.css'
 
 
import {FaInstagram,FaTwitter,FaFacebook} from 'react-icons/fa'
import {HiOutlineMenu,HiX} from 'react-icons/hi'
 

const Navbar = () => {
    const [OpenMenu,setOpenMenu]=useState(false)
    const togglemenu = ()=>{
        setOpenMenu(prev =>!prev)
    }
    // const closemenu = ()=>{
    //     setOpenMenu(false)
    // }

    return (
        <>
            <div className="main-nav-container">
                <div className="logo-container">
                     <img className="img" src={LOGO} alt=""/>
                </div>
                   <button className="hamburger" onClick={togglemenu}>{OpenMenu?<HiX size={28}/>:<HiOutlineMenu size={28}/>}
      </button>
                <div className= {`nav-container ${OpenMenu?"open":""}`}>
                    <div className="link-container">
                    <Link className="link" to='about' smooth={true} duration={500} offset={-70} onClick={togglemenu}>About</Link>
                    <Link className="link" to='service'smooth={true} duration={500} offset={-70} onClick={togglemenu}>Service</Link>
                    <Link className="link" to='contact' smooth={true} duration={500} offset={-70} onClick={togglemenu}>Contact</Link>
                    </div>
                    <div className="social-icon-container">
                     <p classsname='social-icon'>
                        <link rel="stylesheet" href="in" />
                        <FaInstagram size={'20px'} style={{color:"#fff" } }/>
                     </p> 
                     <p classsname='social-icon'>
                        <link rel="stylesheet" href="in" />
                        <FaTwitter size={'20px'} style={{color:"white" }}/>
                        </p> 
                     <p classsname='social-icon'>
                        <link rel="stylesheet" href="in"  />
                        <FaFacebook size={'20px'} style={{color:"white"  }}/>
                        </p>
                        </div>
                </div>

            </div>

            {/* mobile menu */}
     
     
      {/* <div className={`mobile-menu ${OpenMenu?"open":""}`} aria-label="Mobile">

 
        <Link className="mobile-link" to="about" smooth={true}duration={500} offset={-80} onClick={closemenu}>About</Link>
        <Link className="mobile-link" to="service" smooth={true}duration={500} offset={-80} onClick={closemenu}>Service</Link>
        <Link className="mobile-link" to="contact" smooth={true}duration={500} offset={-80} onClick={closemenu}>Contact</Link>

        <div className="mobile-social">
            <a href="insta"  target="_blank" rel="noreferrer" aria-label="instagram"><FaInstagram size={20}/> </a>
            <a href="twitter"  target="_blank" rel="noreferrer" aria-label="twitter"><FaTwitter size={20}/> </a>
            <a href="facebook"  target="_blank" rel="noreferrer" aria-label="facbook"><FaFacebook size={20}/> </a>
        </div>
     </div> */}
        
     



            {/* <div className="banner-container">
                <div className="contain">
                <h1 className="heading">Better Impact Through Design</h1>
                <br />
                   <p className="para-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates fugiat, <br /> maiores quaerat totam ipsum maxime iure nesciunt nemo facere aliquid,<br /> tenetur exercitationem tempore consequatur impedit sapiente odit deserunt amet!
                     </p>
                      <br /> <br />
            <button className="contact-btn" >Contact Us</button>
            </div>
            </div> */}
        </>
    )

}

export default Navbar