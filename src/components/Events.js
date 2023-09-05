import Nav from "./Nav";
import EventsData from "./EventsData";
import Footer from "./Footer";


export default function Events(){
    return(
        <div className="events text-[13px] sm:text-[15px] md:text-[17px] lg:text-[20px] xl:text-[24px]" id="event">
            <Nav />
           <div className="events-img bg-cover h-64 sm:h-96 md:h-[700px] flex justify-center items-center text-center border-2">
                <div className="font-[Roboto] py-3 bg-gray-200  bg-opacity-[0.8] sm:p-6 md:p-12 rounded">
                    <button className="bg-[#4A6DA7] text-white mx-auto text-[14px] sm:text-[18px] px-3 md:text-[22px] lg:text-[25px] lg:py-1 rounded">Next Event</button>
                    <h1 className="text-[17px] sm:text-[20px] text-[#4A6DA7] mt-3 sm:mt-4 lg:text-[23px] font-bold">The Trestle Global Investors Summit</h1>
                    <p className="text-[13px]mt-2 sm:mt-4 sm:text-[18px] lg:text-[21px] font-bold text-gray-600">Theme: Advancing the world, <span className="text-[#4A6DA7] font-bold">one startup at a time.</span></p>
                    <button className="bg-[#4A6DA7] text-white mx-auto text-[14px] sm:text-[16px] lg:text-[18px] px-2 py-1 lg:py-2 mt-3 sm:mt-4 rounded">Get Your Ticket</button>
                </div>
           </div>
           <div className="upcoming-events w-10/12 sm:w-9/12 mx-auto text-[14px] sm:text-[18px] md:text-[20px] lg:text-[22px] xl:text-[24px] mb-14 sm:mb-18 md:mb-20 lg:mb-22 xl:mb-24">
                <button className="bg-[#4A6DA7] text-white rounded mt-6 sm:mt-10 px-2 text-[16px] sm:text-[19px] md:text-[21px] lg:text-[23px] xl:text-[25px]">Upcoming Events</button>
                <div className="mt-3 sm:mt-5 lg:grid lg:grid-cols-2 lg:gap-10">
                    {EventsData.map((item, index) => {
                        return (
                            <div className="mt-4 sm:mt-6">
                                <h4 className="text-[#4A6DA7]">{item.topic}</h4>
                                <p className="font-[Roboto] text-gray-600">{item.about} 
                                    <a>{item.link}</a>
                                </p>
                                <div className="events-date-div flex justify-between mt-2">
                                <p className="text-[13px] sm:text-[16px] font-[Roboto]">{item.date}</p>
                                <button className="upcoming-event-get-ticket p-1 text-[11px] sm:text-[14px] rounded font-[Roboto] bg-[#4A6DA7] text-white">{item.ticket}</button>
                                </div>
                            </div>
                        )
                    })}
                </div>
           </div>
           <div className="mt-8">
                <Footer />
            </div>
           
        </div>
    )
}