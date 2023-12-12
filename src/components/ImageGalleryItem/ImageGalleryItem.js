const ImageGalleryItem = ({item}) => {
  const { id, webformatURL, tags } = item;

  return (
    <li key={id}>
      <img src={webformatURL} alt={tags} />
    </li>
  );
};

export default ImageGalleryItem;
