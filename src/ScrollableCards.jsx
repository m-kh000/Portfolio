// ScrollableCards.jsx
import React from 'react';
import Card from './Card'; // Assuming you've saved the Card component from earlier

function ScrollableCards() {
  // Data for each card
  const cardData = [
    { title: 'Projects', text: 'Check out my latest development projects.' },
    { title: 'Achievements', text: 'Comming soon. stay tuned!' },
    { title: 'Studies', text: 'Academic background and ongoing learning.' },
    { title: 'Certificates', text: 'Certifications from courses and programs.' },
    { title: 'Work Experience', text: 'Comming soon. stay tuned!' },
    { title: 'Hobbies', text: 'Personal interests and creative outlets.' },
  ];

  return (
    <div className="scrollable-cards-section p=10">
      <div className="cards-container">
        {cardData.map((data, index) => (
          <Card 
            key={index} 
            cardData={{ 
              imgSrc: data.imgSrc, 
              title: data.title, 
              text: data.text 
            }} 
          />
        ))}
      </div>
    </div>
  );
}

export default ScrollableCards;

