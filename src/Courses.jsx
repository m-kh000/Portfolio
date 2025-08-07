import React from 'react';

function Courses() {
  // Array of courses with icon and text
  const coursesData = [
    {
      icon: '/icons/ai.png',
      text: 'AWS Educate Machine Learning Foundations'
    },
    {
      icon: '/icons/ai.png',
      text: 'Introducing Generative AI with AWS'
    },
    {
      icon: '/icons/ai.png',
      text: 'Object Oriented Programming in Java - Duke University'
    },
    {
      icon: '/icons/ai.png',
      text: 'CS50 - Harvard'
    },
    {
      icon: '/icons/paint.png',
      text: 'Fundamentals of Graphic Design - CalArts'
    }
  ];

  return (
    <div>
      <p>Courses I've completed</p>
      <br />
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