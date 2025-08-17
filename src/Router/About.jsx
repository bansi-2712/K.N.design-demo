import { useState } from "react";
import {} from '../assets/ABT.jpg'
import "./About.css"
 import  ABT from '../assets/aabt.jpg'
 import {Element} from 'react-scroll'

const About = ()=>{
    const [showmore,setshowmore]= useState(false)
    const togglemenu = ()=>{
        setshowmore(prev =>!prev)
    }
    return(
        <>
        <Element name="about">
      <div className="about-background">
<div className="about-content">
    <h1 className="abt-heading">About Us</h1> <br />
    <p className="abt-para-content">{
        showmore ? <>"We builds strong brand by designing impacts .    we collaborate to uncover the method require to stand  above the current and ever provide    a personable and one focused method when tacking every project"   Lorem ipsum dolor sit amet consectetur adipisicing elit.    Harum architecto impedit quasi,  autem eos sunt? Corrupti velit vero animi eius,  non excepturi sed illo expedita,     suscipit repellendus atque saepe autem."</>: <>We builds strong brand by designing impacts .  we collaborate to uncover the method require to stand  above the current and ever provide  a personable and   one focused method when tacking every project  Lorem ipsum dolor sit amet consectetur adipisicing elit.  Harum architecto impedit quasi, </>} <br /></p>
        <button onClick={togglemenu} className="abt-btn">{showmore?"showless":"Learn more"}</button>

</div>
<div className="img-container">
    <img src={ABT}alt=""  className="img1"/>
</div>
      </div>
      </Element>

        </>
    )
}

export default About;