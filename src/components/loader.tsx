import loadingimg from '../assets/loading.gif';

const Loader = () => {
  return (
    <div className="flex items-center justify-center h-screen bg-[#FFF5D0]">
      <div className="animate-shrink flex flex-col md:flex-row items-center justify-center gap-3 bg-white rounded-full p-6 shadow-lg">
        <img 
          src={loadingimg}
          alt="loading gif"
          className="w-20 h-20 md:w-40 md:h-40"
        />
        <span className="text-[1.2rem] md:text-[1.5rem] font-bold text-gray-700 animate-pulse">
          Loading...
        </span>
      </div>
    </div>
  );
};

export default Loader;
