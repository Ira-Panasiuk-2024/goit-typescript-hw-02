import { Image } from '../App/App.types';

interface ImageCardProps {
  image: Image;
  onClick: (imageUrl: string, imageDescription: string) => void;
  children?: React.ReactNode;
}

export default ImageCardProps;
