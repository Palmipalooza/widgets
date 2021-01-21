import React, { useState, useEffect } from 'react';

function Dropdown({ options, selected, onSelectedChange }) {
  // State keeps track of whether or not the component is open, toggle to true as oepn, false as closed
  const [open, setOpen] = useState(false);

  // use useEffect hook to add event listener to the body when the Dropdown component renders
  useEffect(() => {
    document.body.addEventListener('click', () => {
      console.log('body click');
      setOpen(false);
    });
  }, []);
  // ^ empty array so the function only runs on first render (not rerenders)

  const renderedOptions = options.map(option => {
    // check if selected is the same as the option we are currently iterating over
    if (option.value === selected.value) {
      return null;
    }

    return (
      <div
        key={option.value}
        className="item"
        onClick={() => {
          console.log('item clicked');
          onSelectedChange(option);
        }}
      >
        {option.label}
      </div>
    );
  });

  // opening and closing the dropdown: a) condtionally render renderedOptions or b) show and hide with css
  return (
    <div className="ui form">
      <div className="field">
        <label className="label">Select a Color</label>
        <div
          onClick={() => {
            console.log('dropdown clicked');
            setOpen(!open);
          }}
          className={`ui selection dropdown ${open ? 'visible active' : ''}`}
        >
          {/* ^ toggle "visible active" */}
          <i className="dropdown icon"></i>
          {/* ^ semantic ui takes i elements with icon className and shows an icon (i for icon, not italics) */}
          <div className="text">{selected.label}</div>
          <div
            onClick={() => setOpen(!open)}
            className={`menu ${open ? 'visible transition' : ''}`}
          >
            {renderedOptions}
          </div>
          {/* ^ toggle "visible transition" */}
        </div>
      </div>
    </div>
  );
}

export default Dropdown;
