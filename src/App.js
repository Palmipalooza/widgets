import React from 'react';
import Accordion from './Components/Accordion';

const items = [
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
  {
    title: 'What is React?',
    content: 'React is a front end javascript framework',
  },
];

export default () => {
  return (
    <div>
      <Accordion />
    </div>
  );
};
