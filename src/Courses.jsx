import React from 'react';
import ai from '/icons/ai.png';
import paint from '/icons/paint.png';
function Courses() {
  // Array of courses with icon and text

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
      <p className='mb-7'>Courses I've completed</p>
      <ul>
        {coursesData.map((course, index) => (
          <li key={index}>
            <img src={course.icon} className="icon" alt="" />
            <p>{course.text}</p>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Courses;