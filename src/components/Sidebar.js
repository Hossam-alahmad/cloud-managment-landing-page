import React from "react";

const Sidebar = ({ activeSidebar, navData, activeNav, setActiveNav }) => {
    return (
        <div
            className={`sidebar lg:hidden transition-all  absolute top-full h-[calc(100vh_-_68px)] left-0 w-[300px]  bg-white ${
                activeSidebar ? "translate-x-0" : "-translate-x-full"
            }`}
        >
            <div className="sidebar-content">
                <ul className="mb-2">
                    {navData.map(nav => (
                        <li className="sidebar-hover" key={nav.id}>
                            <a
                                onClick={() => setActiveNav(nav.name)}
                                className={`navlist-hover ${
                                    activeNav === nav.name ? "text-sky-700" : ""
                                }`}
                                href="#"
                            >
                                {nav.name}
                            </a>
                        </li>
                    ))}
                </ul>
                <div className="px-4">
                    <button className="border border-sky-700 rounded bg-transparent p-2 w-full mb-2 transition-all  hover:bg-sky-700 hover:text-white">
                        Sign In
                    </button>
                    <button className="btn-primary p-2 w-full">Sign Up</button>
                </div>
            </div>
        </div>
    );
};

export default Sidebar;
