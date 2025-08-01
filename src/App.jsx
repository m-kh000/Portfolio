import React, { useEffect, useState } from "react";
import ScrollableCards from "./ScrollableCards";
function ContactForm() {
  // State to store the message
  const [message, setMessage] = useState('');

  // Handle input changes
  const handleChange = (e) => {
setMessage(e.target.value);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
  }};

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    document.body.classList.toggle("darkmode", isDarkMode);
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  return (
    <div className="flex">
      <div id="toolbar"className="flex-col w-[20vw] m-0 px-[0.1vw] pt-[5vw]  h-full round text-center">
        <button
          id="mode"
          className=" round "
          aria-label={isDarkMode ? "lightmode" : "darkmode"}
          onClick={toggleMode}
        >
          {isDarkMode ? (
            <img src="/icons/moon.png" alt="Moon" className="icon" />
          ) : (
            <img src="/icons/sun.png" alt="Sun" className="icon" />
          )}
        </button>

        <br />
        <br />
        <h1>
          a little bit <br />
          about myself
        </h1>

        <br />
        <div className="text-left">
          <p>Courses I've completed</p>
          <br />
          <ul className="">
            <li className="flex items-start gap-[0.5vw]">
              <img src="/icons/ai.png" className="icon " />
              <p>AWS Educate Machine Learning Foundations</p>
            </li>
            <li className="flex items-start gap-[0.5vw]">
              <img src="/icons/ai.png" className="icon " />
              <p>Introducing Generative AI with AWS</p>
            </li>
            <li className="flex items-start gap-[0.5vw]">
              <img src="/icons/ai.png" className="icon " />
              <p>Object Oriented Programming in Java - Duke University</p>
            </li>
            <li className="flex items-start gap-[0.5vw]">
              <img src="/icons/ai.png" className="icon " />
              <p>CS50 - Harvard</p>
            </li>
            <li className="flex items-start gap-[0.5vw]">
              <img src="/icons/paint.png" className="icon " />
              <p>Fundamentals of Graphic Design - CalArts</p>
            </li>
          </ul>
        </div>
      </div>
      <div id="rightside" className="p-0  w-[78vw]">
      <div className="z-20 absolute m-[3vw] place-items-center-safe "><p id="mira" >hi<li/>it's Mira Khnefes</p>
            <p >- A passionate ITE student always ready to work, create, and comunicate.</p>
            <div><a href = "#contact">
              <button >contcate me</button>
            </a></div>
            
      <ScrollableCards/>
<div className="float-left w-full">
  <p id="contact" className="text-[0.1vw]">
    <a href="https://mail.google.com/mail/u/0/?hl=nl#inbox" target="_blank">email: marmorakh2000@gmail.com</a>
    <li>phone: +963994222167</li>
    <li>working remotely</li>
  
  <form 
  action="https://formspree.io/f/xyzppzrd" 
  method="POST"
  data-success-redirect="https://chat.deepseek.com/"
  >
  <label htmlFor="message">Something wrong? Send a message:</label>
  <textarea 
    id="message" 
    name="message"
    className="block mt-[0.15vw] p-[0.3vw] border border-gray-600 rounded w-[20vw]" 
    rows="4" 
    placeholder="Enter your message here..."
    required
  />
  <button 
    type="submit" 
    className="mt-[0.3vw] round"
  >
    Submit
  </button>
</form>
</p></div>

      <div className=" p-0 "><p><a href="https://chat.deepseek.com/" target="_blank">@ Need Help</a></p>
      </div>
        
      </div>     

        <div id="image"className="absolute  z-0 p-0 ">
          {isDarkMode ? (<div className="w-[78vw]">
                <img src="/iconscircledark.png" className="img " />
                <img src="/iconscircledark.png" className="img mt-20 rotate-180 float-right" /></div>
              ) : (<div className="w-[78vw]">
                <img src="/iconscirclelight.png" className="img " />
                <img src="/iconscirclelight.png" className="img mt-20 rotate-180 float-right" /></div>
              )}
        </div>
    </div></div>
  );
}

export default App;
