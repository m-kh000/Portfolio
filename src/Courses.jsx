import React from 'react';
import { useState } from 'react';
import ai from '/icons/ai.png';
import paint from '/icons/paint.png';
function Courses() {
  
const [isDropdownOpen, setIsDropdownOpen] = useState(false);

const toggleDropdown = () => {
  setIsDropdownOpen(!isDropdownOpen);
};

  const coursesData = [
    {
      icon: ai,
      text: 'AWS Educate Machine Learning Foundations'
    },
    {
      icon: ai,
      text: 'Introducing Generative AI with AWS'
    },
    {
      icon: ai,
      text: 'Object Oriented Programming in Java - Duke University'
    },
    {
      icon: ai,
      text: 'CS50 - Harvard'
    },
    {
      icon: paint,
      text: 'Fundamentals of Graphic Design - CalArts'
    }
  ];

  return (
    <div>
    <div className="courses-dropdown">
      <button
        className="dropdown-toggle flex"
        onClick={toggleDropdown}>
        <span
        className='w-5 h-5 md:w-10 md:h-8'
          style={{
            transition: 'transform 0.3s ease',
            transform: isDropdownOpen ? 'rotate(180deg)' : 'rotate(0deg)',
          }}
        >
          ▼
        </span>
      <p >Courses I've completed</p>
      </button>
      
      <ul className="text-left course" style={{ display: isDropdownOpen ? 'block' : 'none',}}>
        {coursesData.map((course, index) => (
          <li key={index}>
            <img src={course.icon} className="icon" alt="" />
            <p>{course.text}</p>
          </li>
        ))}
      </ul>
    </div></div>
  );
}

export default Courses;