// ScrollableCards.jsx
import React from 'react';
import Card from './Card'; // Assuming you've saved the Card component from earlier

function ScrollableCards() {
  // Data for each card
  const cardData = [
    { title: 'Projects', text: 'Check out my latest development projects.' ,link:'#projects'},
    { title: 'Achievements', text: 'Comming soon. stay tuned!' ,link:'#achievements'},
    { title: 'Studies', text: 'Academic background and ongoing learning.' ,link:'#studies'},
    { title: 'Certificates', text: 'Certifications from courses and programs.' ,link:'#certificates'},
    { title: 'Work Experience', text: 'Comming soon. stay tuned!' ,link:'#work-experience'},
    { title: 'Hobbies', text: 'Personal interests and creative outlets.' ,link:'#hobbies'},
  ];

  return (
    <div className="scrollable-cards-section p=10">
      <div className="cards-container">
        {cardData.map((data, index) => (
          // <a href={data.link}>
          <Card 
            key={index} 
            cardData={{  
              link: data.link,
              title: data.title, 
              text: data.text 
            }} 
          />
          // </a>
        ))}
      </div>
    </div>
  );
}

export default ScrollableCards;

