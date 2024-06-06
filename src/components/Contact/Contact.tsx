import './contact.css'
import x from "../../assets/X_icon.svg"
import github from "../../assets/github-142-svgrepo-com.svg"
import gmail  from "../../assets/icons8-gmail.svg"
import linkedin  from "../../assets/linkedin-svgrepo-com.svg"

function Contact() {
  return (
    <section className="Contact" id="contact">
    <aside className="Contact__Title">Contact</aside>
    
        <form className="Contact__form">
        <label className="label__name"> Name</label><br></br>
        <input type="text" id="fname" name="firstname" placeholder="Full Name"/><br></br>

    <label >Email</label><br></br>
    <input type="text" id="lname" name="lastname" placeholder="youremail@gmail.com"/><br></br>

  
    <label >Message</label><br></br>
    <input type="text" id="subject" name="subject" placeholder="Message" ></input><br></br>

    <button  className="Form-Submit" type="submit" value="Submit">Submit</button>
<h1>OR</h1>
        </form>
    <article className="Contact__Img">
    <a href="https://www.linkedin.com/in/dipesh-shrestha-145a1a300/" target="_blank"><img src={linkedin}/></a>
    <a href="mailto:dipeshshrestha4220@gmail.com" target="_blank"><img src={gmail}/></a>
    <a href="https://github.com/DipS1017" target="_blank"><img src={github}/></a>
    <a href="https://x.com/dips__10" target="_blank"><img src={x}/></a>
      
    </article>
    <article className="farewell">Thank You for Visiting! </article>
    
    

    
  
</section>
  )
}

export default Contact