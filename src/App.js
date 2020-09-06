import React from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';

const items = [
  {
    title: 'What is an accordion?',
    content: 'Clicking an item expands its details',
  },
  {
    title: 'Built with React',
    content: 'Reusable component that manages state with React Hooks',
  },
  {
    title: 'Styled with Semantic UI',
    content: 'the active keyword toggles the clicked item',
  },
];

export default () => {
  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
    </div>
  );
};
