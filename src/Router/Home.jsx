 import {Link} from 'react-scroll'
import './Home.css'
 


const Home = ()=>{
  
    return(
        <>
         <div className="banner-container">
                <div className="contain">
                <h1 className="heading">Better Impact Through Design</h1>
                <br />
                   <p className="para-content">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ea voluptates fugiat, <br /> maiores quaerat totam ipsum maxime iure nesciunt nemo facere aliquid,<br /> tenetur exercitationem tempore consequatur impedit sapiente odit deserunt amet!
                     </p>
                      <br /> <br />
                      <Link to='contact' smooth={true} duration={500} offset={-70} >
                     <button className="contact-btn" >Contact Us</button>
            </Link>
            </div>
            </div>
        </>
    )
}
export  default Home