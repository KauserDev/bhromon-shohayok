import { Outlet } from "react-router-dom";
import Navbar from "../Components/Navbar";


const AuthLayout = () => {
    return (
        <div>
            <div className="bg-black">
                <section className="mx-auto mb-10 lg:w-10/12 lg:mb-20">
                    <Navbar></Navbar>
                </section>
            </div>
            <Outlet></Outlet>
        </div>
    );
};

export default AuthLayout;