import React from 'react';

function Dropdown({ options, selected, onSelectedChange }) {
  const renderedOptions = options.map(option => {
    return (
      <div
        key={option.value}
        className="item"
        onClick={() => onSelectedChange(option)}
      >
        {option.label}
      </div>
    );
  });

  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div className="ui selection dropdown visible active">
          <i className="dropdown icon"></i>
          {/* semantic ui takes i elements with icon className and shows an icon (i for icon, not italics) */}
          <div className="text">Selected: {selected.label}</div>
          <div className="menu visible transition">{renderedOptions}</div>
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
