
import logoFacebook from '../images/logo-facebook.png';
import logoLinkedin from '../images/logo-linkedin.png';
import logoGmail from '../images/logo-gmail.png';
import { FaFacebookF } from 'react-icons/fa';
import { BiLogoLinkedin } from 'react-icons/bi';
import { BsGoogle } from 'react-icons/bs'



export default function SignIn() {
  return (
    <div className="w-11/12 lg:w-full mx-auto text-[13px] sm:text-[15px] md:text-[15px] lg:text-[17px] xl:text-[24px] lg:flex" id="sign-in">
        <div className="mt-6 text-[#4A6DA7] lg:w-[50%] lg:px-6">
           <a href="/" className=" text-[18px] sm:text-[20px] md:text-[24px] lg:text-[26px] xl:text-[35px] border-b-2 lg:border-b-4  border-[#4A6DA7] hover:text-[#9d8672] ">TRESTLE</a>
           <div className='h-screen flex flex-col mt-8 sm:mt-10 md:mt-12 lg:mt-14 xl:mt-16'>
            <div className="text-[16px] sm:text-[18px] md:text-[21px] lg:text-[24px] xl:text-[30px] text-center">Sign in to Trestle</div>
            <div className="flex items-center justify-center space-x-2 mt-4">
              <div className="border-[1px] border-[#4A6DA7] rounded-[50%] p-2 transform hover:scale-[1.1]"><FaFacebookF className="md:h-5 md:w-5" />
              </div>
              <div className="border-[1px] border-[#4A6DA7] rounded-[50%] p-2 transform hover:scale-[1.1]">
                <BiLogoLinkedin className="md:h-5 md:w-5" />
              </div>
              <div className="border-[1px] border-[#4A6DA7] rounded-[50%] p-2 transform hover:scale-[1.1]">
                <BsGoogle className='md:h-5 md:w-5' />
              </div>
            </div>
            <div className="font-[Roboto] mt-4 text-center">or use your email account</div>
            <div className=" mt-4 lg:mt-6 xl:mt-10 font-[Roboto] flex flex-col w-10/12 mx-auto max-w-[400px] lg:max-w-none ">Email Address
            <input className="border-[1.5px] rounded p-1 border-[#4A6DA7] mt-1" type="text" placeholder="Enter email address" required></input></div>
            <div className="mt-4 font-[Roboto] flex flex-col w-10/12 mx-auto max-w-[400px] lg:max-w-none">Password
            <input className="border-[1.5px] rounded p-1 border-[#4A6DA7] mt-1" type="password" placeholder="Enter password" required></input></div>
            <div class="font-[Roboto] w-10/12 max-w-[400px] mx-auto text-right mt-1 lg:max-w-none hover:text-[#9d8672]"><a href="#">Forgot password?</a></div>
            <div className="flex justify-center mt-6">
              <button className="font-[Roboto] bg-[#4A6DA7] text-white rounded px-8 py-1 mb-8">Log in</button>
              </div>
            </div>
            </div>
            
        <div className="hidden lg:block text-white opacity-[0.8]  bg-[#4A6DA7] border-2 lg:w-[50%] lg:flex lg:flex-col justify-center items-center leading-[120%]"  >
            <div className="lg:text-[26px] xl:text-[35px] opacity-[0.8]">Hello There!</div>
            <div className="lg:w-1/2 text-center leading-[140%] opacity-[0.9] mt-4">Enter your personal details and start your journey with us.</div>
            <button className="mt-4 text-[#4A6DA7] bg-white px-5 py-2 rounded"><a href="/sign-up">Sign Up</a></button>
        </div>
     
    </div>
  )
}