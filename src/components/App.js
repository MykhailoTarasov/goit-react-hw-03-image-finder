import { Component } from 'react';
import { Layout, StyledError } from './Layout';
import SearchBar from './Searchbar/Searchbar';
import { fetchImages } from 'api';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import toast, { Toaster } from 'react-hot-toast';

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

  handleButton = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    try {
      if (prevState.query !== query || prevState.page !== page) {
        this.setState({ isLoading: true, error: false });
        const visibleImages = await fetchImages(query, page);
        toast.success('Images found successfully!');
        this.setState(prevState => ({
          images: [...prevState.images, ...visibleImages.hits],
          isLoading: false,
          error: false,
          loadMore: this.state.page < Math.ceil(visibleImages.totalHits / 12),
        }));
      }
    } catch (error) {
      this.setState({ error: true, isLoading: false });
    }
  }

  render() {
    const { images, loadMore, isLoading, error } = this.state;

    return (
      <Layout>
        <SearchBar onSubmit={this.handleSearch} />
        {images.length > 0 && <ImageGallery items={images} />}
        
        {isLoading && <Loader />}
        {loadMore && <Button onButtonClick={this.handleButton} />}
        {error && <StyledError>Whoops... Error! Please, reload this page!</StyledError>}
        <Toaster position="top-right" />
      </Layout>
    );
  }
}

export default App;
