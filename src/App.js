import React, { useState } from 'react';
import Accordion from './Components/Accordion';
import Search from './Components/Search';
import Dropdown from './Components/Dropdown';

// sample data to be used in Accordion widget
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

// sample data to be used in Dropdown widget
const options = [
  {
    label: 'The Color Red',
    value: 'red',
  },
  {
    label: 'The Color Green',
    value: 'green',
  },
  {
    label: 'A Shade of Blue',
    value: 'blue',
  },
];

// create piece of state in App to keep track of what option is currently selected -> to allow for multiple instances of Dropdown component
export default () => {
  const [selected, setSelected] = useState(options[0]);
  // ^ is like: this.state = {selected: options[0]}
  // ^ setSelected = (event) => { this.setState({ selected: event.target.value }) }

  return (
    <div>
      {/* <Accordion items={items} /> */}
      {/* <Search /> */}
      <Dropdown
        selected={selected}
        onSelectedChange={setSelected}
        options={options}
      />
    </div>
  );
};
