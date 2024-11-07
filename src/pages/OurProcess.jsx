import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const ProcessStep = ({ number, text }) => (
    <motion.div
        className="flex items-start space-x-4 mb-8"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: number * 0.1 }}
    >
        <div className="flex-shrink-0 w-12 h-12 border border-gray-300 rounded-full flex items-center justify-center font-light text-xl">
            {number}
        </div>
        <div className="flex-1 pt-3">
            <p className="text-gray-700">{text}</p>
        </div>
    </motion.div>
);

const OurProcess = () => {
    const heroRef = useRef(null);

    const processSteps = [
        "Product development and sampling.",
        "Identifying the proper manufacturer based on requirements.",
        "Order processing.",
        "Communication with buyer and manufacturer for approvals and smooth running of order.",
        "Communicating buyer requirements.",
        "Order follow up at every stage."
    ];

    return (
        <main ref={heroRef} className="pt-32 bg-gradient-to-b from-gray-50 to-white font-styled">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
            >
                <h1 className="text-[6rem] font-light text-start md:text-center tracking-tight leading-none">
                    OUR PROCESS
                </h1>
                <p className="text-center text-lg tracking-[0.2em] mt-8 font-styled">
                    EXCELLENCE IN EVERY STEP
                </p>

                <div className="mt-24 grid grid-cols-1 lg:grid-cols-2 gap-16">
                    <div>
                        <h2 className="text-3xl font-light mb-12">Major Functions of a Garment Buying House</h2>
                        {processSteps.map((step, index) => (
                            <ProcessStep key={index} number={index + 1} text={step} />
                        ))}
                    </div>

                    <div className="space-y-16">
                        <motion.div
                            className="border-t border-gray-200 pt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                        >
                            <h3 className="text-2xl font-light mb-4">Our Approach</h3>
                            <p className="text-gray-600">
                                At KOEL MODISH APPARELS, we've refined our process to ensure efficiency, quality, and satisfaction at every stage. Our approach combines industry expertise with innovative solutions, delivering exceptional results for our clients.
                            </p>
                        </motion.div>

                        <motion.div
                            className="border-t border-gray-200 pt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                        >
                            <h3 className="text-2xl font-light mb-4">Client-Centric Focus</h3>
                            <p className="text-gray-600">
                                We prioritize clear communication and collaboration throughout the entire process. By keeping our clients informed and involved, we ensure that the final product meets and exceeds expectations.
                            </p>
                        </motion.div>

                        <motion.div
                            className="border-t border-gray-200 pt-6"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.4 }}
                        >
                            <h3 className="text-2xl font-light mb-4">Quality Assurance</h3>
                            <p className="text-gray-600">
                                Our rigorous quality control measures are integrated into every step of the process. From initial sampling to final delivery, we maintain the highest standards to deliver premium garments consistently.
                            </p>
                        </motion.div>
                    </div>
                </div>

                {/* <motion.div
                    className="mt-24"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                >
                    <h2 className="text-3xl font-light mb-8 text-center">Our Commitment to Excellence</h2>
                    <div className="aspect-w-16 aspect-h-9 mb-8">
                        <img
                            src="/placeholder.svg?height=400&width=800"
                            alt="Illustration of our garment production process"
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <p className="text-gray-700 max-w-3xl mx-auto text-center">
                        From concept to delivery, our process is designed to bring your vision to life with precision and care. We leverage our expertise and global network to ensure that every garment meets the highest standards of quality and style.
                    </p>
                </motion.div> */}
            </motion.div>
        </main>
    );
};

export default OurProcess;