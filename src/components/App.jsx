import React, { Component } from 'react';

import { Layout } from './Layout';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';


class App extends Component {
  state = {
    query: '',
    items: [],
    page: 1,
    loading: false,
    loadMore: false,
    error: false,
  };

 

  handleSubmit = (query) => {
    this.setState({ query, page: 1, items: [] });
  }

 


  render() {
    const { items, loading } = this.state;

    return (
      <Layout>
        <SearchBar onSubmit={this.handleSubmit} />
        {loading && items.length === 0 && <Loader />}
        <ImageGallery items={items} onImageClick={this.handleItemClick}/>
      </Layout>
    );
  }
}

export default App;
