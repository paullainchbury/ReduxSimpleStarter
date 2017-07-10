import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyCzQQYxR0T4v4mXw0k0cAc2YALP-PFOcDg';

// Create a new Component. This Component should produce some HTML.
const App = () => {
  return (
    <div>
      <SearchBar />
    </div>
  );
}

// Take the Component's generated HTML and put it in the DOM.
ReactDOM.render(<App />, document.querySelector('.container'));
