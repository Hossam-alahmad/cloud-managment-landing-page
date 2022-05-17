import React from "react";
import { icons } from "../Uitilites/react-icons";

const Footer = () => {
    const { facebook, whatsapp, behance, linkedIn, github } = icons;
    return (
        <div className="footer py-20 bg-sky-900 text-white">
            <div className="container mx-auto px-2">
                <div className="grid gap-x-4 gap-y-8 grid-cols-2 lg:grid-cols-6 mb-4">
                    <div className="solution">
                        <h4 className="uppercase">Solutions</h4>
                        <ul>
                            <li className="cursor-pointer">Marketing</li>
                            <li className="cursor-pointer">Analytics</li>
                            <li className="cursor-pointer">Commerce</li>
                            <li className="cursor-pointer">Data</li>
                            <li className="cursor-pointer">Cloud</li>
                        </ul>
                    </div>
                    <div className="support">
                        <h4 className="uppercase">support</h4>
                        <ul>
                            <li className="cursor-pointer">Pricing</li>
                            <li className="cursor-pointer">Documentation</li>
                            <li className="cursor-pointer">Guides</li>
                            <li className="cursor-pointer">API Status</li>
                        </ul>
                    </div>
                    <div className="company">
                        <h4 className="uppercase">company</h4>
                        <ul>
                            <li className="cursor-pointer">About</li>
                            <li className="cursor-pointer">Blog</li>
                            <li className="cursor-pointer">Jobs</li>
                            <li className="cursor-pointer">Press</li>
                            <li className="cursor-pointer">Partners</li>
                        </ul>
                    </div>
                    <div className="legal">
                        <h4 className="uppercase">legal</h4>
                        <ul>
                            <li className="cursor-pointer">Clain</li>
                            <li className="cursor-pointer">Pivact</li>
                            <li className="cursor-pointer">Policies</li>
                            <li className="cursor-pointer">Terms</li>
                        </ul>
                    </div>
                    <div className="subscribe col-span-2">
                        <h4 className="uppercase mb-2">
                            subsribe to our newsletter
                        </h4>
                        <p className="mb-4">
                            The latest news,articles,and resources, setnt to
                            your inbox weekly
                        </p>
                        <form className="grid grid-cols-3">
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="col-span-2 p-2 rounded-l outline-none text-black"
                            />
                            <input
                                type="submit"
                                value="Subscribe"
                                className="btn-primary cursor-pointer"
                            />
                        </form>
                    </div>
                </div>
                <hr className="mb-4" />
                <div className="flex flex-col-reverse md:flex-row justify-center md:justify-between items-center text-zinc-400  flex-wrap">
                    <p>
                        All right reseved &copy; 2022 by{" "}
                        <span>Hossam Alahmad</span>
                    </p>
                    <ul className="flex justify-between items-center">
                        <li>
                            <a
                                href="https://www.facebook.com/hossma.alahmd/"
                                className="text-2xl block duration-500 hover:scale-125"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {facebook}
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/hossam-alahmed/"
                                className="text-2xl block duration-500 hover:scale-125"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {linkedIn}
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://www.behance.net/hossamahmad1998"
                                className="text-2xl block duration-500 hover:scale-125"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {behance}
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://wa.me/+963959440983"
                                className="text-2xl block duration-500 hover:scale-125"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {whatsapp}
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/Hossam-alahmad"
                                className="text-2xl block duration-500 hover:scale-125"
                                target="_blank"
                                rel="noreferrer"
                            >
                                {github}
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Footer;
