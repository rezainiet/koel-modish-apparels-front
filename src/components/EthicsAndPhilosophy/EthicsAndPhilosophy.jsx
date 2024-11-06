'use client'

import { motion } from 'framer-motion'
import { Heart, Users, Scale, Lightbulb, Feather, Leaf } from 'lucide-react'

const principles = [
    {
        title: "HONESTY AND TRANSPARENCY",
        description: "To be applicable for all levels of the effectiveness, judgments and communications with others.",
        icon: Heart
    },
    {
        title: "MUTUAL RESPECT",
        description: "To inherent of all people and the value of diversity.",
        icon: Users
    },
    {
        title: "EQUITY AND JUSTICE",
        description: "To ensure irrespective of race, age, gender, sexual orientation, equal opportunity for everyone, HIV status, color, class, ethnicity, disability, location or religion.",
        icon: Scale
    },
    {
        title: "COURAGE OF CONVICTION",
        description: "To be creative and radical, bold and innovative - without fear of failure - in pursuit of making the greatest possible impact on the causes of poverty.",
        icon: Lightbulb
    },
    {
        title: "INDEPENDENCE",
        description: "For any religious, tribal and cultural belief.",
        icon: Feather
    },
    {
        title: "MODESTY",
        description: "In every presentation and behavior, recognizing part of a wider alliance against poverty.",
        icon: Leaf
    }
]

export default function EthicsAndPhilosophy() {
    return (
        <section className="min-h-screen bg-white font-poppins">
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
            >
                <h1 className="text-5xl md:text-7xl font-light text-center tracking-tight leading-none mb-4">
                    ETHICS & PHILOSOPHY
                </h1>
                <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
                    Our guiding principles that shape our actions and decisions
                </p>
            </motion.div>

            <div className="bg-gradient-to-b from-white to-gray-50">
                <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-24">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                        {principles.map((principle, index) => (
                            <motion.div
                                key={principle.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                            >
                                <div className="flex items-center mb-6">
                                    <div className="bg-gray-100 p-3 rounded-full mr-4">
                                        <principle.icon className="w-6 h-6 text-gray-700" />
                                    </div>
                                    <h2 className="text-xl font-medium tracking-wide">{principle.title}</h2>
                                </div>
                                <p className="text-gray-600 leading-relaxed">{principle.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1 }}
                viewport={{ once: true }}
                className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center"
            >
                <p className="text-xl font-light leading-relaxed max-w-3xl mx-auto mb-8">
                    At KOEL MODISH APPARELS, our ethics and philosophy guide every aspect of our business.
                    We are committed to upholding these principles in our daily operations and long-term strategies.
                </p>
                <a
                    href="#learn-more"
                    className="inline-block px-8 py-3 text-lg tracking-widest hover:bg-black hover:text-white transition-colors duration-300 border-2 border-black"
                >
                    LEARN MORE
                </a>
            </motion.div>
        </section>
    )
}