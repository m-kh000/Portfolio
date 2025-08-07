import React, { useEffect, useState } from "react";
import ScrollableCards from "./ScrollableCards";
import Courses from "./courses";

function ContactForm() {
  const [message, setMessage] = useState('');

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage('');
  };
}

function App() {
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  function MyComponent() {
    const [name, setName] = useState("");
    const [comma, setComma] = useState(false);

    function handleNameChange(event) {
      event.target.value == "" ? setComma(false) : setComma(true)
      setName(event.target.value);
    }

    useEffect(() => {
      document.body.classList.toggle("darkmode", isDarkMode);
      localStorage.setItem("darkMode", isDarkMode);
    }, [isDarkMode]);

    const toggleMode = () => {
      setIsDarkMode((prev) => !prev);
    };

    return (
      <div className="flex">
        <div id="toolbar" className="flex-col w-[40vw] md:w-[280px] m-0 px-[6px] pt-[70px] h-full round text-center">
          <button
            id="mode"
            className=" round mb-7"
            aria-label={isDarkMode ? "lightmode" : "darkmode"}
            onClick={toggleMode}
          >
            {isDarkMode ? (
              <img src="/icons/moon.png" alt="Moon" className="icon" />
            ) : (
              <img src="/icons/sun.png" alt="Sun" className="icon" />
            )}
          </button>

          <h1>
            a little bit <br />
            about myself
          </h1>

          <br />
          <div className="text-left items-start gap-[7px] ">
            <Courses/>
          </div>
        </div>
        <div id="rightside" className="p-0 w-[1902px] md:w-[1092px]">
          <div className="z-20 absolute m-[42px] place-items-center-safe ">
            {/* ✅ Fix 1: Remove <li/> inside <p> */}
            <p id="mira">{`hi${comma ? `, ${name}` : ''}`}<li/> it's Mira Khnefes</p>
            <p >- A passionate ITE student always ready to work, create, and comunicate.</p>
            <p className="my-28">
              I wanna get to know you too.<br/>
              <input 
                value={name} 
                onChange={handleNameChange} 
                type="text"  
                placeholder="Could you type your name:" 
              />
            </p>         
            <div><a href = "#contact">
              <button >contcate me</button>
            </a></div>
            
          <ScrollableCards/>
          
          {/* ✅ Fix 2: Move <form> outside of <p> */}
          <div id="contact" className="text-[15px] float-left w-full">
              <a href="https://mail.google.com/mail/u/0/?hl=nl#inbox" target="_blank">email: marmorakh2000@gmail.com</a>
              <br />
              <span>phone: +963994222167</span><br />
              <span>working remotely</span>
           
          {/* Form moved outside the <p> */}
          <form 
            action="https://formspree.io/f/xyzppzrd" 
            method="POST"
            data-success-redirect="https://chat.deepseek.com/"
          >
            <label htmlFor="message">Something wrong? Send a message:</label>
            <textarea 
              id="message" 
              name="message"
              className="block mt-[2px] p-[4px] border border-gray-600 rounded w-[280px]" 
              rows="4" 
              placeholder="Enter your message here..."
              required
            />
            <button 
              type="submit" 
              className="mt-[4px] round"
            >
              Submit
            </button>
          </form>
          </div>
          <div className=" p-0 "><p><a href="https://chat.qwen.ai/c/29d202f2-57b2-4b27-a2be-b1f8fb4f116f  " target="_blank">@ Need Help</a></p>
          </div>
            
          </div>     

          <div id="image" className="absolute  z-0 p-0 ">
            {isDarkMode ? (<div className="w-[1092px]">
                  <img src="/icons/circledark.png" className="img " />
                  <img src="/icons/circledark.png" className="img mt-20 rotate-180 float-right" /></div>
                ) : (<div className="w-[1092px]">
                  <img src="/icons/circlelight.png" className="img " />
                  <img src="/icons/circlelight.png" className="img mt-20 rotate-180 float-right" /></div>
                )}
          </div>
      </div>
      </div>
    );
  }

  return <MyComponent />;
}

export default App;