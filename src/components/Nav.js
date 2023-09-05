
import { useState } from "react"
import { NavLink, useLocation } from "react-router-dom"
import {RxHamburgerMenu} from "react-icons/rx"
import {FaTimes} from "react-icons/fa"


export default function Nav(){
    document.querySelectorAll(".nav-pages-link").forEach(link => {
        if(link.href === window.location.href){
            link.setAttribute("aria-current", "page")
        }
    })
    
    const [navState, setNavState] = useState(false)
    const location = useLocation()


    return (
      <header className="nav sticky top-0 left-0 z-[99]">   
        <div className="bg-[#0b113d] py-1 sm:py-2">
            <div className="flex justify-between items-center w-11/12 lg:w-10/12 mx-auto">
                <h4 className="text-white">
                <a href="/" className="logo border-b-2 lg:border-b-4 border-white text-[18px] sm:text-[20px] md:text-[24px] lg:text-[28px] xl:text-[35px]">TRESTLE</a>
                </h4>
                <div  className="login-signup text-[13px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[22px] hidden sm:block sm:font-bold"><button className="nav-login rounded  py-[2px] p-1 text-white "><a href="sign-in">LOG IN</a></button>
                <button className=" py-[2px] rounded ml-2 lg:ml-4 p-1 border-2 bg-white text-[#0b113d]" ><a href="sign-up">SIGN UP</a></button>
                </div>
                <RxHamburgerMenu className={`text-white w-10 h-10 px-2 py-1 sm:hidden rounded`} onClick={() => {
                setNavState(!navState)
                }} />
            </div> 
        </div>
        
        <div className="bg-white">
            <nav className={`nav-pages ${navState ? "h-[100vh] right-0 w-8/12 bg-[#4A6DA7] text-[white] " : "h-0 right-[-100%]"}  sm:w-11/12 lg:w-10/12 mx-auto absolute sm:relative transition-all overflow-hidden sm:py-2 sm:h-auto sm:left-0`}>
            <div className="flex justify-end mr-4 mt-2">
                <FaTimes className="h-4 sm:hidden hover:text-[#D7AEFB]" onClick={() => {
                    setNavState(false)
                }}/>
            </div>
                <ul className={`flex flex-col space-y-4 text-white sm:space-y-0 pl-4 pr-2 sm:pl-0 sm:pr-0 sm:pt-0 h-1/2 sm:h-auto sm:flex-row sm:justify-between sm:relative w-full text-[15px] sm:text-[16px] md:text-[20px] lg:text-[24px] xl:text-[27px] text-gray-700 font-bold sm:text-black sm:text-[#908989] uppercase sm:normal-case font-[Roboto]`}>
                    <li>
                        <a href="/about" className={`about-us nav-pages-link hover:text-[#D7AEFB] ${location.pathname === '/about' ? 'text-[#FFB6C1] sm:text-[#4A6DA7]' : ''}`}>About Us</a>
                    </li>
                    <li>
                        <a className={`nav-pages-link hover:text-[#D7AEFB] ${location.pathname === '/invest' ? 'text-[#FFB6C1] sm:text-[#4A6DA7]' : ''}`} href="/invest ">Invest</a>
                    </li>
                    <li>
                        <a className={`nav-pages-link hover:text-[#D7AEFB] ${location.pathname === '/find-investor' ? 'text-[#FFB6C1] sm:text-[#4A6DA7]' : ''}`} href="/find-investor">Find An Investor</a>
                    </li>
                    <li>
                        <a className={`nav-pages-link hover:text-[#D7AEFB] ${location.pathname === '/events' ? 'text-[#FFB6C1] sm:text-[#4A6DA7]' : ''}`} href="/events">Events</a>
                    </li>
                    <li>
                        <a className={`nav-pages-link hover:text-[#D7AEFB] ${location.pathname === '/success-stories' ? 'text-[#FFB6C1] sm:text-[#4A6DA7]' : ''}`} href="/success-stories">Success Stories</a>
                    </li>
                    <li className="sm:hidden">
                        <a className={`nav-pages-link hover:text-[#D7AEFB] ${location.pathname === '/sign-in' ? 'text-[#FFB6C1] sm:text-[#4A6DA7]' : ''}`} href="/sign-in">Log in</a>
                    </li>
                    <li className="sm:hidden">
                        <a className={`nav-pages-link hover:text-[#D7AEFB] ${location.pathname === '/sign-up' ? 'text-[#FFB6C1] sm:text-[#4A6DA7]' : ''}`} href="/sign-up
                        ">Sign up</a>
                    </li>
                </ul>
            </nav>
        </div>
                
            
      </header>
    );
}