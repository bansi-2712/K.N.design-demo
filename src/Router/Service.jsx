import { useState } from "react";
import './Service.css'
import  logo from '../assets/srslogo.png'
import prnt from '../assets/prnt.jpg'
import web from '../assets/WEBDESIGN.jpg'
import {Element} from "react-scroll"

const Service = ()=>{
    const [showmore,setshowmore]=useState(false)

    const togglemenu = ()=>{
        setshowmore(prev=>!prev)
    }
    return(
        <>
        <Element name="service">
      
        <div className="SERVICE-MAIN-CONTAINER">
            <div className="MAIN-CONTENT">
         <div className="IMG-CONTAINER">
             <img src={logo} alt="logo"  className="logo"/>
         </div>
         <div className="TEXT-CONTAINER">
            <h1>Logo Design</h1> <br />
            <p className="serv-para">
           {
            showmore?"Impact through simple,succinate and thoughful logo design.so much is possible with so little. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Debitis ipsa quisquam omnis aperiam reiciendis eius, accusantium quas et optio provident facere corporis quos rerum recusandae dolorum necessitatibus repellat minus dolore":"Impact through simple,succinate and thoughful logo design.so much is possible with so little."
           }
           </p> <br />
             <button onClick={togglemenu} className="serv-btn" >{showmore?"Show-Less":"Learn More"}</button>
         </div>
            </div>
            <div className="MAIN-CONTENT">
         <div className="IMG-CONTAINER">
            <img src={prnt} alt="print" className="print-img" />
         </div>
         <div className="TEXT-CONTAINER">
            <h1>Print Design</h1> <br />
            <p className="serv-para">
               {showmore?"Creative layouts that provoke though,emotions,action. Becuse screent can't capture everthings.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eveniet optio, laboriosam ut voluptate totam minima saepe ducimus qui quisquam perferendis fuga voluptates aperiam sed at nulla explicabo magni non.":"Creative layouts that provoke though,emotions,action. Becuse screent can't capture everthings." 
               }
               
               </p> <br />
            <button onClick={togglemenu} className="serv-btn">{showmore?"Show-less":"Learn more"}</button>
         </div>
            </div>
            <div className="MAIN-CONTENT">
         <div className="IMG-CONTAINER">
            <img src={web} alt="web" className="web-img" />
         </div>
         <div className="TEXT-CONTAINER">
            <h1>Web Design</h1><br />
            <p className="serv-para">{showmore?"Striking in all the right ways .User friendly and technically sound in all the essentials ones.Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatum eveniet optio, laboriosam ut voluptate totam minima saepe ducimus qui quisquam perferendis fuga voluptates aperiam sed at nulla explicabo magni non.":"Striking in all the right ways .User friendly and technically sound in all the essentials ones."}</p> <br />
            <button onClick={togglemenu} className="serv-btn">{showmore?"Show-less":"Learn more"}</button>
         </div>
            </div>
             
            
            
        </div>
        </Element>
       
        
        </>
    )
}


export default Service;