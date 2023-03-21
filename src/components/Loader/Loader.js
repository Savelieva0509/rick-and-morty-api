import { MagnifyingGlass } from 'react-loader-spinner';

const Loader = () => {
  return (
    
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
  );
};

export default Loader;
