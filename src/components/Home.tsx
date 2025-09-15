import owner from '../assets/ownerr.png';

const Home = () => {
  return (
    <div className='md:flex justify-between md:px-20 px-10 bg-[#FFF5D0]'>
        <div className="text-center mt-1 md:mt-35 pt-10">
            <h1 className="md:text-[3rem] text-[2rem]  font-bold mb-4 md:w-[26rem] text-left">Find Your New
Best Friend Today</h1>
            <p className="md:text-[1.8rem] text-gray-600 md:w-[30rem] text-left">Browse hundreds of loving pets waiting for their forever homes.</p>
            <div className='md:w-[10rem] pt-2 md:pt-5 md:ml-[5rem]'>
             <p
      className="bg-[#EA824E] text-white px-6 py-3 rounded-lg font-medium shadow-md transition-all duration-300 transform hover:bg-[#d76f3e] hover:scale-105"
    >
      Browse Pets
    </p>
    </div>
        </div>
        <div className="">
            <img src={owner} alt="Owner with pet" className="md:h-[43rem]"/>
        </div>
    </div>
  )
}

export default Home