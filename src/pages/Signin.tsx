import { useState } from 'react';
import sign from '../assets/sign.png';
import logo from '../assets/logosign.png';
import styles from './Css/signup.module.css';
import { useNavigate } from 'react-router-dom';


function Signin() {
   const navigate = useNavigate();
   const handleNavigation = () => {
  navigate('/Signup');
};
  const [showPassword, setShowPassword] = useState(false);

 
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
   <div className={styles.signupPage}>
      <div className="flex flex-col md:flex-row items-center justify-center p-4 min-h-screen md:p-10 md:max-w-6xl md:mx-auto rounded-2xl">
        

        <div className="hidden md:flex w-full md:w-1/2 justify-center items-center bg-[#FFF5D0] md:p-20 rounded-t-2xl md:rounded-l-2xl md:rounded-tr-none h-full">
          <div className="text-center">
            <img src={logo} className="md:h-25 mx-auto" />
            <p className="text-lg text-[#555555] mb-8">Find our forever pet.</p>
            <img src={sign} alt="Cute pets" className="md:h-[18rem]" />
          </div>
        </div>


        <div className="w-full md:w-1/2 flex items-center justify-center rounded-2xl md:rounded-tl-none  md:rounded-bl-none p-6 md:p-20 bg-white h-full">
          <div className="w-full max-w-md">
            <h2 className="text-3xl font-bold md:mb-10 text-center text-[#333333]">Sign In</h2>
          <form className="space-y-8">
            <div>
              <label htmlFor="email" className="block text-m font-medium text-gray-700">Email address</label>
              <input type="email" id="email" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-100 p-2" placeholder="Enter your email" />
            </div>
           <div>
                <label htmlFor="password" className="block text-m font-medium text-gray-700"> password</label>
               
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm bg-gray-100 p-2"
                  placeholder="Enter your password"
                />
              </div>
            <div className="flex items-center">
                
                <input
                  id="show-password"
                  type="checkbox"
                  className="h-4 w-4 text-indigo-600 focus:ring-indigo-500 border-gray-300 rounded"
                  onChange={handleShowPassword}
                />
                <label htmlFor="show-password" className="ml-2 block text-sm text-gray-900">Show password</label>
              </div>
            <button type="submit" className="w-full flex justify-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-[#F39C12] hover:bg-[#E67E22] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#E67E22]">
              Sign in
            </button>
          </form>
          <div className="mt-6 text-center text-sm text-gray-500 relative">
            <span className="bg-white px-2">Don't have an account?</span>
            <div className="absolute inset-x-0 top-1/2 h-px bg-gray-300 -z-10"></div>
          </div>
          <div className='text-center'>
          <button onClick={handleNavigation} className="mt-2    py-2 px-4 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            Sign up Here
          </button>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Signin;