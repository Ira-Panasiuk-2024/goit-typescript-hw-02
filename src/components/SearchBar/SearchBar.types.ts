interface SearchBarProps {
  onSubmit: (query: string) => void;
  children?: React.ReactNode;
}
  
interface SearchBarState {
  images: string;
}


export type { SearchBarProps, SearchBarState }
