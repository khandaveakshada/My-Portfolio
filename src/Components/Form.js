import "./FormStyle.css";
import React from 'react';

const Form = () => {
  return <div className="form">
    <form>
      <label>Your Name</label>
      <input type="text"></input>
      <br/>
      <label>Email</label>
      <input type="email"></input>
      <br/>
      <label>Subject</label>
      <input type="text"></input>
      <br/>
      <label>Message</label>
      <textarea rows="6"  placeholder="Type your message here"/>
      <br/>
      <button className="btn"> Submit </button>
    </form>
  </div>
  
  
};

export default Form;
