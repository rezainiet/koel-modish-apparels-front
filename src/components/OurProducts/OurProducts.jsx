'use client'

import { motion } from 'framer-motion'
import { ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import img1 from "../../assets/images/reduced_image_tnf.jpg";

const products = [
    {
        title: "Womenswear",
        image: "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437761992-Photo-Collage-for-Web-07-01-05.jpg",
        className: "col-span-2 row-span-2"
    },
    {
        title: "Menswear",
        image: img1,
        className: "col-span-2 row-span-2"
    },
    {
        title: "Kids",
        image: "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437754010-Photo-Collage-for-Web-07-01-03.jpg",
        className: "col-span-2 row-span-2"
    },
    {
        title: "Home textiles",
        image: "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437750544-Photo-Collage-for-Web-07-01-02.jpg",
        className: "col-span-2 row-span-1"
    },
    {
        title: "Outerwear",
        image: "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437746760-Photo-Collage-for-Web-07-01-01.jpg",
        className: "col-span-2 row-span-2"
    },
    {
        title: "Denim",
        image: "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437761992-Photo-Collage-for-Web-07-01-05.jpg",
        className: "col-span-2 row-span-1"
    },
    {
        title: "Activewear",
        image: "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437757980-Photo-Collage-for-Web-07-01-04.jpg",
        className: "col-span-2 row-span-2"
    }
]

export default function OurProducts() {
    return (
        <section className="min-h-screen bg-white py-24">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-2xl"
                >
                    <h1 className="text-5xl font-light mb-6">Our Product</h1>
                    <p className="text-gray-600 text-lg mb-8">
                        Our innovative designs are deeply rooted in the tradition of garment construction
                        and Manufacturing with a profound appreciation for each customers individually
                        and Market-place.
                    </p>
                    <Link
                        to="/products"
                        className="inline-flex items-center text-black hover:text-gray-600 transition-colors duration-300 group"
                    >
                        View more
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </Link>
                </motion.div>

                <div className="mt-16">
                    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {products.map((product, index) => (
                            <motion.div
                                key={product.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.6, delay: index * 0.1 }}
                                viewport={{ once: true }}
                                className={`relative group overflow-hidden ${product.className}`}
                            >
                                <Link href={`/products/${product.title.toLowerCase()}`} className="block relative aspect-[3/4] h-full">
                                    <div className="absolute inset-0 bg-black bg-opacity-20 transition-opacity duration-300 group-hover:bg-opacity-30" />
                                    <img
                                        src={product.image}
                                        alt={product.title}
                                        className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${index === 1 ? " grayscale" : ""}`}
                                    />
                                    <div className="absolute inset-0 flex items-end p-6">
                                        <div>
                                            <h2 className="text-white text-2xl font-light mb-2">{product.title}</h2>
                                            <motion.div
                                                initial={{ width: 0 }}
                                                whileInView={{ width: "100%" }}
                                                transition={{ duration: 0.8, delay: 0.2 }}
                                                className="h-0.5 bg-white"
                                            />
                                        </div>
                                    </div>
                                </Link>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}