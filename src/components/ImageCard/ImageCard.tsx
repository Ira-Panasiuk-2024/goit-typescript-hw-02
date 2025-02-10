import css from './ImageCard.module.css';
import ImageCardProps from './ImageCard.types';
// import { Image } from '../App/App.types';

const ImageCard = ({ image, onClick, children }: ImageCardProps) => {
  return (
    <div
      className={css.imageBox}
      style={{ backgroundColor: image.color, borderBlock: image.color }}
    >
      <img
        className={css.imageCard}
        src={image.urls.small || ''}
        alt={image.alt_description}
        onClick={() => onClick(image.urls.regular, image.alt_description)}
      />
      {children}
    </div>
  );
};

export default ImageCard;
