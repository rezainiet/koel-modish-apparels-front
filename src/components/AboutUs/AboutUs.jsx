'use client'

import { motion } from 'framer-motion'

export default function AboutUs() {
    return (
        <section className="min-h-screen bg-white font-poppins">

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
            >
                <h1 className="text-5xl md:text-7xl font-light text-center tracking-tight leading-none mb-4 uppercase">
                    Koel Modish Apparels
                </h1>
                <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">

                </p>
            </motion.div>

            <div className="bg-neutral-50">
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 1 }}
                    viewport={{ once: true }}
                    className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-24"
                >
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
                        <div className="space-y-8">
                            <p className="text-2xl font-thin leading-relaxed">
                                <span className="font-normal">KOEL MODISH APPARELS</span> is a Buying and
                                Sourcing agency from Bangladesh offers its international buyers, the ultimate
                                solution for sourcing excellent quality Garments, Apparel Accessories from
                                Bangladesh and Internationally.
                            </p>
                            <p className="text-xl font-light leading-relaxed">
                                Our valued expertise and experience in sourcing and technical fields have
                                helped us gain an in-depth understanding of Garments, Apparels and Fashion
                                Accessories.
                            </p>
                            <p className="text-xl font-light leading-relaxed">
                                The company specializes in areas of competitive price, product development,
                                production & timely deliveries, online & post production inspections,
                                coordination & communication.
                            </p>
                        </div>
                        <div className="grid grid-cols-2 gap-4">
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                viewport={{ once: true }}
                                className="aspect-[3/4] bg-neutral-100"
                            >
                                <img
                                    src="https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437761992-Photo-Collage-for-Web-07-01-05.jpg"
                                    alt="Fashion design process"
                                    className="w-full h-full object-cover grayscale"
                                />
                            </motion.div>
                            <motion.div
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: 0.4 }}
                                viewport={{ once: true }}
                                className="aspect-[3/4] bg-neutral-100 mt-16"
                            >
                                <img
                                    src="https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437757980-Photo-Collage-for-Web-07-01-04.jpg"
                                    alt="Fashion collection"
                                    className="w-full h-full object-cover grayscale"
                                />
                            </motion.div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}