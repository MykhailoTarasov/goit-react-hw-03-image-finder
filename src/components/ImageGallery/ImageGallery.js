import ImageGalleryItem from "components/ImageGalleryItem/ImageGalleryItem";
import { ImageGalleryList } from "./ImageGallery.Styled";

const ImageGallery = ({items}) => {
    return (
        <ImageGalleryList>
            {items.map(item => (
                <ImageGalleryItem key={item.id} item={item}/>
            ))}
        </ImageGalleryList>
    )
}

export default ImageGallery;