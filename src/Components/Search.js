// Using React Hooks instead of CBC for state management
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('');

  useEffect(() => {
    const search = async () => {
      await axios.get('sample');
    };

    search();
  }, [term]);
  // normally see [] or [with something inside it that triggers re renders when it changes]

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
