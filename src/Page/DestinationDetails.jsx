import { useParams } from 'react-router-dom';
import Navbar from '../Components/Navbar';
import { useState } from 'react';
import Footer from "../Components/Footer";




const allDestinations = [
    {
        id: 1, name: "Cox's Bazar", map_text: "Stay in Cox's Bazar", map_image: "/images/map/cox-map.jpg",
        accommodations: [
            { id: 101, title: "Ocean View Luxury Suite", image: "/images/card2/cox-bazar1.jpg", guests: 4, bedrooms: 2, beds: 2, baths: 2, rating: 4.9, reviews: 20, price: 35.5, total: 50.8 },
            { id: 102, title: "Apartment in Lost Panorama", image: "/images/card2/cox-bazar2.jpg", guests: 4, bedrooms: 2, beds: 2, baths: 2, rating: 4.8, reviews: 10, price: 26.2, total: 32.1 },
            { id: 103, title: "Seaside Bungalow (r&r + b&b)", image: "/images/card2/cox-bazar3.jpg", guests: 4, bedrooms: 2, beds: 2, baths: 2, rating: 4.9, reviews: 25, price: 12.1, total: 18.4 }
        ]
    },
    {
        id: 2, name: "Sajek Valley", map_text: "Stay in Sajek", map_image: "/images/map/sajek-map.jpg",
        accommodations: [
            { id: 201, title: "Sajek Hilltop View Cottage", image: "/images/card2/sajek1.webp", guests: 3, bedrooms: 1, beds: 1, baths: 1, rating: 4.7, reviews: 30, price: 11.3, total: 15.5 },
            { id: 202, title: "Cloud Nine Resort", image: "/images/card2/sajek2.jpg", guests: 2, bedrooms: 1, beds: 1, baths: 1, rating: 4.9, reviews: 50, price: 8.2, total: 12 },
            { id: 203, title: "Misty Mountain Cabin", image: "/images/card2/sajek3.jpg", guests: 4, bedrooms: 2, beds: 3, baths: 2, rating: 4.6, reviews: 15, price: 6, total: 9.9 }
        ]
    },
    {
        id: 3, name: "Sreemangal", map_text: "Stay in Sreemangal", map_image: "/images/map/Sreemangal-map.jpg",
        accommodations: [
            { id: 301, title: "Tea Garden Estate Villa", image: "/images/card2/Sreemangal1.jpg", guests: 5, bedrooms: 2, beds: 3, baths: 2, rating: 4.8, reviews: 40, price: 33.8, total: 45.1 },
            { id: 302, title: "Rainforest Bungalow Retreat", image: "/images/card2/Sreemangal2.jpg", guests: 2, bedrooms: 1, beds: 1, baths: 1, rating: 4.5, reviews: 12, price: 7.3, total: 9.2 },
            { id: 303, title: "Eco-Friendly Tree House", image: "/images/card2/Sreemangal3.jpg", guests: 3, bedrooms: 1, beds: 2, baths: 1, rating: 4.7, reviews: 28, price: 5.2, total: 7.8 }
        ]
    },
    {
        id: 4, name: "Sundarbans", map_text: "Stay in Sundarbans", map_image: "/images/map/Sundarbans-map.jpg",
        accommodations: [
            { id: 401, title: "Houseboat Safari Package", image: "/images/card2/Sundarbans1.jpg", guests: 8, bedrooms: 4, beds: 8, baths: 4, rating: 4.9, reviews: 60, price: 20.4, total: 26.1 },
            { id: 402, title: "Riverside Forest Lodge", image: "/images/card2/Sundarbans2.jpg", guests: 6, bedrooms: 3, beds: 4, baths: 3, rating: 4.6, reviews: 18, price: 13.2, total: 16.2 },
            { id: 403, title: "Eco-Village Homestay", image: "/images/card2/Sundarbans3.jpg", guests: 4, bedrooms: 2, beds: 2, baths: 2, rating: 4.5, reviews: 10, price: 27.9, total: 38.9 }
        ]
    },
    {
        id: 5, name: "Bandarban", map_text: "Stay in Bandarban", map_image: "/images/map/Bandarban-map.jpg",
        accommodations: [
            { id: 501, title: "Nilgiri Mountain Resort", image: "/images/card2/Bandarban1.jpg", guests: 2, bedrooms: 1, beds: 1, baths: 1, rating: 4.9, reviews: 45, price: 40.8, total: 52.7 },
            { id: 502, title: "Nilachal Sunset Cabin", image: "/images/card2/Bandarban2.jpg", guests: 4, bedrooms: 2, beds: 2, baths: 1, rating: 4.7, reviews: 22, price: 25.9, total: 31.4 },
            { id: 503, title: "Hilltop View Homestay", image: "/images/card2/Bandarban3.jpg", guests: 3, bedrooms: 1, beds: 2, baths: 1, rating: 4.5, reviews: 14, price: 10.9, total: 14.5 }
        ]
    },
    {
        id: 6, name: "Saint Martin's Island", map_text: "Stay in Saint Martin's", map_image: "/images/map/Saint Martin's-map.jpg",
        accommodations: [
            { id: 601, title: "Coral Island Beach Huts", image: "/images/card2/Saint Martin's1.jpg", guests: 4, bedrooms: 2, beds: 2, baths: 1, rating: 4.8, reviews: 35, price: 38.2, total: 49.9 },
            { id: 602, title: "Blue Sea Tent Camping", image: "/images/card2/Saint Martin's2.jpg", guests: 2, bedrooms: 1, beds: 1, baths: 1, rating: 4.6, reviews: 19, price: 42.4, total: 61.2 },
            { id: 603, title: "Seafood Garden Cottages", image: "/images/card2/Saint Martin's3.jpg", guests: 5, bedrooms: 2, beds: 3, baths: 2, rating: 4.7, reviews: 25, price: 24.6, total: 31.8 }
        ]
    },
    {
        id: 7, name: "Bichanakandi", map_text: "Stay in Bichanakandi", map_image: "/images/map/Bichanakandi-map.jpg",
        accommodations: [
            { id: 701, title: "Stone River Lodge", image: "/images/card2/Bichanakandi1.jpg", guests: 3, bedrooms: 1, beds: 2, baths: 1, rating: 4.5, reviews: 15, price: 12.5, total: 19.2 },
            { id: 702, title: "Foothills Inn", image: "/images/card2/Bandarban2.jpg", guests: 2, bedrooms: 1, beds: 1, baths: 1, rating: 4.6, reviews: 10, price: 11.4, total: 16.5 },
            { id: 703, title: "River View Homestay", image: "/images/card2/Bandarban3.jpg", guests: 4, bedrooms: 2, beds: 2, baths: 2, rating: 4.4, reviews: 8, price: 11.3, total: 17.2 }
        ]
    },
    {
        id: 8, name: "Kuakata", map_text: "Stay in Kuakata", map_image: "/images/map/Kuakata-map.jpg",
        accommodations: [
            { id: 801, title: "Sunrise Deluxe Hotel", image: "/images/card2/Kuakata1.jpg", guests: 5, bedrooms: 2, beds: 3, baths: 2, rating: 4.3, reviews: 30, price: 8.3, total: 14 },
            { id: 802, title: "Seaside Family Resort", image: "/images/card2/Kuakata2.jpg", guests: 4, bedrooms: 2, beds: 2, baths: 2, rating: 4.5, reviews: 20, price: 5.2, total: 7.9 },
            { id: 803, title: "Beachfront Economy Lodge", image: "/images/card2/Kuakata3.jpg", guests: 2, bedrooms: 1, beds: 1, baths: 1, rating: 4.2, reviews: 20.3, price: 30, total: 29.1 }
        ]
    },
    {
        id: 9, name: "Paharpur", map_text: "Stay in Paharpur", map_image: "/images/map/Paharpur-map.jpg",
        accommodations: [
            { id: 901, title: "History Hub Guesthouse", image: "/images/card2/Paharpur1.jpg", guests: 2, bedrooms: 1, beds: 1, baths: 1, rating: 4.2, reviews: 10, price: 13.4, total: 8.2 },
            { id: 902, title: "Rural Heritage Home", image: "/images/card2/Paharpur2.jpg", guests: 3, bedrooms: 1, beds: 2, baths: 1, rating: 4.3, reviews: 5, price: 18, total: 22.9 },
            { id: 903, title: "Local Farm Stay", image: "/images/card2/Paharpur3.jpg", guests: 4, bedrooms: 2, beds: 2, baths: 2, rating: 4.0, reviews: 3, price: 9.2, total: 14.9 }
        ]
    }
];

const DestinationDetails = () => {

    const { destinationId: paramId } = useParams();
    const destinationId = parseInt(paramId, 10); 

    const [selectedAccommodation, setSelectedAccommodation] = useState(null);
    
    const destination = allDestinations.find(d => d.id === destinationId);

    if (!destination) {
        return <div className="py-20 text-xl text-center text-red-600">No data found for ID: {paramId}</div>;
    }
    
    const accommodations = destination.accommodations; 

    const handleBookStay = (accommodationData) => {
        setSelectedAccommodation(accommodationData);
        document.getElementById('booking_modal').showModal();
    };

    const closeModal = () => {
        setSelectedAccommodation(null);
        document.getElementById('booking_modal').close(); 
    };

    const BookingModal = () => {
        if (!selectedAccommodation) return null; 

        return (
            <dialog id="booking_modal" className="modal">
                <div className="modal-box">
                    <h3 className="mb-4 text-2xl font-bold text-amber-500">Book: {selectedAccommodation.title}</h3>
                    
                    {/* Accommodation Information*/}
                    <p className="py-1 text-sm text-gray-700">
                        {selectedAccommodation.guests} guests · {selectedAccommodation.bedrooms} bedrooms · Tk.{selectedAccommodation.price}k/night
                    </p>
                    <img 
                        src={selectedAccommodation.image} 
                        alt={selectedAccommodation.title} 
                        className="object-cover w-full h-40 my-3 rounded-lg"
                    />

                    <form className="mt-4">
                        {/* Booking Form Fields */}
                        <div className="form-control">
                            <label className="mr-4 label"><span className="label-text">Check-in Date</span></label>
                            <input type="date" className="input input-bordered" required />
                        </div>
                        <div className="mt-2 form-control">
                            <label className="mr-1 label"><span className="label-text">Check-out Date</span></label>
                            <input type="date" className="input input-bordered" required />
                        </div>
                        <div className="mt-4 form-control">
                            <button type="submit" className="text-white bg-orange-500 btn hover:bg-orange-600">
                                Confirm Booking
                            </button>
                        </div>
                    </form>
                    
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn" onClick={closeModal}>Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        );
    };

    return (
        <div>
            <div className="bg-black">
                <section className="mx-auto mb-10 lg:w-10/12 lg:mb-20">
                    <Navbar></Navbar>
                </section>
            </div>
            <div className="container p-4 mx-auto mb-10 lg:p-8 lg:w-10/12 lg:mb-20">
            <h1 className="mb-6 text-3xl font-bold">{destination.map_text}</h1>
            
            <div className="flex flex-col gap-8 lg:flex-row">
                <div className="space-y-8 lg:w-7/12">
                    {accommodations.map((acc) => (
                        <div key={acc.id} className="flex flex-col gap-4 pb-4 border-b md:flex-row">
                            <div className="w-full h-48 overflow-hidden bg-gray-200 rounded-lg md:w-56 md:h-40 shrink-0">
                                <img 
                                    src={acc.image} 
                                    alt={acc.title} 
                                    className="object-cover w-full h-full" 
                                />
                            </div>

                            <div className="flex-1">
                                <h2 className="mb-1 text-xl font-semibold">{acc.title}</h2>
                                <p className="mb-2 text-sm text-gray-600">
                                    {acc.guests} guests · {acc.bedrooms} bedrooms · {acc.beds} beds · {acc.baths} baths
                                </p>
                                <p className="mb-3 text-sm text-gray-600">
                                    Wifi · Air conditioning · Kitchen · Cancellation flexibility available
                                </p>
                                
                                <div className="flex items-center justify-between mt-2">
                                    <span className="flex items-center justify-center text-sm font-semibold text-yellow-600">
                                        <img className='max-w-3.5' src="/images/icons/star_1_.png" alt="" /> {acc.rating} ({acc.reviews})
                                    </span>
                                    <div className="text-right">
                                        <span className="text-lg font-bold text-gray-800">Tk.{acc.price}k/night</span>
                                        <span className="ml-2 text-sm text-gray-500 line-through">Tk.{acc.total}k total</span>
                                    </div>
                                </div>
                                <button onClick={() => handleBookStay(acc)} className="mt-2 btn btn-sm bg-amber-400 hover:bg-amber-500">Book This Stay</button>
                            </div>
                        </div>
                    ))}
                </div>
                

                <div className="relative lg:w-5/12 sticky top-4 lg:h-auto h-[500px] rounded-lg shadow-xl overflow-hidden">
                    <img 
                        src={destination.map_image} 
                        alt={`${destination.name} Map`} 
                        className="object-cover w-full h-full"
                    />
                </div>
            </div>
        </div>
            <BookingModal />


            <section>
                <Footer></Footer>
            </section>
        </div>
    );
};

export default DestinationDetails;