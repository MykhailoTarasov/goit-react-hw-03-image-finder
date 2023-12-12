const ImageGalleryItem = () => {
  const { id, webformatURL, tags } = this.props.item;

  return (
    <li key={id}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
