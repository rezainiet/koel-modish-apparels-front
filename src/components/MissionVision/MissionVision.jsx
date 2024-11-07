'use client'

import React, { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Eye, Target } from 'lucide-react'

const content = [
    {
        title: "VISION",
        description: "To be the most trusted and respected professional services firm recognized by our clients for delivering excellence.",
        icon: Eye,
        image: "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437750544-Photo-Collage-for-Web-07-01-02.jpg"
    },
    {
        title: "MISSION",
        description: "To serve our customer by providing the highest quality professional services that address their business issue. We attract, recruit, and retain the most knowledgeable and passionate professionals, as we provide a collaborative culture the enables them to thrive professionally and personally.",
        icon: Target,
        image: "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437754010-Photo-Collage-for-Web-07-01-03.jpg"
    }
]

export default function MissionVision() {
    const [activeIndex, setActiveIndex] = useState(0)

    return (
        <section className="min-h-screen bg-gradient-to-b from-white to-gray-50 font-poppins overflow-hidden">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-24">
                <motion.h1
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="text-5xl md:text-7xl font-light text-center tracking-tight leading-none mb-32"
                >
                    MISSION & VISION
                </motion.h1>

                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="lg:w-1/2"
                    >
                        <div className="relative h-[600px] overflow-hidden rounded-lg shadow-xl">
                            <AnimatePresence initial={false}>
                                <motion.img
                                    key={activeIndex}
                                    src={content[activeIndex].image}
                                    alt={content[activeIndex].title}
                                    initial={{ opacity: 0, scale: 1.1 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.9 }}
                                    transition={{ duration: 0.5 }}
                                    className="absolute inset-0 w-full h-full object-cover"
                                />
                            </AnimatePresence>
                            <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
                                <h2 className="text-4xl text-white font-light tracking-wide">
                                    {content[activeIndex].title}
                                </h2>
                            </div>
                        </div>
                    </motion.div>

                    <div className="lg:w-1/2 space-y-8">
                        {content.map((item, index) => (
                            <motion.div
                                key={item.title}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                className={`bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer ${activeIndex === index ? 'border-l-4 border-black' : ''
                                    }`}
                                onClick={() => setActiveIndex(index)}
                            >
                                <div className="flex items-center mb-4">
                                    <div className={`p-3 rounded-full mr-4 ${activeIndex === index ? 'bg-black text-white' : 'bg-gray-100 text-gray-700'
                                        }`}>
                                        <item.icon className="w-6 h-6" />
                                    </div>
                                    <h3 className="text-2xl font-medium tracking-wide">{item.title}</h3>
                                </div>
                                <p className="text-gray-600 leading-relaxed mb-4">{item.description}</p>
                                <motion.div
                                    whileHover={{ x: 5 }}
                                    className="flex items-center text-black font-light tracking-wide group"
                                >
                                    Learn More
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </motion.div>
                            </motion.div>
                        ))}
                    </div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="mt-16 text-center"
                >
                    <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
                        At KOEL MODISH APPARELS, our mission and vision are the cornerstones of our operations.
                        They inspire us to strive for excellence in everything we do.
                    </p>
                    <a
                        href="#learn-more"
                        className="inline-block px-8 py-3 text-lg tracking-widest hover:bg-black hover:text-white transition-colors duration-300 border-2 border-black"
                    >
                        EXPLORE MORE
                    </a>
                </motion.div>
            </div>
        </section>
    )
}