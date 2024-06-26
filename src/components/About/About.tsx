// import crab from "../../assets/crab finaljfif.jfif";
import react from "../../assets/react-javascript-js-framework-facebook-svgrepo-com.svg";
import typescript from "../../assets/typescript-logo-svgrepo-com.svg";
import node from "../../assets/nodejs-svgrepo-com.svg";
import figma from "../../assets/figma-svgrepo-com.svg";
import css from "../../assets/css-svgrepo-com.svg";
import bootstrap from "../../assets/bootstrap-svgrepo-com.svg";
import tailwind from "../../assets/tailwind-svgrepo-com.svg";
import mongodb from "../../assets/mongo-svgrepo-com.svg";
import mysql from "../../assets/mysql-logo-svgrepo-com.svg";
import php from "../../assets/php-svgrepo-com.svg";
import java from "../../assets/java-svgrepo-com.svg";

import "./about.css";

function About() {
  return (
    <section className="about">
      <aside className="About__Title">ABOUT</aside>
      <article className="container__grid">
        {/* <img className="crab" src={crab} /> */}
        <article className="About__main">
          I'm a Full Stack Developer 👨‍💻 and current BCA undergraduate 📚,
          passionate about creating dynamic and efficient web solutions 🌐. With
          a keen interest in both front-end and back-end development,
          <br />I strive to build user-friendly and robust applications 🚀
          <br></br>
          <p className="About__Sub">Skills:</p>
          <article className="Skill__Img">
            <img src={react} />
            <img src={node} />
            <img src={typescript} />
            <img src={figma} />
            <img src={css} />
            <img src={bootstrap} />
            <img src={tailwind} />
            <img src={mongodb} />
            <img src={mysql} />
            <img src={php} />
            <img src={java} />
          </article>
        </article>
      </article>
    </section>
  );
}

export default About;
