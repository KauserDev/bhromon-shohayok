import { Link } from "react-router-dom";
import star1 from "../../public/images/icons/star_1_.png";





const travelDestinations = [
    { id: 1, name: "Cox's Bazar", image: "/images/card1/cox-bazar0.jpg", rating: 4.8, discount: 28},
    { id: 2, name: "Sajek Valley", image: "/images/card1/sajek0.jpg", rating: 4.9, discount: 30 },
    { id: 3, name: "Sreemangal", image: "/images/card1/Sreemangal0.jpg", rating: 4.5, discount: 15 },
    { id: 4, name: "Sundarbans", image: "/images/card1/Sundarbans0.jpg", rating: 4.7, discount: 25 },
    { id: 5, name: "Bandarban", image: "/images/card1/Bandarban0.jpg", rating: 4.6, discount: 18 },
    { id: 6, name: "Saint Martin's", image: "/images/card1/Saint Martin's0.webp", rating: 4.7, discount: 20 },
    { id: 7, name: "Bichanakandi", image: "/images/card1/Bichanakandi0.jpg", rating: 4.4, discount: 15 },
    { id: 8, name: "Kuakata", image: "/images/card1/Kuakata0.jpg", rating: 4.3 , discount: 10},
    { id: 9, name: "Paharpur", image: "/images/card1/Paharpur0.jpg", rating: 4.2, discount: 15 }
];


const DestiCard = () => {
    return (
        <div>
            <div>
                <section className="py-16 bg-gray-100">
                <div className="container px-5 mx-auto">
                    <h2 className="mb-10 text-3xl font-bold text-center">Popular Destinations</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {travelDestinations.map((destination, index) => (
                            <div 
                                key={index} 
                                className="relative rounded-xl overflow-hidden shadow-xl transition duration-300 ease-in-out hover:shadow-3xl hover:scale-[1.02]"
                            >
                                <img 
                                    src={destination.image} 
                                    alt={destination.name} 
                                    className="object-cover w-full h-80"
                                />
                                <div className="absolute inset-0 flex flex-col justify-end p-6 bg-gradient-to-t from-black/90 to-transparent">
                                    <div className="flex items-center justify-between mb-2">
                                        <div className="flex items-center justify-center text-yellow-400">
                                            <img className="w-4" src={star1} alt="" />
                                            <span className="ml-1 text-sm font-semibold text-white">{destination.rating}</span>
                                        </div>
                                        <span className="text-lg font-bold text-white">{destination.discount}% off</span>
                                    </div>
                                    
                                    <h3 className="text-2xl font-bold leading-tight text-white">
                                        {destination.name}
                                    </h3>
                                    
                                    <Link to={`/destination/${destination.id}`} className="w-24 mt-3 btn btn-sm btn-warning">
                                        Book Now
                                    </Link>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
            </div>
        </div>
    );
};

export default DestiCard;