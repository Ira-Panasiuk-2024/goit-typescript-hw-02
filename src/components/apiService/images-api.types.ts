// interface ImagesApiResponse {
//     results: { id: number; urls: { regular: string } }[];
//     total: number;
//   }
  
// interface FetchImagesOptions {
//     query: string;
//     page: number;
//   }
  
// interface FetchImagesResponse {
//     data: ImagesApiResponse;
// }
  
// export type {
//     ImagesApiResponse,
//     FetchImagesOptions,
//     FetchImagesResponse
// };


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
