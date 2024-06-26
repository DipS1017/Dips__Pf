// import crab from "../../assets/crab finaljfif.jfif";


import appointment from "../../assets/appointment.png"
import ecommerce from "../../assets/ecommerce.jpg"
import rent from "../../assets/rentcalculator.jpg"
import frontend from "../../assets/Screenshot 2024-06-26 095747.png"



import "./project.css";


function Project() {
  
  return (
    <section className="Project">
      <aside className="Project__Title">PROJECT</aside>
         <article className="Project__Container">
      <article className="Project__Img">
          <img  src={frontend}/>
       </article>
        <article className="Project__main"> Front-End Codavatar
   
         <p className="Project__Sub"> Built a front-end website from a professional figma design in given time frame , added own responsive design.</p> 
         
         <p className="Project__Sub2">Html JavaScript Css Scss Vite</p>
         <aside className="Project__Button">
        <a href="https://github.com/DipS1017/front-end-challenge" target="_blank"><button>Source Code</button></a>
        <a href="https://front-end-challenge-sepia.vercel.app/" target="_blank"><button>Demo</button></a>
         </aside>
 
        </article>
       
      </article>


      <article className="Project__Container">
        
      <article className="Project__Img">
          <img  src={appointment}/>
       </article>
        <article className="Project__main">Doctor Appointment System
   
         <p className="Project__Sub"> Allows patients to schedule appointments, enables administrators to manage appointments dynamically. Features include client-side validation, real-time updates, and an admin panel for efficient system management.</p> 
         
         <p className="Project__Sub2">PHP JQuery CSS MySql JavaScript</p>
         <aside className="Project__Button">
        <a href="https://github.com/DipS1017/Medicalsite" target="_blank"><button>Source Code</button></a>
         <a href="http://hospital-doc.my-style.in/" target="_blank"><button>Demo</button></a>
         </aside>
 
        </article>
       
      </article>
      <article className="Project__Container">
      <article className="Project__Img">
          <img  src={ecommerce}/>
       </article>
        <article className="Project__main">E-commerce 
   
         <p className="Project__Sub"> Built a scalable e-commerce platform featuring secure user authentication, real-time updates, a dynamic product catalog, pagination, JWT, OpenAI API, Context, and an admin panel for product management.</p> 
         
         <p className="Project__Sub2">React Express Node MongoDB</p>
         <aside className="Project__Button">
        <a href="https://github.com/DipS1017/E-commerce-MERN" target="_blank"><button>Source Code</button></a>
        <a href="https://e-commerce-mern-puce.vercel.app" target="_blank"><button>Demo</button></a>
         </aside>
 
        </article>
       
      </article>
      <article className="Project__Container">
      <article className="Project__Img">
          <img  src={rent}/>
       </article>
        <article className="Project__main">Rent Calculator
   
         <p className="Project__Sub"> Developed a Rent Calculating System using Java with a Swing interface. Provides an innovative tool for accurately determining rental costs by calculating rental costs based on property details and user input.</p> 
         
         <p className="Project__Sub2">Java Swing </p>
         <aside className="Project__Button">
        <a href="https://github.com/DipS1017/Rent-Calculator" target="_blank"><button>Source Code</button></a>
        
         </aside>
 
        </article>
       
      </article>
    </section>
  );
}

export default Project;
