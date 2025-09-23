import { useState, useEffect } from "react";

import juwal from '../assets/juwal.png';
import Values from '../assets/values.png';
import jald from '../assets/jald.png';
import stories from '../assets/stories.png';
import Loader from "../components/loader";

const About = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
   
    const timer = setTimeout(() => {
      setLoading(false);
    }, 1000); 

    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return <Loader />;
  }
  return (
    <div className="">
     
      <div className="flex flex-col md:flex-row justify-center md:pt-10 gap-6 md:gap-10 bg-[#FFF5D0] p-4">

       
        <div className="flex justify-center">
          <img 
            src={Values} 
            alt="Values" 
            className="rounded-2xl pb-6 md:pb-10 w-full max-w-xs sm:max-w-sm md:h-[40rem] object-cover"
          />
        </div>

       
        <div className="flex flex-col items-center md:items-start">
          <div className="text-center md:mt-5">
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold">
              About Us
            </h1>
            <p className="text-base sm:text-lg md:text-[1.5rem] text-gray-600 mt-4">
              Our mission is to find loving homes for pets in need.
            </p>
          </div>

          <div className="flex flex-col md:ml-15 sm:flex-row text-center gap-4 md:gap-20 md:mt-5 justify-center">
            <img 
              src={juwal} 
              alt="juwal" 
              className="rounded-2xl w-full sm:w-40 md:h-[18rem] object-cover" 
            />
            <img 
              src={jald} 
              alt="jald" 
              className="rounded-2xl w-full sm:w-40 md:h-[18rem] object-cover" 
            />
          </div>

          <div className="w-full sm:w-[90%] md:w-[35rem] mt-6 text-center md:text-left">
            <h1 className="text-lg sm:text-xl md:text-2xl font-bold">Who We Are</h1>
            <p className="text-sm sm:text-base md:text-[1.3rem] text-gray-600 mt-2">
              Pet Connect is a community of animal lovers dedicated to rescuing and rehoming pets. 
              We create lasting bonds by connecting furry friends with families who will love them forever.
            </p>
          </div>
        </div>

        
        <div className="flex  justify-center">
          <img 
            src={stories} 
            alt="Values" 
            className="rounded-2xl pb-6 md:pb-10 w-full max-w-xs sm:max-w-sm md:h-[40rem] object-cover"
          />
        </div>
      </div>
    </div>
  )
}

export default About
