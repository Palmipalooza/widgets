// Using React Hooks instead of CBC for state management
import React, { useState } from 'react';

const Search = () => {
  const [term, setTerm] = useState('');

  // Class Based Example:
  // setTerm(event) {
  //   this.setState({ term: event.target.value })
  // }

  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Search Term</label>
          <input
            value={term}
            onChange={e => setTerm(e.target.value)}
            className="input"
          />
        </div>
      </div>
    </div>
  );
};

export default Search;
