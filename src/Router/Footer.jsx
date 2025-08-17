 import logo1 from "../assets/KN-logo.png"
 import "./Footer.css"
 import {FaInstagram,FaTwitter,FaFacebook} from 'react-icons/fa'
 const Footer =()=>{ 
    return(
        <>
         <div className="main-nav-container1">
            <footer className="footer-container">
      <div className="footer-logo-container1">
                     <img className="img2" src={logo1} alt=""/>
                </div>
                 <div className="footer-social-icon">
                                     <p classsname='social-icon'>
                                        <link rel="stylesheet" href="in" />
                                        <FaInstagram size={'28px'} style={{color:"#fff" } }/>
                                     </p> 
                                     <p classsname='social-icon'>
                                        <link rel="stylesheet" href="in" />
                                        <FaTwitter size={'28px'} style={{color:"white" }}/>
                                        </p> 
                                     <p classsname='social-icon'>
                                        <link rel="stylesheet" href="in"  />
                                        <FaFacebook size={'28px'} style={{color:"white"  }}/>
                                        </p>
                                        </div>
                                        </footer>

                                        </div>
        </>
    )
}

export default Footer;
