import Navbar from "../Components/Navbar";

import Contactus from "../../public/images/Contactus.png";



const ContactUs = () => {
    return (
        <div>
            <div className="bg-black">
                <section className="mx-auto mb-10 lg:w-10/12 lg:mb-20">
                    <Navbar></Navbar>
                </section>
            </div>
            <section className="mx-auto mb-10 lg:w-10/12 lg:mb-20">
                <div>
                    <h2 className="text-2xl font-semibold text-center underline lg:text-3xl">Contact Us</h2>
                    <div className="min-h-screen hero">
                    <div className="flex-col hero-content lg:flex-row-reverse">
                        <div className="w-xl">
                            <img src={Contactus} alt="Contact Us" />
                        </div>
                        <div className="w-full max-w-sm shadow-2xl card bg-base-100 shrink-0">
                            <form className="card-body">
                                <div className="form-control">
                                    <label className="flex items-center gap-2 input input-lg input-bordered">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2.5"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                            <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="12" cy="7" r="4"></circle>
                                            </g>
                                        </svg>
                                        <input type="text" placeholder="Name" className="grow" required minLength="3" maxLength="30" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="flex items-center gap-2 input input-lg input-bordered">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                            <g
                                                strokeLinejoin="round"
                                                strokeLinecap="round"
                                                strokeWidth="2.5"
                                                fill="none"
                                                stroke="currentColor"
                                            >
                                            <rect width="20" height="16" x="2" y="4" rx="2"></rect>
                                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                                            </g>
                                        </svg>
                                        <input type="email" placeholder="mail@site.com" className="grow" required />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <label className="flex items-center gap-2 input input-lg input-bordered">
                                        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16">
                                            <g fill="none">
                                                <path
                                                    d="M7.25 11.5C6.83579 11.5 6.5 11.8358 6.5 12.25C6.5 12.6642 6.83579 13 7.25 13H8.75C9.16421 13 9.5 12.6642 9.5 12.25C9.5 11.8358 9.16421 11.5 8.75 11.5H7.25Z"
                                                    fill="currentColor"
                                                ></path>
                                                <path
                                                    fillRule="evenodd"
                                                    clipRule="evenodd"
                                                    d="M6 1C4.61929 1 3.5 2.11929 3.5 3.5V12.5C3.5 13.8807 4.61929 15 6 15H10C11.3807 15 12.5 13.8807 12.5 12.5V3.5C12.5 2.11929 11.3807 1 10 1H6ZM10 2.5H9.5V3C9.5 3.27614 9.27614 3.5 9 3.5H7C6.72386 3.5 6.5 3.27614 6.5 3V2.5H6C5.44771 2.5 5 2.94772 5 3.5V12.5C5 13.0523 5.44772 13.5 6 13.5H10C10.5523 13.5 11 13.0523 11 12.5V3.5C11 2.94772 10.5523 2.5 10 2.5Z"
                                                    fill="currentColor"
                                                ></path>
                                            </g>
                                        </svg>
                                        <input type="tel" placeholder="Phone" className="grow tabular-nums" required minLength="10" maxLength="10" />
                                    </label>
                                </div>

                                <div className="form-control">
                                    <textarea placeholder="Do you want to know about our service?" className="h-24 textarea textarea-lg textarea-bordered"></textarea>
                                </div>

                                <div className="mt-6 form-control">
                                    <button className="w-full px-5 py-2 font-semibold uppercase rounded-lg bg-amber-400 hover:bg-amber-500">Send Now</button>
                                </div>
                                
                            </form>
                        </div>
                    </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default ContactUs;