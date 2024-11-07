import React, { useRef } from 'react';
import { motion } from 'framer-motion';

const ProductCard = ({ src, alt }) => (
    <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="relative aspect-[3/4] overflow-hidden group"
    >
        <img
            src={src}
            alt={alt}
            className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
        />
    </motion.div>
);

const Product = () => {
    const heroRef = useRef(null);

    const products = [
        {
            src: "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1721015571786-WEBSITE-PRODUCT-PAGES-01-09.jpg",
            alt: "Woman wearing white graphic t-shirt with shorts"
        },
        {
            src: "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1721015579177-WEBSITE-PRODUCT-PAGES-01-05.jpg",
            alt: "Woman wearing beige hoodie and pants set"
        },
        {
            src: "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1721015584081-WEBSITE-PRODUCT-PAGES-01-07.jpg",
            alt: "Woman wearing white riding club sweatshirt"
        },
        {
            src: "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1721015589607-04-01.jpg",
            alt: "Woman wearing striped polo dress"
        }
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
                    OUR PRODUCT
                </h1>

                <div className="mt-16">
                    <h2 className="text-3xl font-light text-center mb-6">
                        Womenswear
                    </h2>
                    <p className="text-center max-w-4xl mx-auto text-gray-600 leading-relaxed mb-16">
                        Passion and excitement drives everything we do in our design for ladieswear.
                        Our teams travel globally to identify the latest trends and translate them into
                        the must have pieces of the season across ladies casual, formal, leisure and
                        active wear. We develop our own exclusive fabrications and prints to deliver
                        a unique product handwriting for each of our customers with both core and
                        youth market appeal.
                    </p>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
                        {products.map((product, index) => (
                            <ProductCard
                                key={index}
                                src={product.src}
                                alt={product.alt}
                            />
                        ))}
                    </div>
                </div>

                <motion.div
                    className="mt-24 text-center"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <h3 className="text-2xl font-light mb-4">Discover More</h3>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        Explore our complete collection of womenswear, featuring everything from
                        casual essentials to statement pieces designed for the modern woman.
                    </p>
                </motion.div>
            </motion.div>
        </main>
    );
};

export default Product;