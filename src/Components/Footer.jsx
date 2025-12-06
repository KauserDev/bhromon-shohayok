

const Footer = () => {
    return (
        <div>
            <footer className="p-10 space-y-2 bg-black footer footer-horizontal footer-center text-primary-content">
                <aside>
                    
                    <img className="inline-block w-8 fill-current lg:w-10" src="/images/icons/tourism.png" alt="" />
                    
                    <p className="text-2xl font-bold">
                    Bhromon <span className="text-amber-500">Shohayok</span>
                    <br />
                    <span className="text-base">Providing reliable tech since 2025</span>
                    </p>
                    <p>Copyright © {new Date().getFullYear()} Kauser Hosssen - All right reserved</p>
                </aside>
                
            </footer>
        </div>
    );
};

export default Footer;