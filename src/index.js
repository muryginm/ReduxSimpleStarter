import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/search_bar';

const API_KEY = 'AIzaSyBCv3UJRYwqOqoKpNd6jKReCPGGdMF_Ot0';

class App extends React.Component {
  render() {
    return (
      <div>
        <SearchBar />
      </div>
    );
  }
}

ReactDOM.render(
  <App />,
  document.querySelector('.container')
);
