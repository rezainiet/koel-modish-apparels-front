import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import globalPresence from "../assets/images/global_presence.jpg";

const StrengthItem = ({ number, text }) => (
    <motion.div
        className="flex items-start space-x-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: number * 0.1 }}
    >
        <div className="flex-shrink-0 w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center font-light text-xl">
            {number}
        </div>
        <p className="text-gray-700 flex-1 pt-3">{text}</p>
    </motion.div>
);

const FeatureCard = ({ title, description }) => (
    <motion.div
        className="border-t border-gray-200 pt-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
    >
        <h3 className="text-2xl font-light mb-4">{title}</h3>
        <p className="text-gray-600">{description}</p>
    </motion.div>
);

const OurStrength = () => {
    const heroRef = useRef(null);

    const strengths = [
        "Less labor cost",
        "Energy at relatively lesser price",
        "Freely accessible infrastructure like railway, sea, river and air route",
        "Has a great number of pre-export financing organizations for guidance",
        "Reasonably open economy, particularly in the Export Processing Zone",
        "Several associations like BGMEA, BKMEA, and BEPZA etc. to build the tight collaboration with various connected organisations",
        "Duty free access to some of the largest market of the world like EU, USA",
        "Thinness of currency opposed to dollar/euro, helping exporters to earn subtle profit",
        "Convince of duty free custom bonded warehouses"
    ];

    return (
        <main ref={heroRef} className="pt-32 bg-gradient-to-b from-gray-50 to-white font-styled">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
            >
                <h1 className="text-[4rem] md:text-[6rem] font-light text-start md:text-center tracking-tight leading-none">
                    OUR STRENGTH
                </h1>
                <p className="text-center text-lg tracking-[0.2em] mt-8 font-styled">
                    EMPOWERING GLOBAL FASHION
                </p>

                <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-light mb-12">Key Strengths</h2>
                        {strengths.map((strength, index) => (
                            <StrengthItem key={index} number={index + 1} text={strength} />
                        ))}
                    </div>

                    <div className="space-y-16">
                        <FeatureCard
                            title="Our Work"
                            description="We leverage our strengths to deliver high-quality products and services to our clients worldwide, setting new standards in the fashion industry."
                        />

                        <FeatureCard
                            title="Quality Assurance"
                            description="Our commitment to quality is unwavering, ensuring that every product meets the highest standards of craftsmanship and durability."
                        />

                        <FeatureCard
                            title="The Process"
                            description="We follow a rigorous process that leverages our strengths to deliver exceptional results consistently, from concept to finished product."
                        />
                    </div>
                </div>

                <motion.div
                    className="mt-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h2 className="text-3xl font-light mb-8">Our Global Presence</h2>
                    <div className="aspect-w-16 aspect-h-9 mb-8">
                        <img
                            src={globalPresence}
                            alt="World map showing our global presence"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <p className="text-gray-700 max-w-3xl mx-auto text-center">
                        Our strengths have enabled us to establish a strong global presence, serving clients across continents and industries. From our strategic locations in Bangladesh, the United Kingdom, and Hong Kong, we leverage our unique advantages to deliver unparalleled value to our partners worldwide.
                    </p>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default OurStrength;