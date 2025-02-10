import axios from 'axios';
import ImagesApiResponse from './images-api.types';

const API_KEY = 'PpeOd9C-FbcOv_onC0y1RkWzwnkcHV7bI7PmEPqsRiY';
axios.defaults.baseURL = 'https://api.unsplash.com/';
axios.defaults.headers.common['Authorization'] = `Client-ID ${API_KEY}`;
axios.defaults.params = {
  per_page: 15,
  orientation: 'landscape',
};

export const fetchImages = async (query: string, page: number): Promise<ImagesApiResponse> => {
  try {
    const res = await axios.get<ImagesApiResponse>(`search/photos`, {
      params: {
        page,
        query,
      },
    });
    return res.data;
  } catch (error) {
    console.error('Error fetching images:', error);
    throw new Error('Error fetching images. Please try again later.');
  }
};
