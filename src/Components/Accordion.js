// Using React Hooks instead of class based components
import React, { useState } from 'react';

const Accordion = ({ items }) => {
  // useState returns a stateful value (this.state.value) and a function to update it (this.setState{ value: newValue })
  const [activeIndex, setActiveIndex] = useState(null);

  const onTitleClicked = index => {
    setActiveIndex(index);
  };

  const renderedItems = items.map((item, index) => {
    // if current index is the active index, include 'active' keyword
    const active = index === activeIndex ? 'active' : '';

    return (
      <div className="ui styled accordion" key={item.title}>
        <div
          className={`${active} title`}
          // same as
          // className={`title ${active}`}
          onClick={() => onTitleClicked(index)}
        >
          <i className="dropdown icon"></i>
          {item.title}
        </div>
        <div className={`${active} content`}>
          <p>{item.content}</p>
        </div>
      </div>
    );
  });

  return <div className="ui styled accordion">{renderedItems}</div>;
};

export default Accordion;
