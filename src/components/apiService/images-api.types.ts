interface ImagesApiResponse {
  results: {
    id: number;
    urls: {
      regular: string;
      small: string;
    };
    color: string;
    alt_description: string;
  }[];
  total: number;
}

export default ImagesApiResponse;
