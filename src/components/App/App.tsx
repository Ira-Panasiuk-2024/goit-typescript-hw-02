import { fetchImages } from '../apiService/images-api';
import SearchBar from '../SearchBar/SearchBar';
import ImageGallery from '../ImageGallery/ImageGallery';
import { useEffect, useState } from 'react';
import Loader from '../Loader/Loader';
import './App.module.css';
import LoadMoreBtn from '../LoadMoreBtn/LoadMoreBtn';
import toast, { Toaster } from 'react-hot-toast';
import ImageModal from '../ImageModal/ImageModal';
import ImagesApiResponse from '../apiService/images-api.types';
import { Image } from './App.types';

const App: React.FC = () => {
  const [query, setQuery] = useState<string>('');
  const [page, setPage] = useState<number>(1);
  const [images, setImages] = useState<Image[]>([]);
  const [total, setTotal] = useState<number>(0);
  const [loading, setLoading] = useState<boolean>(false);
  const [modalOpen, setModalOpen] = useState<boolean>(false);
  const [selectedImageUrl, setSelectedImageUrl] = useState<string>('');
  const [selectedImageDescription, setSelectedImageDescription] = useState<string>('');

  useEffect(() => {
    if (!query) return;

    setLoading(true);

    const fetchData = async () => {
      try {
        const { results, total }: ImagesApiResponse = await fetchImages(query, page);
        if (results.length === 0) {
          toast.error('No results found for your search query');
          return;
        }
        const formattedImages = results.map((image) => ({
          id: image.id,
          urls: {
            regular: image.urls.regular,
            small: image.urls.small || image.urls.regular,
          },
          color: image.color || '#ffffff',
          alt_description: image.alt_description || 'No description',
        }) as Image);
        setImages((prevImages) => [...prevImages, ...formattedImages]);
        setTotal(total);
      } catch (err) {
        console.error('Error fetching images:', err);
        toast.error('Error fetching images. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [query, page]);

  const handleSubmit = (query: string): void => {
    setQuery(query);
    setPage(1);
    setImages([]);
    setTotal(0);
  };

  const handleLoadMoreBtn = (): void => {
    if (total > 0) {
      setPage((prevPage) => prevPage + 1);
    }
  };

  const handleImageClick = (imageUrl: string, imageDescription: string): void => {
    if (!modalOpen) {
      setSelectedImageUrl(imageUrl);
      setSelectedImageDescription(imageDescription);
      setModalOpen(true);
    }
  };

  const handleCloseModal = (): void => {
    if (modalOpen) {
      setModalOpen(false);
    }
  };

  return (
    <div className="container">
      <SearchBar onSubmit={handleSubmit} />
      <Toaster position="bottom-center" reverseOrder={false} />
      <ImageGallery images={images} onImageClick={handleImageClick} />
      <Loader loading={loading} />
      {total > 0 && images.length < total && (
        <LoadMoreBtn onClick={handleLoadMoreBtn}>Load more</LoadMoreBtn>
      )}
      <ImageModal
        isOpen={modalOpen}
        onClose={handleCloseModal}
        imageUrl={selectedImageUrl}
        imageDescription={selectedImageDescription}
      />
    </div>
  );
};

export default App;
