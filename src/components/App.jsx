import { Component } from 'react';
import { Layout } from './Layout';
import SearchBar from './Searchbar/Searchbar';
import { fetchImages } from 'api';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    images: [],
    query: '',
    page: 1,
    isLoading: false,
    error: false,
    loadMore: false,
  };

  handleSearch = queryName => {
    this.setState({
      query: queryName,
      page: 1,
      images: [],
      loadMore: false,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    try {
      if (prevState.query !== query || prevState.page !== page) {
        this.setState({ isLoading: true });
        const visibleImages = await fetchImages(query, page);
        this.setState({
          images:
            page === 1
              ? visibleImages.hits
              : [...prevState.images, ...visibleImages.hits],
          loading: false,
          error: false,
          loadMore: this.state.page < Math.ceil(visibleImages.totalHits / 12),
        });
        if (visibleImages.totalHits === 0) {
          alert('Unfortunately, your search returned no results');
        }
      }
    } catch (error) {
      alert('Please reload the page');
    }
  }

  render() {
    const {images} = this.state;

    return (
      <Layout>
        <SearchBar onSubmit={this.handleSearch} />
        <ImageGallery items={images}/>
      </Layout>
    );
  }
}

export default App;
