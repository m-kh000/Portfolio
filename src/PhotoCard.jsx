import React from 'react';
import './styles/PhotoCard.css';

function PhotoCard({r, img}) {
  return (<>
      {r === 'r' ? (
        <div className="photo-card-container ">
          <div className="photo-card float-left">
            <img src={img} className="photo-img opacity-0" />
          </div>
          
          <div className='flex-1 flex items-center justify-center text-[170%]'>
            I can write text here
            </div>

        </div>
      ) : (
        <div className="photo-card-container">
        
          <div className='flex-1 flex items-center justify-center text-[170%]'>
            I can write text here
            </div>
        <div className="photo-card">
            <img src={img} className="photo-img opacity-0" />
        </div>

        </div>
      )}
      </>
  );
}

export default PhotoCard;
