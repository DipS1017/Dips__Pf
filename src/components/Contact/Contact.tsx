import './contact.css';
import x from "../../assets/X_icon.svg";
import github from "../../assets/github-142-svgrepo-com.svg";
import gmail from "../../assets/icons8-gmail.svg";
import linkedin from "../../assets/linkedin-svgrepo-com.svg";
import { FormEvent, useRef } from 'react';
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';

import 'react-toastify/dist/ReactToastify.css';



const Contact = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmail = (e:FormEvent) => {
    e.preventDefault();

    if (form.current){
    emailjs.sendForm('service_rt3qr1q', 'template_ryg8wci', form.current, 'vcyi6Z0F0Yy-PdShi')
      .then(
        (result) => {
          console.log('Message Successfully Sent', result.text);
          toast.success('Message Successfully Sent', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: true,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
            
            
            });
           
            form.current?.reset(); 
        },
        (error) => {
          console.log('FAILED...', error.text);
          toast.error('Message failed.', {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "dark",
           
            });
        }
      );
  }
};

  return (
    <section className="Contact" id="contact">
      <aside className="Contact__Title">Contact</aside>
      
      <form ref={form} onSubmit={sendEmail} className="Contact__form">
        <label className="label__name">Name</label>
        <input type="text" id="fname" name="user_name" placeholder="Full Name" required />

        <label>Email</label>
        <input type="email" id="lname" name="user_email" placeholder="youremail@gmail.com" required />

        <label>Message</label>
        <textarea id="subject" name="message" placeholder="Message" required></textarea>

        <button className="Form-Submit" type="submit">Submit</button>
        <h1>OR</h1>
      </form>

      <article className="Contact__Img">
        <a href="https://www.linkedin.com/in/dipesh-shrestha-145a1a300/" target="_blank" rel="noopener noreferrer">
          <img src={linkedin} alt="LinkedIn" />
        </a>
        <a href="mailto:dipeshshrestha4220@gmail.com" target="_blank" rel="noopener noreferrer">
          <img src={gmail} alt="Gmail" />
        </a>
        <a href="https://github.com/DipS1017" target="_blank" rel="noopener noreferrer">
          <img src={github} alt="GitHub" />
        </a>
        <a href="https://x.com/dips__10" target="_blank" rel="noopener noreferrer">
          <img src={x} alt="X" />
        </a>
      </article>
      <article className="farewell">Thank You for Visiting!</article>
      <ToastContainer/>    </section>
  );
}

export default Contact;
