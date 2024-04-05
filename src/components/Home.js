import React from 'react';
import pdf from '../pdf/Soni jaiswal (3).pdf';
//import hero from './data/hero.json';
import Typed from "typed.js";
import { useEffect } from 'react';
import { useRef } from 'react';


const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {

    const options ={
      strings:["welcome to my profile", "My Name is Soni jaiswal","I m web developer","React developer"],
    typeSpeed:50,
      backSpeed:50,
      loop:true
    } 
    const typed = new Typed(typedRef.current ,options)
    return() => {
      typed.destroy()
    }
  },{}) 
  return (
  
    <>
    <div className="container home"  id="home">
        <div className="left" 
        data-aos="fade-up-right" 
        data-aos-duration="1000"
      >
            <h1 ref={typedRef}>

            </h1>
            <a href={pdf}
             download="Resume.pdf"
             className="btn btn-outline-warning">Download resume</a>
        </div>
        <div className="right">
            <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={"/hero.avif"} alt="HERO" height="300px" weight="300px" />
            </div>
        </div>
    </div>
    </>
  );
};

export default Home;