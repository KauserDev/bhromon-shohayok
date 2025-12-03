import Navbar from "../Components/Navbar";
import DestiCard from "../Page/DestiCard";

const Destination = () => {
    return (
        <div>
            <div className="bg-black">
                <section className="mx-auto mb-10 lg:w-10/12 lg:mb-20">
                    <Navbar></Navbar>
                </section>
            </div>
            <section className="mx-auto mb-10 lg:w-10/12 lg:mb-20">
                <DestiCard></DestiCard>
            </section>

        </div>
    );
};

export default Destination;