import React, { Component } from 'react';

import { Layout } from './Layout';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Loader from './Loader/Loader';
import { fechServisSearchImg } from 'api';
import Button from './Button/Button';

class App extends Component {
  state = {
    items: [],
    searchValue: '',
    page: 1,
    loading: false,
    loadMore: false,
    error: false,
  };

  handleSubmit = searchName => {
    this.setState(() => ({
      searchValue: searchName,
      items: [],
      page: 1,
      loadMore: false,
    }));
  };

  handleButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { searchValue, page } = this.state;
    try {
      if (prevState.searchValue !== searchValue || page !== prevState.page) {
        this.setState({ loading: true, error: false });
        const searchImg = await fechServisSearchImg(searchValue, page);

        this.setState({
          items:
            page === 1
              ? searchImg.hits
              : [...prevState.items, ...searchImg.hits],
          loading: false,
          error: false,
          loadMore: this.state.page < Math.ceil(searchImg.totalHits / 12),
        });
      }
    } catch (error) {
      this.setState({ error: true, loading: false });
    }
  }

  render() {
    const { items, loading, error, loadMore } = this.state;

    return (
      <Layout>
        <SearchBar onSubmit={this.handleSubmit} />

        {items.length > 0 && <ImageGallery galleryItems={items} />}

        {loading && items.length === 0 && <Loader />}

        {loadMore && <Button onClickButton={this.handlerButton} />}

        {error && <span>Error! Please, reload this page!</span>}
      </Layout>
    );
  }
}

export default App;
