import { Component } from 'react';
import { Modal } from 'components/Modal/Modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

class ImageGalleryItem extends Component {
  state = {
    isModalOpen: false,
  };

  openModal = () => {
    if (!this.state.isModalOpen) {
      this.setState({ isModalOpen: true });
    }
  };

  closeModal = () => {
    this.setState({ isModalOpen: false });
  };

  render() {
    const { id, webformatURL, tags, largeImageURL } = this.props.image;
    const { isModalOpen } = this.state;

    return (
      <li key={id}>
        <img src={webformatURL} alt={tags} onClick={this.openModal} />
        <Modal
          isOpen={isModalOpen}
          onRequestClose={this.closeModal}
          style={customStyles}
          largeImageURL={largeImageURL}
        ></Modal>
      </li>
    );
  }
}

export default ImageGalleryItem;
