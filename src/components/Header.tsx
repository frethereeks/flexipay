import  { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { RiMenu3Fill, RiWhatsappLine } from 'react-icons/ri';
import { ASSETS_URL } from '../assets';

export default function Header() {
    const location = useLocation();
    const [navOpen, setNavOpen] = useState(false);

    useEffect(() => {
        // This effect can be used to handle any side effects when the location changes
        // For example, you might want to scroll to the top of the page on route change
        window.scrollTo(0, 0);
    }, [location.pathname]);


    const navLinks = [
        { id: "1230", name: 'Home', path: '/' },
        { id: "1231", name: 'About', path: './#about' },
        { id: "1232", name: 'Plans', path: './#plan' },
        { id: "1233", name: 'Contact', path: './#contact' },
        { id: "1233", name: 'FAQs', path: './#faq' },
    ]

    return (
        <header className='bg-white md:p-2 md:rounded-full fixed top-0 md:top-4 left-0 md:left-1/2 md:-translate-x-1/2 w-full md:container z-50 shadow-lg'>
            <div className="container mx-auto relative flex justify-between md:items-center gap-4 p-4 md:p-0">
                <Link to="/" className='flex items-center gap-2 w-[10rem] pr-2'>
                    <div className="h-10 rounded-full relative">
                        <img src={ASSETS_URL['logo']} alt="flexipay logo" className="relative top-0 left-0 h-full bg-cover" />
                    </div>
                </Link>
                <nav className={`flex-1 bg-backdrop md:bg-white w-full absolute md:static top-full ${navOpen ? "left-0" : "left-full"} transition-all duration-300 flex flex-col md:flex-row justify-center md:items-center md:gap-2`}>
                    {
                        navLinks.map((link) => (
                            <Link className={`${link.path === location.pathname ? 'text-white bg-dark' : 'text-primary hover:text-white hover:bg-dark'} font-semibold py-1.5 px-4 text-sm md:rounded-md`} key={link.id} to={link.path}>{link.name}</Link>
                        ))
                    }
                </nav>
                <div className="flex gap-2 w-max">
                    <Link to="https://wa.me/2349088888733?text=Hi%20I%20want%20to%20know%20more%20about%20the%20flexipay%20plans" target="_blank" rel="noopener noreferrer" className="relative bg-green-500 hover:bg-green-600/70 rounded-full h-10 w-10 grid place-items-center text-2xl md:text-2xl font-light text-white">
                        <RiWhatsappLine />
                    </Link>
                    <div onClick={() => setNavOpen(!navOpen)} className="relative md:hidden h-10 w-10 grid place-items-center text-2xl text-primary bg-backdrop hover:bg-primary hover:text-white rounded-full cursor-pointer">
                        <RiMenu3Fill />
                    </div>
                </div>
            </div>
        </header>
    )
}
