import ImageCard from '../ImageCard/ImageCard';
import css from './ImageGallery.module.css';
import ImageGalleryProps from './ImageGallery.types';
import { Image } from '../App/App.types';

const ImageGallery = ({ images, onImageClick, children }: ImageGalleryProps) => {
  return (
    <ul className={css.galleryList}>
      {images.map((image: Image) => (
        <li key={image.id} className={css.galleryItem}>
          <ImageCard
            image={image}
            onClick={(imageUrl, imageDescription) => onImageClick(imageUrl, imageDescription)}
          />
        </li>
      ))}
      {children}
    </ul>
  );
};

export default ImageGallery;
