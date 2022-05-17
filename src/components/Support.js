import React from "react";
import { icons } from "../Uitilites/react-icons";

const Support = () => {
    const { telephoneFill, nextLink, support, chip } = icons;
    return (
        <div
            className="support bg-support bg-fixed py-20 relative text-center bg-no-repeat bg-cover bg-[center_400px]"
            id="support"
        >
            <div className="overlay absolute top-0 left-0 bg-sky-900/70 w-full h-full"></div>
            <div className="container mx-auto px-2 relative z-40">
                <div className="support-content text-white mb-10">
                    <h2 className=" mb-4">Support</h2>
                    <p className="text-3xl mb-4">Finding the right team</p>
                    <p className="w-10/12 md:w-8/12 mx-auto">
                        Lorem ipsum dolor sit amet, consectetur adipisicing
                        elit. Voluptas ratione inventore quod sunt voluptatibus
                        cumque fuga quisquam culpa odio! Corporis quis eveniet
                        rerum, nemo earum ad obcaecati inventore totam? Maxime.
                    </p>
                </div>
                <div className="cards text-left md:grid md:grid-cols-3 gap-2">
                    <div className="bg-white rounded shadow-sm relative mb-10">
                        <div className="card-header p-4">
                            <span className="bg-sky-700 text-xl  text-white flex justify-center items-center w-[50px] h-[50px] rounded absolute -top-[25px]">
                                {telephoneFill}
                            </span>
                            <h4 className="my-4">Sales</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Excepturi minima amet culpa
                                rem, sequi recusandae, velit assumenda possimus
                                nisi quia a. Minima impedit soluta aspernatur
                                fugit molestiae. Eligendi, nam officiis.
                            </p>
                        </div>
                        <div className="card-footer p-4 rounded-b bg-sky-100 duration-300 hover:bg-sky-700 group ">
                            <a
                                href="#"
                                className="flex justify-between items-center group-hover:text-white"
                            >
                                <p>Contact Us</p>
                                <span>{nextLink}</span>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded shadow-sm relative mb-10">
                        <div className="card-header p-4">
                            <span className="bg-sky-700 text-xl  text-white flex justify-center items-center w-[50px] h-[50px] rounded absolute -top-[25px]">
                                {support}
                            </span>
                            <h4 className="my-4">Technical Support</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Excepturi minima amet culpa
                                rem, sequi recusandae, velit assumenda possimus
                                nisi quia a. Minima impedit soluta aspernatur
                                fugit molestiae. Eligendi, nam officiis.
                            </p>
                        </div>
                        <div className="card-footer p-4 rounded-b bg-sky-100 duration-300 hover:bg-sky-700 group">
                            <a
                                href="#"
                                className="flex justify-between items-center group-hover:text-white"
                            >
                                <p>Contact Us</p>
                                <span>{nextLink}</span>
                            </a>
                        </div>
                    </div>
                    <div className="bg-white rounded shadow-sm relative mb-10">
                        <div className="card-header p-4">
                            <span className="bg-sky-700 text-xl  text-white flex justify-center items-center w-[50px] h-[50px] rounded absolute -top-[25px]">
                                {chip}
                            </span>
                            <h4 className="my-4">Media Inquiries</h4>
                            <p>
                                Lorem, ipsum dolor sit amet consectetur
                                adipisicing elit. Excepturi minima amet culpa
                                rem, sequi recusandae, velit assumenda possimus
                                nisi quia a. Minima impedit soluta aspernatur
                                fugit molestiae. Eligendi, nam officiis.
                            </p>
                        </div>
                        <div className="card-footer p-4 rounded-b bg-sky-100 duration-300 hover:bg-sky-700 group">
                            <a
                                href="#"
                                className="flex justify-between items-center group-hover:text-white"
                            >
                                <p>Contact Us</p>
                                <span>{nextLink}</span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Support;
