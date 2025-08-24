import "./styles/base-color.css";
import "./styles/base-sizes.css";
import "./styles/cards.css";
import "./styles/buttons.css";
import React, { useEffect, useState } from "react";
import ScrollableCards from "./ScrollableCards";
import Courses from "./Courses";
import PhotoCard from "./PhotoCard";
import CardsParagraphs from "./CardsParagraphs";
import moon from "/icons/moon.png";
import sun from "/icons/sun.png";
import clight from "/icons/circlelight.png";
import cdark from "/icons/circledark.png";

function ContactForm() {
  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setMessage(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setMessage("");
  };
}

// ✅ Move MyComponent outside App
function MyComponent({ isDarkMode, toggleMode, sidebarOpen, toggleSidebar }) {
  const [name, setName] = useState(() => {
    return localStorage.getItem("userName") || "";
  });
  const [comma, setComma] = useState(false);

  // Sync comma with name on load
  useEffect(() => {
    if (name) setComma(true);
  }, [name]);

  function handleNameChange(event) {
    const value = event.target.value;
    setName(value);
    if (value === "") {
      setComma(false);
      localStorage.removeItem("userName");
    } else {
      setComma(true);
      localStorage.setItem("userName", value);
    }
  }

  return (
    <div className="flex">
      {/* Sidebar / Toolbar */}
      <div
        id="toolbar"
        className={` 
  fixed z-30 top-4 shadow-black 
  transform transition-transform duration-700 ease-in-out 
  md:translate-x-0 md:relative md:shadow-none md:rounded-none
  ${sidebarOpen ? "translate-x-0" : "-translate-x-42"}  /* ← This was missing! */
`}
      >
        <button
          id="mode"
          type="button"
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

        <h1 className="mb-10">
          a little bit <br /> about myself
        </h1>

        <Courses />
      </div>

      {/* Hamburger Menu Button */}
      <div
      id="menu"
      onClick={toggleSidebar}
      className={`
        px-2 text-right w-[40px] text-[12px] md:hidden fixed top-[12px] z-30
        transform transition-transform duration-700 ease-in-out 
        !rounded-2xl my-1 p-[4px]
        ${sidebarOpen ? "translate-x-36 " : "-translate-x-5"}
      `}
    >
      ☰
    </div>

      <div id="rightside" className="p-0 ">
        <div className="z-20 absolute mt-[15px] !mx-0 md:p-0 place-items-center md:w-full ">
          <p id="mira">
            {`hi${comma ? `, ${name}` : ""}`}
            <li /> it's Mira Khnefes
          </p>
          <p className="mx-5">
            - A passionate ITE student always ready to work, create, and comunicate.
          </p>
          <p className="my-28">
            I wanna get to know you too.
            <br />
            <input
              id=":)"
              value={name}
              onChange={handleNameChange}
              type="text"
              placeholder="Could you type your name:"
            />
          </p>
          <div>
            <a href="#contact">
              <button>contcate me</button>
            </a>
          </div>

          <ScrollableCards />
          <div className="w-[97vw] md:w-[83vw] float-left">
            <PhotoCard img={clight} r="r" />
            <PhotoCard img={clight} r="l" />
          </div>
          <CardsParagraphs />

          <div className="w-full place-items-center">
            <div id="contact">
              <a
                href="mailto:marmorakh2000@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                Send Email
              </a>
              <br />
              <span
                onClick={() => {
                  navigator.clipboard
                    .writeText("+963994222167")
                    .then(() => {
                      alert("Phone number copied to clipboard!");
                    })
                    .catch((err) => {
                      console.error("Failed to copy: ", err);
                      alert("Copy failed. Please try again.");
                    });
                }}
              >
                <a href="tel:+963994222167">Phone: +963994222167</a>
                <br />
              </span>
              <span>working remotely</span>

              {/* ✅ Fixed: Removed extra spaces in action URL */}
              <form
                id=":P"
                action="https://formspree.io/f/xyzppzrd"
                method="POST"
              >
                <label htmlFor="message">Something wrong? Send a message:</label>
                <textarea
                  id="message"
                  name="message"
                  className="block mt-[2px] p-[4px] border rounded w-[210px] md:w-[280px]"
                  rows="4"
                  placeholder="Enter your message here..."
                  required
                />
                <button type="submit" className="mt-[7px] round">
                  Submit
                </button>
              </form>
            </div>
            <div className="mt-10 md:mt-40 mb-10">
              <p>
                {/* ✅ Fixed: Removed extra spaces in href */}
                <a
                  href="https://chat.qwen.ai/c/29d202f2-57b2-4b27-a2be-b1f8fb4f116f"
                  target="_blank"
                >
                  @Need Help
                </a>
              </p>
            </div>
          </div>
        </div>

        <div id="image" className="z-0 p-0 w-[98vw] md:w-[85vw] h-full ">
          {isDarkMode ? (
            <>
              <div className="brightness-300 opacity-15 md:brightness-110 md:opacity-100 h-[800px] md:h-[900px]">
                <img src={cdark} className="img " />
                <img
                  src={cdark}
                  className="img mt-20 rotate-180 float-right "
                />
              </div>
              <div className="brightness-300 opacity-15 md:brightness-110 md:opacity-100 h-[800px] md:h-[900px]">
                <img src={cdark} className="img " />
                <img
                  src={cdark}
                  className="img mt-20 rotate-180 float-right"
                />
              </div>
              <div className="brightness-300 opacity-15 md:brightness-110 md:opacity-100 h-[800px] md:h-[900px]">
                <img src={cdark} className="img " />
                <img
                  src={cdark}
                  className="img mt-20 rotate-180 float-right"
                />
              </div>
            </>
          ) : (
            <>
              <div className="opacity-80 md:opacity-80 h-[800px] md:h-[900px]">
                <img src={clight} className="img " />
                <img
                  src={clight}
                  className="img mt-20 rotate-180 float-right "
                />
              </div>
              <div className="opacity-80 md:opacity-80 h-[800px] md:h-[900px]">
                <img src={clight} className="img " />
                <img
                  src={clight}
                  className="img mt-20 rotate-180 float-right "
                />
              </div>
              <div className="opacity-80 md:opacity-80 h-[800px] md:h-[900px]">
                <img src={clight} className="img " />
                <img
                  src={clight}
                  className="img mt-20 rotate-180 float-right "
                />
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function App() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(() => {
    return localStorage.getItem("darkMode") === "true";
  });

  useEffect(() => {
    if (isDarkMode) {
      document.body.classList.add("darkmode");
    } else {
      document.body.classList.remove("darkmode");
    }
    localStorage.setItem("darkMode", isDarkMode);
  }, [isDarkMode]);

  const toggleMode = () => {
    setIsDarkMode((prev) => !prev);
  };

  const toggleSidebar = () => {
    setSidebarOpen((prev) => !prev);
  };

  return (
    <MyComponent
      isDarkMode={isDarkMode}
      toggleMode={toggleMode}
      sidebarOpen={sidebarOpen}
      toggleSidebar={toggleSidebar}
    />
  );
}

export default App;