import React from 'react';
import Paragraph from './Paragraph'; // Adjust the path if needed

function CardsParagraphs() {
  const sections = [
    {
      id: 'projects',
      title: 'Projects',
      content: (
        <p className='text-[11px] md:text-[17px]'>
          In college I have learned C++, Java, and JSX as I was making projects all from scratch, which maked me master syntax and language basics.
        </p>
      ),
    },
    {
      id: 'achievements',
      title: 'Achievements',
      content: <p className='text-[11px] md:text-[17px]'>Coming soon. Stay tuned!</p>,
    },
    {
      id: 'studies',
      title: 'Studies',
      content: (
        <p className='text-[11px] md:text-[17px]'>
          I am currently studying ITE (Information and Technology Engineering) at Damascus University, and I'm backing it up with online courses to wrap things together and to expand my knowledge base.
        </p>
      ),
    },
    {
      id: 'certificates',
      title: 'Certificates',
      content: (
        <p className='text-[11px] md:text-[17px]'>
          My verified certificates can be found at the following links:
          <br /><br />
          <a
            href="https://www.udacity.com/certificate/e/f247c59e-4f52-11f0-ad36-27ad29e93c5b"
            target="_blank"
            rel="noopener noreferrer"
          >
            Introducing Generative AI with AWS (Udacity)
          </a>
          <br />
          <a
            href="https://www.credly.com/badges/e5e6da4a-14bf-4f61-9d1c-9b36b497c585"
            target="_blank"
            rel="noopener noreferrer"
          >
            AWS Educate Machine Learning Foundations (Credly)
          </a>
          <br />
          <a
            href="https://mclick.udacity.com/z/u212497f0wau04?uid=5933cff2-169a-4c86-9ce5-6da870f63edc&txnid=79687d45-a396-417e-b86a-2aae73346263&mid=01cce6c0-7177-4c0f-8e94-184fa2c49828&bsft_aaid=8d7e276e-4a10-41b2-8868-423fe96dd6b2&bsft_ek=2025-07-22T07%3A23%3A21Z&bsft_mime_type=html&bsft_tv=12&bsft_lx=3"
            target="_blank"
            rel="noopener noreferrer"
          >
            AI and ML Nanodegree Challenge (Udacity)
          </a>
        </p>
      ),
    },
    {
      id: 'work-experience',
      title: 'Work Experience',
      content: <p className='text-[11px] md:text-[17px]'>Coming soon. Stay tuned!</p>,
    },
    {
      id: 'hobbies',
      title: 'Hobbies',
      content: (
        <p className='text-[11px] md:text-[17px]'>
          Over the years I have developed gifts that later turned into hobbies, including oil painting, problem solving, code competing, and many others.
        </p>
      ),
    },
  ];

  return (
    <div className='mt-20 md:mt-40'>
      {sections.map((section) => (
        <Paragraph key={section.id} props={section} />
      ))}
    </div>
  );
}

export default CardsParagraphs;