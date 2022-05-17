import React from "react";

const About = () => {
    return (
        <div className="about py-20" id="about">
            <div className="container mx-auto px-2">
                <div className="about-content">
                    <div className="about-title text-center mb-10">
                        <h2 className="mb-4">
                            Trusted by developers across the world
                        </h2>
                        <p className="p-4 w-10ssssssssssssssss/12 mx-auto">
                            Lorem ipsum dolor sit amet consectetur adipisicing
                            elit. Hic iste quibusdam explicabo nam dolores
                            laboriosam, illo aut perferendis aspernatur facilis
                            mollitia deleniti praesentium perspiciatis, quidem
                            unde aperiam quis earum saepe.
                        </p>
                    </div>
                    <div className="md:grid md:grid-cols-3 gap-10 text-center">
                        <div className="border py-6 px-4 shadow-md rounded mb-4">
                            <p className="font-bold text-4xl mb-2 text-sky-700">
                                100%
                            </p>
                            <p>Completion</p>
                        </div>
                        <div className="border py-6 px-4 shadow-md rounded  mb-4">
                            <p className="font-bold text-4xl mb-2 text-sky-700">
                                24/7
                            </p>
                            <p>Delivary</p>
                        </div>
                        <div className="border py-6 px-4 shadow-md rounded  mb-4">
                            <p className="font-bold text-4xl mb-2 text-sky-700">
                                100K
                            </p>
                            <p>Transactions</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
