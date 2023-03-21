import { MagnifyingGlass } from 'react-loader-spinner';
import css from '../Loader/Loader.module.css'

const Loader = () => {
  return (
    <div className= {css.spinner}>
      <MagnifyingGlass
        visible={true}
        height="80"
        width="80"
        ariaLabel="MagnifyingGlass-loading"
        wrapperStyle={{ margin: '20' }}
        wrapperClass="MagnifyingGlass-wrapper"
        glassColor="rgb(152, 253, 131)"
        color="rgb(0, 176, 200)"
      />
    </div>
  );
};

export default Loader;
