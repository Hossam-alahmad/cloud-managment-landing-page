import React from "react";
import { icons } from "../Uitilites/react-icons";

const Pricing = () => {
    const { checked } = icons;
    return (
        <div className="pricing  py-20 relative" id="pricing">
            <div className="overlay absolute top-0 left-0 w-full bg-sky-900/80 h-[700px] md:h-[600px]"></div>
            <div className="container mx-auto px-2 relative z-50">
                <div className="title mb-10 text-center text-white">
                    <h2 className="mb-4">Pricing</h2>
                    <p className="text-3xl mb-4">
                        The right price for your research
                    </p>
                    <p className="w-10/12 md:w-8/12 mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptas ratione inventore quod sunt voluptatibus
                        cumque fuga quisquam culpa odio! Corporis quis eveniet
                        rerum, nemo earum ad obcaecati inventore totam? Maxime.
                    </p>
                </div>
                <div className="pricing-content md:grid md:gap-x-4 md:grid-cols-2 xl:w-8/12 mx-auto">
                    <div className="card bg-white rounded p-4 shadow-xl mb-4">
                        <span className="bg-sky-700 rounded-full py-2 px-4 inline-block mb-2 text-white text-[.6rem]">
                            STANDARD
                        </span>
                        <div className="font-bold mb-4">
                            <span className="text-4xl">$49</span>
                            <span>/mo</span>
                        </div>
                        <p className="mb-4 text-zinc-600">
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                        </p>
                        <ul className="mb-4">
                            <li className="flex items-center text-lg p-0 py-2">
                                <span className="mr-2 text-xl text-green-700">
                                    {checked}
                                </span>{" "}
                                Lorem,ipsum dolar
                            </li>
                            <li className="flex items-center text-lg p-0 py-2">
                                <span className="mr-2 text-xl text-green-700">
                                    {checked}
                                </span>{" "}
                                Lorem,ipsum dolar
                            </li>
                            <li className="flex items-center text-lg p-0 py-2">
                                <span className="mr-2 text-xl text-green-700">
                                    {checked}
                                </span>{" "}
                                Lorem,ipsum dolar
                            </li>
                            <li className="flex items-center text-lg p-0 py-2">
                                <span className="mr-2 text-xl text-green-700">
                                    {checked}
                                </span>{" "}
                                Lorem,ipsum dolar
                            </li>
                            <li className="flex items-center text-lg p-0 py-2">
                                <span className="mr-2 text-xl text-green-700">
                                    {checked}
                                </span>{" "}
                                Lorem,ipsum dolar
                            </li>
                        </ul>
                        <button className="btn-primary w-full p-3 ">
                            Get Started
                        </button>
                    </div>
                    <div className="card bg-white rounded p-4 shadow-xl mb-4">
                        <span className="bg-sky-700 rounded-full py-2 px-4 inline-block mb-2 text-white text-[.6rem]">
                            PREMIUM
                        </span>
                        <div className="font-bold mb-4">
                            <span className="text-4xl">$49</span>
                            <span>/mo</span>
                        </div>
                        <p className="mb-4 text-zinc-600">
                            Lorem ipsum dolor sit, amet consectetur adipisicing.
                        </p>
                        <ul className="mb-4">
                            <li className="flex items-center text-lg p-0 py-2">
                                <span className="mr-2 text-xl text-green-700">
                                    {checked}
                                </span>{" "}
                                Lorem,ipsum dolar
                            </li>
                            <li className="flex items-center text-lg p-0 py-2">
                                <span className="mr-2 text-xl text-green-700">
                                    {checked}
                                </span>{" "}
                                Lorem,ipsum dolar
                            </li>
                            <li className="flex items-center text-lg p-0 py-2">
                                <span className="mr-2 text-xl text-green-700">
                                    {checked}
                                </span>{" "}
                                Lorem,ipsum dolar
                            </li>
                            <li className="flex items-center text-lg p-0 py-2">
                                <span className="mr-2 text-xl text-green-700">
                                    {checked}
                                </span>{" "}
                                Lorem,ipsum dolar
                            </li>
                            <li className="flex items-center text-lg p-0 py-2">
                                <span className="mr-2 text-xl text-green-700">
                                    {checked}
                                </span>{" "}
                                Lorem,ipsum dolar
                            </li>
                        </ul>
                        <button className="btn-primary w-full p-3 ">
                            Get Started
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Pricing;
