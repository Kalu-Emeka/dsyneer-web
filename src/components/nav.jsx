import { useState } from "react";
import { NavLink } from "react-router-dom";
function NavBar () {
    const [nav, setNav] = useState(false);
    const showNav = ()  => {
       setNav(!nav)
    }
    const colorChange =  () => {
        
    }
    return (
        <>
            <div className="fixed w-full z-[1000] p-[5px] py-2 bg-[#FDFBF5] shadow-md">
                <nav className="flex justify-between items-center  my-[7px] mx-20 h-10 pb-13 sm:mx-5 lg:mx-20">
                    <div className="flex justify-between items-center w-[100%] sm:w-[100%] md:w-[100%] lg:w-[20%]">
                        <div className="">
                            <a href="/"><img className="w-[40%] sm:w-[30%] md:w-[30%] lg:w-[52%]" src="icons/Button.webp" alt="" /></a>
                        </div>
                        <div className="w-0 sm:w-8 md:w-8 lg:w-0" onClick={showNav}>
                           {!nav ? <img className="cursor-pointer" src="/icons/menu.png" alt=""/> : <img className="cursor-pointer" src="/icons/menu.png" alt=""/>}
                        </div>
                    </div>
                    <ul className="flex justify-between items-center text-[14px] space-x-5 sm:hidden md:hidden lg:flex">
                        <div className="flex justify-between items-center text-[15px] space-x-5 sm:hidden md:hidden lg:flex">
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                isActive 
                                    ? "text-[#6B3E26] font-semibold" 
                                    : "text-black hover:text-[#6B3E26]"
                                }
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                isActive 
                                    ? "text-[#6B3E26] font-semibold" 
                                    : "text-black hover:text-[#6B3E26]"
                                }
                            >
                                About
                            </NavLink>
                             <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                isActive 
                                    ? "text-[#6B3E26] font-semibold" 
                                    : "text-black hover:text-[#6B3E26]"
                                }
                            >
                                Contact
                            </NavLink>
                        </div>
                    </ul>
                    <div className="flex justify-between items-center text-[15px] space-x-5 text-[#1C1C1C] sm:hidden md:hidden lg:flex">
                        <a href="/join-waitlist" rel="noopener noreferrer"><button>Join Waitlist</button></a>
                        <a href="/join-waitlist" rel="noopener noreferrer"><button className="bg-[#6B3E26] text-white rounded-[9px] px-[13px] py-[7px] font-normal">Book a Demo</button></a>
                    </div>
                    <div className={!nav ? 'fixed left-[-100%]' : 'fixed left-0 top-0 w-[40%] text-black mt-[70px] h-full bg-gray-100 shadow-md ease-in-out duration-500 sm:w-[80%] md:w-[40%] lg:hidden'}>
                        <ul className="flex flex-col uppercase w-full p-10 space-y-6">
                             <NavLink
                                to="/"
                                className={({ isActive }) =>
                                isActive 
                                    ? "text-[#6B3E26] font-semibold" 
                                    : "text-black hover:text-[#6B3E26]"
                                }
                                onClick={showNav}
                            >
                                Home
                            </NavLink>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                isActive 
                                    ? "text-[#6B3E26] font-semibold" 
                                    : "text-black hover:text-[#6B3E26]"
                                }
                                onClick={showNav}
                            >
                                About
                            </NavLink>
                             <NavLink
                                to="/contact"
                                className={({ isActive }) =>
                                isActive 
                                    ? "text-[#6B3E26] font-semibold" 
                                    : "text-black hover:text-[#6B3E26]"
                                }
                                onClick={showNav}
                            >
                                Contact
                            </NavLink>
                        </ul>
                        <div className="flex items-center text-[15px] space-x-5 text-[#1C1C1C] pl-[40px]">
                            <a href="/join-waitlist" rel="noopener noreferrer"><button className="bg-transparent border rounded-[9px] px-[13px] py-[7px] font-[10px]">Join Waitlist</button></a>
                            <a href="/join-waitlist" rel="noopener noreferrer"><button className="bg-[#6B3E26] text-white rounded-[9px] px-[13px] py-[7px] font-[10px]">Book a Demo</button></a>
                        </div>
                    </div>
                   
                </nav>
            </div>
        </>
    )
}
export default NavBar