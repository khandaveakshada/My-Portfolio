import "./HeroimgStyle.css";
import IntroImg from "../assests/Intro/bg.jpg";
import { Link } from "react-router-dom";
import React from 'react';

const Heroimg = () => {
  return (
    <div className="hero">
        <div className="mask">
            <img className="intro-img" src={IntroImg} alt="IntroImg"/>

        </div>
        <div className="content">
          <p> Hii, I'm Akshada!!... </p>
          <h1> I'm Full Stack Developer..</h1>
<div>
  <Link to="/Project"   className="btn">Project</Link>
  <Link to="/Contact"   className="btn   btn-light">Contact</Link>
</div>
        </div>
      
    </div>
  );
};

export default Heroimg;
