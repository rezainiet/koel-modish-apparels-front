'use client'

import { motion } from 'framer-motion'
import { ArrowRight, Linkedin, Instagram } from 'lucide-react'
import { Link } from 'react-router-dom'
import logo from "../../assets/logo/koel_modish_apparels_logo.png"

export default function Footer() {
    const handleSubmit = (e) => {
        e.preventDefault()
        // Handle newsletter signup
    }

    return (
        <footer className="bg-black text-white py-20">
            <div className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
                    {/* Left Column - Navigation */}
                    <div className="space-y-8">
                        <motion.nav
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="space-y-6"
                        >
                            {[
                                { href: '/about', label: 'About' },
                                { href: '/careers', label: 'Careers' },
                                { href: '/dei', label: 'Diversity, Equity and Inclusion' },
                                { href: '/action-plan', label: 'Reconciliation Action Plan' },
                                { href: '/contact', label: 'Contact' },
                            ].map((item) => (
                                <div key={item.href} className="border-b border-gray-800">
                                    <Link
                                        href={item.href}
                                        className="block py-2 text-2xl font-light hover:text-gray-300 transition-colors duration-300"
                                    >
                                        {item.label}
                                    </Link>
                                </div>
                            ))}
                        </motion.nav>
                    </div>

                    {/* Right Column - Info and Social */}
                    <div className="space-y-12">
                        {/* Certification Logos */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8 }}
                            className="flex gap-8 items-start"
                        >
                            <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center">
                                <img src={logo} alt="Logo of Koel Modish Apparels" />
                                {/* <span className="text-black text-xs text-center">B Corp Logo</span> */}
                            </div>
                            {/* <div className="w-36 h-20 bg-white  flex items-center justify-center">
                                <img src={logo} alt="Koel Modish Apparels Logo" />
                            </div> */}
                        </motion.div>

                        {/* Website Information */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="space-y-4"
                        >
                            <h2 className="text-xl font-light mb-4">Website Information</h2>
                            <div className="space-y-2">
                                <Link href="/privacy" className="block text-gray-300 hover:text-white transition-colors duration-300">
                                    Privacy Policy
                                </Link>
                                <Link href="/accessibility" className="block text-gray-300 hover:text-white transition-colors duration-300">
                                    Accessibility Statement
                                </Link>
                            </div>
                        </motion.div>

                        {/* Newsletter Signup */}
                        <motion.form
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.4 }}
                            onSubmit={handleSubmit}
                            className="relative"
                        >
                            <input
                                type="email"
                                placeholder="Enter your email"
                                className="w-full bg-transparent border-b border-gray-800 py-2 pr-12 text-white placeholder-gray-500 focus:outline-none focus:border-white transition-colors duration-300"
                            />
                            <button
                                type="submit"
                                className="absolute right-0 top-1/2 -translate-y-1/2 p-2 hover:text-gray-300 transition-colors duration-300"
                            >
                                <ArrowRight className="w-6 h-6" />
                            </button>
                        </motion.form>

                        {/* Social Links */}
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.6 }}
                            className="flex gap-6"
                        >
                            <Link
                                href="https://linkedin.com"
                                target="_blank"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                <Linkedin className="w-6 h-6" />
                                <span className="sr-only">LinkedIn</span>
                            </Link>
                            <Link
                                href="https://instagram.com"
                                target="_blank"
                                className="hover:text-gray-300 transition-colors duration-300"
                            >
                                <Instagram className="w-6 h-6" />
                                <span className="sr-only">Instagram</span>
                            </Link>
                        </motion.div>
                    </div>
                </div>

                {/* Copyright */}
                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    transition={{ duration: 0.8, delay: 0.8 }}
                    className="mt-20 text-sm text-gray-500"
                >
                    © Koel Modish Apparels {new Date().getFullYear()}
                </motion.div>
            </div>
        </footer>
    )
}