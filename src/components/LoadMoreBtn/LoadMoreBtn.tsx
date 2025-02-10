import css from './LoadMoreBtn.module.css';
import LoadMoreBtnProps from './LoadMoreBtn.types';

const LoadMoreBtn = ({ onClick, children }: LoadMoreBtnProps) => {
  return (
    <button onClick={onClick} className={css.loadMoreBtn}>
      {children}
    </button>
  );
};

export default LoadMoreBtn;
