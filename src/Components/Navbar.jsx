import { Link, NavLink, useNavigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from '../AuthProvider/AuthProvider'; 
import { toast } from 'react-toastify';

import tourism from "../../public/images/icons/tourism.png";


const Navbar = () => {

    const { user, logOut } = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignOut = () => {
        logOut()
            .then(() => {
                toast.success('Successfully logged out.', { autoClose: 2000 });
                navigate('/'); 
            })
            .catch(error => {
                //console.error("Logout Error:", error);
                toast.error('Could not log out. Please try again !', { autoClose: 4000 });
            });
    };

    const Route = <>
        <NavLink to='/'><li><a>Home</a></li></NavLink>
        <NavLink to='/aboutUs'><li><a>About Us</a></li></NavLink>
        <NavLink to='/destination'><li><a>Destination</a></li></NavLink>
        <NavLink to='/contactUs'><li><a>Contact Us</a></li></NavLink>
    </>
    return (
        <div>
            <div className="navbar">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="mr-2 text-white lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
      </div>
      <ul
        tabIndex="-1"
        className="p-2 mt-3 shadow menu menu-sm dropdown-content bg-base-100 rounded-box z-1 w-52">
        {Route}
        
      </ul>
    </div>
    <div className="flex items-center gap-1">
        <img className="lg:w-10 w-7" src={tourism} alt="" />
        <a className="text-base font-semibold text-white lg:text-2xl">Bhromon <span className="text-amber-300">Shohayok</span></a>
    </div>
  </div>
  <div className="hidden navbar-center lg:flex">
    <ul className="px-1 text-white menu menu-horizontal">
      {Route}
    </ul>
  </div>
  <div className="navbar-end">
    {
      user ?
      (
        <button
          onClick={handleSignOut}
          className="px-5 py-2 text-xs font-semibold rounded-lg lg:text-sm bg-amber-400 hover:bg-amber-500"
          >
          Logout
          </button>
      )
      :
      (
        <Link to='/auth/login' className="px-5 py-2 text-xs font-semibold rounded-lg lg:text-sm bg-amber-400 hover:bg-amber-500">
          Login
        </Link>
      )                  
    }
  </div>
</div>
        </div>
    );
};

export default Navbar;