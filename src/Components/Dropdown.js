import React from 'react';

function Dropdown({ options }) {
  const renderedOptions = options.map(option => {
    return (
      <div key={option.value} className="item">
        {option.label}
      </div>
    );
  });

  return <div>{renderedOptions}</div>;
}

export default Dropdown;
