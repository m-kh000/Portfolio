import React from 'react';

function Paragraph({ props }) {
  return (
    <div className='md:pr-50 select-text'>
      <h1 className='text-[15px] md:text-[22px]' id={props.id}>
        {props.title}
      </h1>
      <div>{props.content}</div>
      <hr className='my-10' />
    </div>
  );
}

export default Paragraph;