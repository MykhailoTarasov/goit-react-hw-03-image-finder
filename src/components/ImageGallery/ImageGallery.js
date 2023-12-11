import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ items, onItemClick }) => {
  return (
    <ul>
      {items.map((item, index) => (
        <ImageGalleryItem
          key={item.id + index}
          item={item}
          onClick={() => onItemClick(item)}
        />
      ))}
    </ul>
  );
};

export default ImageGallery;
