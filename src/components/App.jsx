import React, { Component } from 'react';

import { Layout } from './Layout';
import SearchBar from './Searchbar/Searchbar';

class App extends Component {
  state = {
    pictures: [],
    search: '',
  };

  

  render() {
    return (
      <Layout>
        <SearchBar />
      </Layout>
    );
  }
}

export default App;
