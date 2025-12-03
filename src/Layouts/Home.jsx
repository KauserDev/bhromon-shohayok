import BannerTitle from "../Components/BannerTitle";
import Header from "../Components/Header";
import Navbar from "../Components/Navbar";



const Home = () => {
    return (
        <div>
            <Header>
                <section className="mx-auto mb-10 lg:w-10/12 lg:mb-20">
                    <Navbar></Navbar>
                </section>
                <section className="p-2 mx-auto lg:w-11/12">
                    <BannerTitle></BannerTitle>
                </section>
            </Header>
        </div>
    );
};

export default Home;