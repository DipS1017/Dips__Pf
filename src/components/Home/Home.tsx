
import Typewriter from 'typewriter-effect';
import "./home.css"
function Home() {
  return (
    <section className="home__section" id="home">
  
  
    <article className="Intro-Main">
      Dipesh Shrestha
     
      <aside className="Greet-Main">
    Hello, I'm
  </aside>
    <aside className="Title"><Typewriter  options={{
    
    autoStart: true,
    loop: true,
  }}
  onInit={(typewriter) => {
    typewriter.typeString('Front-End Engineer')
      .pauseFor(2500)
      .deleteAll()
      .typeString('FullStack Developer')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Back-End Developer')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Ui/Ux Designer')
      .pauseFor(2500)
      .deleteAll()
      .typeString('Graphic Designer')
      .pauseFor(2500)
      .deleteAll()
      .start();
      

  }}
/></aside>
<button  className="Resume">Resume</button>
    </article>
      
      
           
        
        
    </section>
  )
}

export default Home;