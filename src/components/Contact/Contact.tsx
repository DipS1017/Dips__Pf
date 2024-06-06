import './contact.css'

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

    <button  className="Form-Submit" type="submit" value="Submit"/>

        </form>
    
    
    

    
  
</section>
  )
}

export default Contact