import Header from "../components/Header"
import juwal from '../assets/juwal.png';
import Values from '../assets/values.png';
import jald from '../assets/jald.png';

const About = () => {
  return (

     <div className=""> <Header/> 
     <div className="flex justify-center md:pt-10 gap-10 bg-[#FFF5D0]">

     
     <div className="">
          <img src={Values} alt="Values" className="rounded-2xl pb-10 h-[40rem]"/>
     </div>


    <div>
      <div className="text-center md:mt-5">
        <h1 className="text-4xl font-bold">
        About Us
        </h1>
        <p className="text-[1.5rem] text-gray-600 mt-4">Our mission is to find loving homes for pets in need. </p>
      </div>a
      <div className="flex text-center md:gap-20 md:mt-5 justify-center">
        <img src={juwal} alt="juwal" className="rounded-2xl h-[18rem]"/>
        <img src={jald} alt="jald" className="rounded-2xl h-[18rem]"/>
        
      </div>
      <div className="w-[35rem] mt-4 text-center">
          <h1 className="text-2xl font-bold">Who We Are</h1>
          <p className="text-[1.3rem] text-gray-600 mt-2"><p className="text-m text-gray-600 mt-4">Pet Connect is a community of animal lovers dedicated to rescuing and rehoming pets. We create lasting bonds by connecting furry friends with families who will love them forever. </p> </p>
          </div>

    </div>
            <div className="">
             <img src={Values} alt="Values" className="rounded-2xl pb-10 h-[40rem]"/><div className="36">

             </div>
            </div>

    </div>

    </div>
  )
}

export default About