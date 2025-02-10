import css from './Loader.module.css';
import { ThreeCircles } from 'react-loader-spinner';
import LoaderProps from './Loader.types';

const Loader = ({ loading }: LoaderProps) => {
  return (
    loading && (
      <div className={css.loaderBox}>
        <ThreeCircles
          visible={loading}
          height="100"
          width="100"
          color="blue"
          ariaLabel="three-circles-loading"
          wrapperStyle={{}}
          wrapperClass=""
        />
      </div>
    )
  );
};

export default Loader;
