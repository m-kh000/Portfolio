import './styles/base-color.css';
import './styles/base-sizes.css';
import './styles/cards.css';
import './styles/buttons.css';
import React, { useEffect, useState } from "react";
import ScrollableCards from "./ScrollableCards";
import Courses from "./Courses";
import CardsParagraphs from "./CardsParagraphs";
import moon from '/icons/moon.png';
import sun from '/icons/sun.png';
import clight from '/icons/circlelight.png';
import cdark from '/icons/circledark.png';


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
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  function toggletoolbar(){
    setSidebarOpen((prev) => !prev);
  }
  
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
        {/* Responsive Toolbar: Hidden on small screens, shown on md+ */}
<div id="toolbar" className={`
  fixed z-30 top-3 shadow-black 
  transform transition-transform duration-700 ease-in-out 
  ${sidebarOpen ? 'translate-x-0' /*'left-1'*/ : '-translate-x-42'}
  md:translate-x-0 md:relative md:shadow-none md:rounded-none
`}
>
    <button
      id="mode"
      className="round mb-7"
      aria-label={isDarkMode ? "Switch to light mode" : "Switch to dark mode"}
      onClick={toggleMode}
    >
      {isDarkMode ? (
        <img src={moon} alt="Moon" className="icon" />
      ) : (
        <img src={sun} alt="Sun" className="icon" />
      )}
    </button>

    <h1 className="font-bold">
      a bit <br /> about myself
    </h1>

    <br />
    <div className="text-left items-start gap-[7px]">
      <Courses />
    </div>
</div>

{/* Button to open sidebar on small screens */}
<button
  id="menu"
  onClick={toggletoolbar}
  className={`px-2 text-right w-[40px] text-[12px] md:hidden fixed top-[12px] z-30 ${sidebarOpen ? 'left-38' : '-translate-x-5'  }`}
>
  ☰ 
</button>


        <div id="rightside" className="p-0 ">
          <div className="z-20 absolute mt-[15px] mx-0 p-5 md:p-0 place-items-center">

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
          <CardsParagraphs />

          <div className="w-full place-items-center"> 
          <div id="contact" >
              <a href="mailto:marmorakh2000@gmail.com" target="_blank" rel = "noopener noreferrer">Send Email</a><br />
              <span onClick={()=>{
                navigator.clipboard.writeText("+963994222167").then(() => {
                  alert("Phone number copied to clipboard!");
                }).catch(err => {
                  console.error("Failed to copy: ", err);
                  alert("Copy failed. Please try again.");
                });
                }}>
                  <a href="tel:+963994222167">
                    Phone: +963994222167
                    </a><br /></span><br />
              <span>working remotely</span>
           
          {/* Form moved outside the <p> */}
          <form 
            action="https://formspree.io/f/xyzppzrd" 
            method="POST"
          >
            <label htmlFor="message">Something wrong? Send a message:</label>
            <textarea 
              id="message" 
              name="message"
              className="block mt-[2px] p-[4px] border border-gray-600 rounded w-[210px] md:w-[280px]" 
              rows="4" 
              placeholder="Enter your message here..."
              required
            />
            <button 
              type="submit" 
              className="mt-[7px] round"
            >
              Submit
            </button>
          </form>
          </div>
          <div className="mt-10 md:mt-40 mb-10"><p><a href="https://chat.qwen.ai/c/29d202f2-57b2-4b27-a2be-b1f8fb4f116f  " target="_blank">@ Need Help</a></p>
          </div>
            
          </div> 
          </div>     

          <div id="image" className="z-0 p-0 ">
            {isDarkMode ? (<div className="w-[97vw] md:w-[1032px] brightness-300 opacity-15 md:brightness-110 md:opacity-100">
                  <img src={cdark} className="img " />
                  <img src={cdark} className="img mt-20 rotate-180 float-right" /></div>
                ) : (<div className="w-[97vw]  md:w-[1032px] opacity-80 md:opacity-80">
                  <img src={clight} className="img" />
                  <img src={clight} className="img mt-20 rotate-180 float-right" /></div>
                )}
          </div>
      </div>
      </div>
    );
  }

  return <MyComponent />;
}

export default App;