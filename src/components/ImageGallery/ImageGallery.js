import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ galleryItems }) => {
  return (
    <ul>
    {galleryItems.map(item => (
      <li key={item.id}>
        <ImageGalleryItem image={item} />
      </li>
    ))}
  </ul>
  );
};

export default ImageGallery;
