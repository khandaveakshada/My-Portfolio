import"./WorkcardStyles.css";
import pro1 from "../assests/Intro/hbs3.webp";
import pro2 from "../assests/Intro/star1.png";
 import React from 'react';
 
 const Workcard = () => {
   return (
     <div className="work-container">
        <h1 className="project-heading"> Projects </h1>
        <div className="project-container">
            <div className="project-card">
         <img src={pro1}  alt="imag"/> 
         <h2 className="project-title"> Online  Hotel Booking System </h2>
         <div className="pro-details">
            <p> In a Hotel Booking system simplifies the booking process, enhances efficiency, and provides a seamless experience for guests.
                 With it's ability to integrate room availability, rates, secure payments, and real-time updates, 
                it saves time and increases commission-free bookings.</p>
         </div>
            </div>
             </div>      


             <div className="project-container">
            <div className="project-card2">
         <img src={pro2}  alt="imag"/> 
         <h2 className="project-title"> Starbucks Coffee Company Clone </h2>
         <div className="pro-details">
            <p> 
            A StarBucks CLONE website to be viewed only on PC/Laptop made with only HTML, CSS and  JavaScript and also using the flex properties of CSS.It's 
  with a beautiful user interface.In this project I faced some challenges for responsiveness and for thar I tried my best...
            </p>
         </div>
            </div>
             </div>      
     </div>
   );
 };
 
 export default Workcard;
 