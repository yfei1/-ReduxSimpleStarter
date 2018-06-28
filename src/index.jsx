import React from 'react';
import ReactDOM from 'react-dom';
import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyC1gVVjUYvSF8vWsdxZPAT_kjiibCPQiYQ';

const App = () => (
  <div>
    <SearchBar />
  </div>
);

ReactDOM.render(App(), document.querySelector('.container'));

export default API_KEY;
