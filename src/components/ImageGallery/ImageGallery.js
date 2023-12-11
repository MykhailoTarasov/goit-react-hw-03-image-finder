import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ galleryItems }) => {
  return (
    <ul>
      {galleryItems.map(item => (
        <ImageGalleryItem key={item.id} searchImage={item}/>
      ))}
    </ul>
  );
};

export default ImageGallery;
