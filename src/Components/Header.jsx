import Rectangle1 from '../../public/images/Rectangle 1.png';


const Header = ({ children }) => {
    return (
        <div className="relative">
            <img className="w-full filter brightness-40" src={Rectangle1} alt="" />
            
            <div className="absolute top-0 left-0 z-10 w-full">
                {children} 
            </div>
            <div className="absolute top-0 left-0 z-10 w-full">
                {children}
            </div>
        </div>

    );
};

export default Header;