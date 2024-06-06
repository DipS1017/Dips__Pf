import { useState, useEffect } from 'react';
import { Link } from 'react-scroll';
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState<boolean>(false);
  const [offset, setOffset] = useState<number>(-100);

  useEffect(() => {
    const updateOffset = () => {
      if (window.innerWidth < 768) {
        setOffset(-85); 
      } else {
        setOffset(-100); 
      }
    };

    updateOffset(); 
    window.addEventListener('resize', updateOffset); 

    return () => window.removeEventListener('resize', updateOffset); 
  }, []);

  return (
    <header>
      <aside className="nav__logo">
        <Link to="home" spy={true} smooth={true} offset={offset} duration={500}>
          Dipesh
        </Link>
      </aside>
      <div className="toggle-button" onClick={() => setOpen(!open)}>
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <nav className={open ? "navBar open" : "navBar"}>
        <ul className="nav__ul">
          <li>
            <Link to="home" spy={true} smooth={true} offset={offset} duration={500} onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link to="about" spy={true} smooth={true} offset={offset} duration={500} onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          
          
         
          <li>
            <Link to="design" spy={true} smooth={true} offset={offset} duration={500} onClick={() => setOpen(false)}>
              Project
            </Link>
          </li>
          <li>
            <Link to="contact" spy={true} smooth={true} offset={offset} duration={500} onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default Navbar;
