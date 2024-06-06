import './index.css';
import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import About from "./components/About/About";


import Contact from "./components/Contact/Contact";
import { useEffect, useState } from "react";
import { ClipLoader } from "react-spinners";


function App() {
  const [screenLoading, setScreenLoading] = useState(false);
  useEffect(()=>{})

  useEffect(() => {
    setScreenLoading(true);
    setTimeout(() => {
      setScreenLoading(false);
    }, 1000);
  }, []);

  
 

  return (
    <>
      {screenLoading ? (
        <ClipLoader color={"#66FDF0"} loading={screenLoading} className="RLoader" size={150} />
      ) : (
        <>
          <Navbar />
          <Home />
          <About />
          
          
          <Contact />
        </>
      )}
    </>
  );
}

export default App;
