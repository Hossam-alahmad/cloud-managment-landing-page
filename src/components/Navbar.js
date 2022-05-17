import React, { useEffect, useRef, useState } from "react";
import { navData } from "../Uitilites/navData";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import Sidebar from "./Sidebar";
const Navbar = () => {
    const [activeSidebar, setActiveSidebar] = useState(false);
    const [navFixed, setNavFixed] = useState(false);
    const [activeNav, setActiveNav] = useState("Home");
    window.onscroll = () => {
        document.documentElement.scrollTop > 0
            ? setNavFixed(true)
            : setNavFixed(false);
    };
    return (
        <div
            className={`navbar py-4 text-lg z-[10000] bg-white ${
                navFixed ? "duration-300 fixed w-full shadow-lg" : "relative"
            }`}
        >
            <div className="container mx-auto px-2">
                <div className="navbar-nav flex justify-between">
                    <div className="flex items-center ">
                        <h1 className="text-sky-700 mr-10">
                            <a href="/">PANDA</a>
                        </h1>
                        <ul className="hidden lg:flex">
                            {navData.map(nav => (
                                <li key={nav.id}>
                                    <a
                                        onClick={() => setActiveNav(nav.name)}
                                        className={`navlist-hover ${
                                            activeNav === nav.name
                                                ? "text-sky-700"
                                                : ""
                                        }`}
                                        href={nav.link}
                                    >
                                        {nav.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="hidden lg:flex items-center">
                        <button className="border-none bg-transparent p-4">
                            Sign In
                        </button>
                        <button className="btn-primary">Sign Up</button>
                    </div>
                    <button
                        onClick={() => setActiveSidebar(!activeSidebar)}
                        className="border-none bg-transparent lg:hidden text-4xl"
                    >
                        <HiOutlineMenuAlt3 />
                    </button>
                </div>
                <Sidebar
                    navData={navData}
                    activeSidebar={activeSidebar}
                    activeNav={activeNav}
                    setActiveNav={setActiveNav}
                />
            </div>
        </div>
    );
};

export default Navbar;
