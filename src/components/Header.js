import React from "react";
import headerImg from "../assets/header.jpg.webp";
import { icons } from "../Uitilites/react-icons";
const Header = () => {
    const { cloudUpload, database, server, paperAirplane } = icons;
    return (
        <div className="header bg-white text-lg py-20 relative">
            <div className="container mx-auto px-2">
                <div className="header-content flex flex-col-reverse flex-wrap md:flex-row justify-between items-center mb-16">
                    <div className="header-info w-full md:w-8/12 flex flex-col md:block items-center">
                        <p className="mb-2">Unique Sequencing & Production</p>
                        <h2 className="lg:text-5xl mb-2">Cloud Managment</h2>
                        <p className="mb-2">This is our Tech brand</p>
                        <button className="btn-primary p-2 w-6/12 lg:w-6/12">
                            Get Starter
                        </button>
                    </div>
                    <div className="img-box w-full md:w-4/12 mb-4 md:mb-0">
                        <img
                            src={headerImg}
                            className="aspect-video md:aspect-square w-full"
                            alt={headerImg}
                        />
                    </div>
                </div>
                <div className="header-services md:absolute bg-white shadow-xl  rounded mx-auto md:border  md:border-slate-300 w-11/12 xl:w-8/12 md:left-2/4 md:-translate-x-2/4 p-4">
                    <h5 className="text-center sm:text-left">Data Services</h5>
                    <ul className="flex justify-between items-center flex-wrap">
                        <li className="flex justify-center sm:justify-start  items-center w-full  sm:w-6/12 md:w-auto">
                            <span className="mr-2  text-sky-700">
                                {cloudUpload}
                            </span>
                            App Security
                        </li>
                        <li className="flex  justify-center sm:justify-start items-center w-full sm:w-6/12 md:w-auto">
                            <span className="mr-2 text-sky-700">
                                {database}
                            </span>
                            Dashboard Design
                        </li>
                        <li className="flex  justify-center sm:justify-start items-center w-full sm:w-6/12 md:w-auto">
                            <span className="mr-2 text-sky-700">{server}</span>
                            Cloud Data
                        </li>
                        <li className="flex  justify-center sm:justify-start items-center w-full sm:w-6/12 md:w-auto">
                            <span className="mr-2 text-sky-700">
                                {paperAirplane}
                            </span>
                            Api
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Header;
