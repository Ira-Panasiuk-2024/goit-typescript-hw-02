import toast, { Toaster } from 'react-hot-toast';
import { FiSearch } from 'react-icons/fi';
import сss from './SearchBar.module.css';
import { useState } from 'react';
import { SearchBarProps, SearchBarState } from './SearchBar.types';

const SearchBar = ({ onSubmit, children }: SearchBarProps) => {
  const [images, setImages] = useState<SearchBarState['images']>('');

  const saveImage = (event: React.ChangeEvent<HTMLInputElement>) => {
    const imageValue = event.target.value;

    setImages(imageValue);
  };

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (images.trim() === '') {
      toast.error('Please enter a search term');
      return;
    }
    if (onSubmit) {
      onSubmit(images);
    }
    setImages('');
  };

  return (
    <header className={сss.page}>
      <form className={сss.searchForm} onSubmit={handleSubmit}>
        <input
          className={сss.searchInput}
          type="text"
          name="search"
          placeholder="Search images and photos"
          onChange={saveImage}
          value={images}
          autoComplete="off"
        />

        <button className={сss.searchBtn} type="submit">
          <FiSearch className={сss.searchIcon} />
        </button>
      </form>

      <Toaster position="bottom-center" reverseOrder={false} />
      {children}
    </header>
  );
};

export default SearchBar;
