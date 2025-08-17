import { Element } from "react-scroll"
import "./Contact.css"
import { useState } from "react"

const Contact = () => {
  const [data, setdata] = useState({
    name: "",
    email: "",
    message: ""
  })
  const [btn,setbtn]=useState(false)
  const input = (evt) => {
    const { name, value } = evt.target;
    setdata((prev) => {
      return {
        ...prev,
        [name]: value
      }
    } )}

    const submit  = (evt)=>{
      evt.preventDefault();
      console.log("form submitted",data)
      setbtn(true);
      setdata({name:"",email:"",message:""})
      setTimeout(()=>setbtn(false),3000 )
    }
     

  return (
    <>
      <Element name="contact">
        <div className="contact-container">
          <div className="txt-container">
            <h2 className="contact-heading">
              Let's connect.
            </h2>
            <p className="con-para">
              I'd love to uncover what's possible for your business . Your name. Email.A brief <br />
              message .Leave those  and i'll reply quickly. <br />


            </p>
            <p className="span">This will be great. </p>

          </div>
          <div className="form-container">

            <div className="felid-container">
              <form onSubmit={submit}>
                <div className="name-input-container">
                  <div className="lable">
                    <label htmlFor="name" className="lable-name">Name</label>
                    <input type="text" name="name" id="" className="input-name" onChange={input} value={data.name} required />
                  </div>
                  <div className="input">
                    <label htmlFor="email" className="lable-name">Email adress</label>
                    <input type="email" name="email" id="" className="input-email" onChange={input}  value={data.email} required/>


                  </div>
                </div>
                <div className="message">
                  <label htmlFor="message" className="lable-name">Message</label><br />
                  <textarea name="message" id="" className="msg-txt" onChange={input} value={data.message} required> </textarea>
                </div>
                <button type="submit" className="sbt-btn">{btn ? "Sent": "Send"}</button>

              </form>
            </div>

          </div>
        </div>
      </Element>


    </>
  )
}

export default Contact;
