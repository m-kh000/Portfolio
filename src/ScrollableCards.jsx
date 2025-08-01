// ScrollableCards.jsx
import React from 'react';
import Card from './Card'; // Assuming you've saved the Card component from earlier

function ScrollableCards() {
  // Data for each card
  const cardData = [
    { title: 'Projects', imgSrc: '/icons/projects.png', text: 'Check out my latest development projects.' },
    { title: 'Achievements', imgSrc: '/icons/achievements.png', text: 'Highlights of my milestones and recognitions.' },
    { title: 'Studies', imgSrc: '/icons/studies.png', text: 'Academic background and ongoing learning.' },
    { title: 'Certificates', imgSrc: '/icons/certificates.png', text: 'Certifications from courses and programs.' },
    { title: 'Hobbies', imgSrc: '/icons/hobbies.png', text: 'Personal interests and creative outlets.' },
    { title: 'Work Experience', imgSrc: '/icons/work.png', text: 'Professional journey and roles held.' },
  ];

  return (
    <div className="scrollable-cards-section">
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

