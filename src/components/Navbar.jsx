import React, { useEffect, useRef, useState } from 'react'
import { Phone, WindIcon } from 'lucide-react';
import { Menu, X } from 'lucide-react';


const Navbar = () => {

    const [scrolled, setScrolled] = useState(false);

    const sideMenuRef = useRef(null);

    const openMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(-16rem)";
        }
    };

    const closeMenu = () => {
        if (sideMenuRef.current) {
            sideMenuRef.current.style.transform = "translateX(16rem)";
        }
    };

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setScrolled(true);
            } else {
                setScrolled(false)
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, [])


    return (
        <div className='overflow-x-hidden '>
            {/* <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
                {/* <img src={bg_color} alt="" className='w-full'/> */}
            {/* </div> */}
            <nav className={`w-full fixed px-5 lg:px-8 xl:px-[8%] py-4 flex items-center justify-between z-50 
                ${scrolled ? "bg-black" : "bg-transparent"}`}>
                <a href="/"> <p className='text-primary text-3xl'>cliq<span className='text-secondary'>wise</span></p></a>
                <ul className='items-center hidden text-white gap-6 px-12 py-3 bg-transparent md:flex lg:gap-8 cursor-pointer'>
                    {/* <li> <AnchorLink href='#home' >Home</AnchorLink> </li> */}
                    <a href="/"><li className='hover:bg-primary px-2 py-2 hover:rounded-xl hover:text-black'> Home</li></a>
                    <a href="/about"><li className='hover:bg-primary px-2 py-2 hover:rounded-xl hover:text-black'>About us</li></a>
                    <a href="/services"><li className='hover:bg-primary px-2 py-2 hover:rounded-xl hover:text-black'>Service</li></a>
                    <a href="/packages"><li className='hover:bg-primary px-2 py-2 hover:rounded-xl hover:text-black'>Packages</li></a>
                    <a href="/contact"><li className='hover:bg-primary px-2 py-2 hover:rounded-xl hover:text-black'>Contact Us</li></a>
                </ul>
                <div className='flex items-center gap-4'>
                    <a href="tel:+94757695714">
                        <div className="hidden lg:flex items-center justify-center gap-3">
                            <Phone className='w-8 h-8 text-primary' />
                            <p className='text-primary'>+94-768-746-58</p>
                        </div>
                    </a>
                    <button className='block ml-3 md:hidden' onClick={openMenu}>
                        <Menu className='w-8 h-8 cursor-pointer text-primary' />
                    </button>
                </div>
                {/* mobile related navbar  */}
                <ul ref={sideMenuRef} id='sideMenu' className='fixed top-0 bottom-0 z-50 flex flex-col w-64 h-screen gap-4 text-lg text-primary px-10 py-20 transition duration-500 -right-64 md:hidden bg-black font-Ovo hover:underline'>

                    <div className='absolute right-6 top-6' onClick={closeMenu}>
                        <X className='w-6 cursor-pointer' />
                    </div>
                    <a href="/"><li>Home</li></a>
                    <a href="/about"><li>About me</li></a>
                    <a href="/services"><li>Services</li></a>
                    <a href="/packages"><li>Packages</li></a>
                    <a href="/contact"><li>Contact Us</li></a>
                </ul>
            </nav>
        </div>
    )
}

export default Navbar