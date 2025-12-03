import { Link } from "react-router-dom";
import Navbar from "../Components/Navbar";
import { FaArrowRightLong } from "react-icons/fa6";
import Rectangle27 from '../../public/images/Rectangle 27.png';
import Rectangle26 from '../../public/images/Rectangle 26.png';
import Rectangle28 from '../../public/images/Rectangle 28.png';

import register from '../../public/images/icons/register.png';
import knowledge from '../../public/images/icons/knowledge.png';
import priceLabel from '../../public/images/icons/price-label.png';
import hourSupport from '../../public/images/icons/24-hours-support.png';



const AboutUs = () => {
    
    return (
        <div>
            <div className="bg-black">
                <section className="mx-auto mb-10 lg:w-10/12 lg:mb-20">
                    <Navbar></Navbar>
                </section>
            </div>
             <section className="mx-auto mb-10 lg:w-10/12 lg:mb-20">
                    <div className="items-center justify-center mx-5 lg:flex gap-7">
                        <div className="space-y-5">
                            <h2 className="text-2xl font-semibold lg:text-4xl">About Us</h2>
                            <p>A group of travel enthusiasts and local guides who know Bangladesh like the back of their hand. We have created a platform that combines technology and the passion for travel, where you can pack your bags with ease and leave the rest to us.
                               Your dream, our path. Start your next journey with us today! <br /> 
                            </p>
                            
                            <p className="mt-8 text-base font-semibold lg:mt-14">Do you want to find your dream destination right now?</p>
                            <Link to='/destination' className="flex items-center gap-2 px-6 py-3 mx-auto mb-8 text-sm font-medium rounded-lg w-31 btn bg-amber-400 hover:bg-amber-500 lg:mx-0">Let's go <FaArrowRightLong /></Link>
                                                      
                        </div>

                        <div className="relative flex flex-col items-center justify-center w-full h-auto gap-4 lg:gap-10">
                            
                            <img 
                                className="z-10 object-cover border-4 rounded-full border-amber-200 w-30 h-30 lg:w-40 lg:h-40
                                transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
                                src={Rectangle27}
                                alt="" 
                            />
                            <div className="relative z-0 flex justify-center -mt-8 lg:-mt-16">
                                <img 
                                    className="object-cover border-4 rounded-full border-amber-200 w-30 h-30 lg:w-40 lg:h-40
                                    transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
                                    src={Rectangle26} 
                                    alt="" 
                                />
                                <img 
                                    className="object-cover border-4 rounded-full border-amber-200 w-30 h-30 lg:w-40 lg:h-40
                                    transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl"
                                    src={Rectangle28}
                                    alt="" 
                                />
                            </div>
                        </div>
                    </div>
                    <div className="grid items-stretch h-full grid-cols-1 mx-2 mt-20 lg:space-x-4 md:space-x-4 lg:mt-32 md:grid-cols-2 lg:grid-cols-4">
                        <div className="flex flex-col items-center justify-evenly p-5 space-y-2 text-center shadow-md bg-yellow-100 card min-h-[250px] mb-4
                        transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                            <img className="w-10" src={register} alt="" />
                            <h4 className="text-lg font-semibold">Easy Booking</h4>
                            <p className="text-sm">Providing the easiest and hassle-free experience for booking flights, hotels, and tour packages.</p>
                        </div>
                        <div className="flex flex-col items-center justify-evenly p-5 space-y-2 text-center shadow-md bg-blue-100 card min-h-[250px] mb-4
                        transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                            <img className="w-10" src={knowledge} alt="" />
                            <h4 className="text-lg font-semibold">Local Knowledge</h4>
                            <p className="text-sm">Providing locally crafted tour packages based on the best places in Bangladesh and their hidden gems.</p>
                        </div>
                        <div className="flex flex-col items-center justify-evenly p-5 space-y-2 text-center shadow-md bg-fuchsia-100 card min-h-[250px] mb-4
                        transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                            <img className="w-10" src={priceLabel} alt="" />
                            <h4 className="text-lg font-semibold">Best Value</h4>
                            <p className="text-sm">We believe that you don't need to pay the highest price for the best experience. That's why we help you find the best deals within your budget.</p>
                        </div>
                        <div className="flex flex-col items-center justify-evenly p-5 space-y-2 text-center shadow-md bg-green-100 card min-h-[250px] mb-4
                        transition duration-300 ease-in-out hover:scale-[1.02] hover:shadow-xl">
                            <img className="w-10" src={hourSupport} alt="" />
                            <h4 className="text-lg font-semibold">24/7 Support</h4>
                            <p className="text-sm">Before the journey, during it, or afterwards, our expert team is always by your side.</p>
                        </div>
                    </div>
                </section>
        </div>
    );
};

export default AboutUs;