import adeolaSagoe from "../images/adeola-sagoe.png"
import tolase from "../images/tolase.png"
import smallCircle from "../images/small-circle.png"
import smallCircleGreen from "../images/small-circle-green.png"

import HomeCarouselData from "./HomeCarouselData"

import Footer from "./Footer"
import Nav from "./Nav"
import AboutTrestle from './AboutTrestle'
import { useState } from "react";
import {GiCircle} from "react-icons/gi"


  

export default function Home(){
    const [slidePosition, setSlidePosition] = useState(0)
    const slideLength = HomeCarouselData.length

    let nextSlide = () => {
        setSlidePosition(slidePosition === slideLength - 1 ? 0 : slidePosition + 1)
    }

    // nextSlide()

    


    return(
        <div className="home text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[20px]" id="home">
            <Nav />
            <div className="connect-people h-72 w-11/12 mx-auto md:h-96 flex flex-col items-center justify-center space-y-4 xl:h-[700px] m-[20px] sm:m-[30px] xl:m-[60px] text-[#4A6DA7] bg-[#4AFFF]">
                <h1 className="text-[20px] sm:text-[22px] md:text-[25px] lg:text-[28px] xl:text-[35px]">TRESTLE</h1>
                <h2 className="text-[16px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[25px] mt-2 text-center lg:max-w-lg lg:mr-10 xl:mr-[250px] xl:leading-10">Connecting Business Owners with Potential Investors
                </h2>
                <button className="join-community-button rounded-lg px-2 lg:px-3 xl:px-4 xl:py-2 py-1 mt-2 md:text-xl lg:text-2xl xl:mr-40 xl:px-3 border-2 bg-[#4A6DA7] border-[#4A6DA7] text-white font-bold">Join Our Community!</button>
            </div>
            <div className="home-owner-investor ">
                <div className="lg:flex lg:justify-center lg:py-12 w-11/12 mx-auto">
                    <div className="home-owner 
                    border-2 border-[#4A6DA7] text-[#4A6DA7] flex flex-col items-center lg:h-[300px] justify-center py-10 md:py-12 lg:py-14 xl:h-[400px] xl:w-[700px] z-10" >
                    <h4 className="text-[18px] sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[32px]">Are you a Business Owner?</h4>  
                    <p className="mt-1 w-3/4 md:mt-4">We connect you to over a thousand investors with verified portfolios around Africa</p>
                    <button className="text-[15px] sm:text-[18px] md:text-[20px] lg:text-[23px] xl:text-[26px] px-3 lg:px-4 py-1 lg:py-2 mt-2 md:mt-4 xl:mt-16 xl:ml-64 bg-[#4A6DA7] text-white"><a href="owner-application">Apply Now!</a></button>
                    </div>
                    <div className="home-investor bg-[#4A6DA7] text-white flex flex-col py-10 md:py-12 lg:py-14 xl:mt-[65px] lg:h-[300px] xl:h-[400px] xl:w-[700px] xl:ml-[-80px] items-center lg:ml-[-50px] lg:mt-[40px]">
                    <h4 className="text-[18px] sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[32px]">Are you an Investor?</h4>  
                    <p className="mt-1 w-3/4 md:mt-4 xl:ml-20">Our platform reaches over 300,000 small and medium verified enterprises in Africa. Let's chat.</p>
                    <button className="px-3 py-1 lg:px-4 lg:py-2 mt-2 md:mt-4 xl:mt-16  xl:ml-96 text-[15px] sm:text-[18px] md:text-[20px] lg:text-[23px] xl:text-[26px] bg-white text-[#4A6DA7]"><a href="/investor-application">Invest Now!</a></button>
                    </div>
                </div>
            </div>
            <div className="trestle-vision py-10 md:py-12 lg:py-14 text-[#0898A0] ">
                <h3 className="text-[18px] sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[32px] text-center md:mt-4 text-[#4A6DA7]">THE TRESTLE VISION</h3>
                <p className="w-10/12 mx-auto mt-3 xl:w-9/12 xl:py-6 font-[Roboto] text-gray-600">To be  a reputable and foremost  platform that  connect  SMEs in Africa to their potential investors from various sector(s) ranging from Agriculture, Finance, Education, Technology by providing them with the necessary funding and resources they need to increase there visibility within amd across Africa. We hope to raise not less than 10,000 African(s) in the space of five years to stardom through their businesses.</p>
            </div>
            <div className="trestle-corner py-10 md:py-12 px-6 sm:px-8 lg:px-12 xl:px-0">
                <div className="xl:w-11/12 xl:mx-auto">
                    <h3 className=" text-[18px] sm:text-[20px] md:text-[23px] lg:text-[26px] xl:text-[32px] text-center w-full text-[#4A6DA7]">TRESTLE CORNER</h3>
                    <div>
                        {HomeCarouselData.map((item, index) => {
                            return (
                                <div className="business-mogul adeola flex flex-col lg:flex-row lg:space-x-8 pb-6 text-gray-600">
                                    <div key={index}
                                    className={` ${slidePosition === index ? "block" : "hidden" }`}>
                                        <img className="w-3/4 mx-auto mt-8"
                                        
                                        src={item.img} alt={item.alt} />
                                        <div className="business-mogul-writeup lg:mr-6">
                                            <h3 className="adeola-name text-[17px] sm:text-[19px] md:text-[22px] lg:text-[25px] xl:text-[30px] text-center mt-10 text-[#4A6DA7]">{item.name}</h3>
                                            <p className="adeola-writeup  mt-2 font-[Roboto]">{item.writeup}</p>
                                        </div>
                                        <div className="carousel">
                                            <div className="flex justify-center space-x-2 mt-3 sm:mt-4 md:mt-5 ">
                                                {HomeCarouselData.map((_, index) => {
                                                    return(
                                                        <button key={index} onClick={() => {
                                                            setSlidePosition(index)
                                                            
                                                        }} className={`${slidePosition === index ? "bg-[#4A6DA7]" : "bg-white"} rounded-full h-4 w-4 border border-[#4A6DA7]`}></button>
                                                    )
                                                    
                                                })}
                                            </div>
                                            <button onClick={nextSlide} className="mt-2 sm:mt-3 font-[Roboto] text-center w-full" >Read more featured stories > </button>
                                        </div>
                                    </div>
                                    
                                </div>
                                
                            )
                        })} 
                    </div>
                </div>
            </div>
            <div className="home-about-trestle-div flex justify-center"> <AboutTrestle /></div>
            <div className="w-full">
                <Footer />
            </div>
            
        </div>
    )
}