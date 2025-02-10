export interface Urls {
  regular: string;
  small: string;
}

export interface Image {
  id: number;
  urls: Urls;
  color: string;
  alt_description: string;
}

export interface AppState {
  query: string;
  page: number;
  images: Image[];
  total: number;
  loading: boolean;
  modalOpen: boolean;
  selectedImageUrl: string;
  selectedImageDescription: string;
}
