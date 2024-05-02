import { Link } from "react-router-dom";
import "./AboutContentStyles.css";
import React from 'react';

import React1 from "../assests/Intro/myimage.jpeg";


const AboutContent = () => {
  return (
    <div className="about">
        <div className=" left">
            <h1>Who Am I? </h1>
            <p> My full name is Akshada Jyoti-Rajendra Khandave.<br/>I am born in Ahmadanagar 
            and Brought-up in Pune.
             I completed my graduation in BSc(Computer Science) in shree Siddhivinayk College.I am a full stack Developer.
             I like to Design and create websites and applications for various platforms.<br/>
             I am Seeking a position in an Organization where I can display my abilities and knowledge to contribute 
for the growth of an organization simultaneously helping to fulfill my Carrer objectives and widen my 
knowledge in this rapid changing world.
</p>
            <Link to="/contact">
                <button className="btn">contact</button>
            </Link>
        </div>
      
<div className="right">
    <div className="img-container">
        
        <div className="img-stack top">
            <img src={React1}  className="img"  alt="true"/>
        </div>
    </div>
</div>

      
    </div>
  );
};

export default AboutContent;
