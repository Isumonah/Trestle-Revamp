import searchIcon from "../images/search-icon.png"
import Filter from "./Filter"
import kemiAdetiba from "../images/kemi-adetiba.png"
import cynthiaAsorock from "../images/cynthia-asorock.png"
import felixAndrade from "../images/felix-andrade.png"
import adesuaTomid from "../images/adesua-tomid.png"
import locationIcon from "../images/location-icon.png"
import {FaTimes} from "react-icons/fa"
import { CiLocationOn } from 'react-icons/ci'



import Nav from "./Nav"
import Footer from "./Footer"

const investors = [
    {
        img: kemiAdetiba,
        name: "Kemi Adetiba",
        job: "Venture Capitalist",
        location: "Lagos, Nigeria",
        status: "Active",
        salary:"$45,000 - $60,000"
    },
    {
        img: cynthiaAsorock,
        name: "Cynthia Asorock",
        job: "Angel Investor",
        location: "Nairobi, Kenya",
        status: "Active",
        salary:"$30,000 - $80,000"
    },
    {
        img: felixAndrade,
        name: "Felix Andrade",
        job: "Venture Capitalist",
        location: "New York",
        status: "Active",
        salary:"$100,000 - $200,000"
    },
    {
        img: adesuaTomid,
        name: "Adesua Tomid",
        job: "Angel Investor",
        location: "Abuja, Nigeria",
        status: "Active",
        salary:"$500,000 - $800,000"
    }
]


export default function FindInvestor(){
    return(
        <div className="find-investor text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px]" id="find-investor">
            <Nav />
            <div className="flex h-10 md:h-12  mt-8 text-center xl:h-16 w-11/12 lg:w-10/12 mx-auto">
                <input placeholder="Search"  className=" w-9/12 border-2 border-[#4A6DA7] rounded py-1 px-2 md:px-3 md:py-2 lg:py-3 lg:px-5 xl:h-16 xl:text-lg placeholder:text-gray-400"  />
                <div className="search-div bg-[#4A6DA7] -mx-3 w-1/12 rounded-lg  xl:h-16 flex justify-center items-center">
                    <img  className="h-6 xl:h-8" src={searchIcon} alt="search-icon" />
                </div>
            </div>
            <div className="text-[#4A6DA7] w-11/12 lg:w-10/12 mx-auto">
                <h3 className="filter-investors-title mt-10 md:mt-14 mb-2 md:mb-6 sm:text-xl 
                lg:text-2xl font-[Roboto]">Filter Investors:</h3>
                <Filter />
            </div>
            <div className="mt-8">
                <div className="w-11/12 lg:w-10/12 mx-auto">
                    <button className=" px-2 rounded py-1 md:px-3 md:py-2 md:mt-12 xl:text-[24px] font-[Roboto] text-[#FFFFF0] bg-[#4A6DA7]">Featured Investors</button>
                </div>
                <div className="bg-gray-100 ">
                    {investors.map((item, index) => {
                        return (
                            <div className="sm:flex sm:items-center sm:space-x-6 lg:space-x-10  mt-6 py-8 shadow-[0px 4px 4px  rgba(0, 0, 0, 0.25)] w-11/12 lg:w-10/12 mx-auto">
                            <img src={item.img} alt="image of Kemi Adetiba" className="w-10/12 mx-auto sm:w-5/12 lg:w-11/12" />
                            <div className=" w-10/12 mx-auto">
                                <h4 className="name-of-investor mt-4 text-lg sm:text-xl xl:text-[35px] text-[#4A6DA7]">{item.name}</h4>
                                <ul className="investor-details flex flex-wrap space-x-5 mt-1 sm:mt-3 sm:space-x-0 xl:text-[24px] font-[Roboto] list-none text-gray-600">
                                    <li className="investor-job sm:mr-4 ">{item.job}</li>
                                    <li className="investor-location flex items-center">
                                        <CiLocationOn className=" text-[#4A6DA7] text-[20px]"/>
                                        <p className="sm:mr-4">{item.location}</p>
                                    </li>
                                    <li className="text-[#4A6DA7] font-bold">{item.status}</li>
                                </ul>
                                <p className="salary-of-investor sm:mt-3 xl:text-[24px]">{item.salary}</p>
                            </div>
                        </div>
                        )
                    }
                    )}
                </div>

                <div className="mt-8 text-[14px] sm:text-[15px] md:text-[17px] lg:text-[19px] xl:text-[22px] font-[Roboto]">
                        <h3 className="text-center text-[15px] sm:text-[17px] md:text-[19px] lg:text-[20px] xl:text-[24px] mt-10 text-[#4A6DA7] font-bold">Do you want to see more?</h3>
                        <p className="text-center text-gray-600">Join Trestle and be the first to connect with investors</p>
                        <form className="text-[#4A6DA7] mt-6 flex flex-col items-center placeholder:text-[50px]">
                            <label className="flex flex-col w-1/2">
                                Full Name:
                                <input placeholder="Enter full name"  className=" mt-1 border rounded px-2 py-1 xl:px-3 xl:py-4 border-[#4A6DA7] placeholder:opacity-70 placeholder:text-gray-500"/>
                            </label>
                            <label className="flex flex-col w-1/2 mt-2 xl:mt-4">
                                Email Address:
                                <input placeholder="Enter email address" className=" mt-1 border rounded px-2 py-1 xl:px-3 xl:py-4 border-[#4A6DA7] placeholder:opacity-70 placeholder:text-gray-500" />
                            </label>
                            <label className="flex flex-col w-1/2 mt-2 xl:mt-4">
                                Password:
                                <input placeholder="Enter password" className=" mt-1 border rounded px-2 py-1 xl:px-3 xl:py-4 border-[#4A6DA7] placeholder:opacity-70 placeholder:text-gray-500" />
                            </label>
                            <label className="flex flex-col w-1/2 mt-2 xl:mt-4">
                                Confirm Password:
                                <input placeholder="Re-enter password" className=" mt-1 border rounded px-2 py-1 xl:px-3 xl:py-4 border-[#4A6DA7]  placeholder:opacity-70 placeholder:text-gray-500" />
                            </label>
                            <button className=" bg-[#4A6DA7] text-white my-8 py-1 px-3 rounded xl:px-8 xl:py-2">SIGN UP</button>
                        </form>
                </div>
                <Footer />
            </div>
        </div>
    )
}