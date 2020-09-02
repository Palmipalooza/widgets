// Using React Hooks instead of CBC for state management
import React, { useState, useEffect } from 'react';
import axios from 'axios';

const Search = () => {
  const [term, setTerm] = useState('jQuery is Stupid');
  const [results, setResults] = useState([]);

  // useEffect invoked when component first renders and anytime the term piece of state changes
  useEffect(() => {
    console.log('initial render or term was changed');

    // cleanup function will get invoked whenever the component re-renders
    return () => {
      console.log('CLEANUP');
    };

    // const search = async () => {
    //   const { data } = await axios.get('https://en.wikipedia.org/w/api.php', {
    //     params: {
    //       action: 'query',
    //       list: 'search',
    //       origin: '*',
    //       format: 'json',
    //       srsearch: term,
    //     },
    //   });
    //   setResults(data.query.search);
    // };

    // // THROTTLE api requests below by: waiting 500 milliseconds after user input (keystroke) before api call (repeats until no user input for 500 milliseconds)
    // const timeoutId = setTimeout(() => {
    //   if (term) {
    //     search();
    //   }
    // }, 500);
  }, [term]);
  // ^normally see [] or [with something inside it that triggers re renders when it changes]

  const renderedResults = results.map(result => {
    return (
      <div key={result.pageid} className="item">
        <div className="right floated content">
          <a
            href={`https://en.wikipedia.org?curid=${result.pageid}`}
            className="ui button"
          >
            Go
          </a>
        </div>
        <div className="content">
          <div className="header">{result.title}</div>
        </div>
        <span dangerouslySetInnerHTML={{ __html: result.snippet }}></span>
      </div>
    );
  });

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
      <div className="ui celled list">{renderedResults}</div>
    </div>
  );
};

export default Search;
