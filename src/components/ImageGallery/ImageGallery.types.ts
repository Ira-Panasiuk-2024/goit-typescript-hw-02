interface ImageGalleryProps {
  images: Image[];
  onImageClick: (imageUrl: string, imageDescription: string) => void;
  children?: React.ReactNode;
}

export default ImageGalleryProps;
