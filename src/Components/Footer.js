import "./FooterStyles.css";

import React from "react";
import { FaHome,FaPhone ,FaMailBulk,FaInstagram, FaLinkedin, FaTelegram }from "react-icons/fa";



const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
            <div className="location">
                <FaHome  size={30}   style={{ color: "#fff", marginRight: "2rem" }}/>
            
            <div>
                <p>Laxmi Garden Society,
                    PH-1, 'B'wing,
                    Flat no-401</p>
                <p>N.D.A road,
                    Deshmukhwadi,Shivane,
                    Pune-411023</p>
            </div>
            </div>

<div className="Phone">
<h4><FaPhone  size={20}   style={{ color: "#fff", marginRight: "2rem" }}/>
+91-7972643580</h4>
</div>

<div className="email">
<h4><FaMailBulk  size={20}   style={{ color: "#fff", marginRight: "2rem" }}/>
khandaveakshu2023@gmail.com</h4>
</div>
       
     </div>
 
        <div className="right">
        <h4> About me </h4>
        <p> This is Akshada Khandave.By Profession I'm a Web Developer.I enjoy discussing  new Projects  and design challenges. </p>

<div className="Social">
<FaInstagram  size={30}   style={{ color: "#fff", marginRight: "1rem" }}/>
<FaTelegram  size={30}   style={{ color: "#fff", marginRight: "1rem" }}/>
<FaLinkedin  size={30}   style={{ color: "#fff", marginRight: "1rem" }}/>
</div>


      </div>
      </div>
      </div>
  )
}

export default Footer;

