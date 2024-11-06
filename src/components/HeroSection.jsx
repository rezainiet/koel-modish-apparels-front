import React, { useEffect, useRef, useState } from "react"
import { Plus, ChevronDown, Menu, X } from "lucide-react"
import logo from "./../assets/logo/koel_modish_apparels_logo.png";
import { motion } from 'framer-motion';

export default function HeroSection() {
    const [isScrolled, setIsScrolled] = useState(false)
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
    const [activeSubmenu, setActiveSubmenu] = useState(null)
    const heroRef = useRef(null)

    const images = [
        "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437746760-Photo-Collage-for-Web-07-01-01.jpg",
        "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437750544-Photo-Collage-for-Web-07-01-02.jpg",
        "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437754010-Photo-Collage-for-Web-07-01-03.jpg",
        "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437757980-Photo-Collage-for-Web-07-01-04.jpg",
        "https://sgp1.digitaloceanspaces.com/staging-hrxbackend/1713437761992-Photo-Collage-for-Web-07-01-05.jpg",
    ]

    useEffect(() => {
        const handleScroll = () => {
            if (heroRef.current) {
                const heroRect = heroRef.current.getBoundingClientRect()
                setIsScrolled(heroRect.bottom <= 0)
            }
        }

        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const toggleSubmenu = (submenu) => {
        setActiveSubmenu(activeSubmenu === submenu ? null : submenu)
    }

    return (
        <div className="min-h-screen bg-white">
            {/* Main Navigation */}
            <header className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b-2 ${isScrolled ? 'shadow-md' : ''}`}>
                <nav className="container mx-auto px-4 py-4">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center space-x-8">
                            <a href="/" className="flex items-center">
                                <img
                                    src={logo}
                                    alt="Logo Of Koel Modish Apparels"
                                    className="h-10 w-24"
                                />
                            </a>
                            <div className="hidden lg:flex items-center space-x-8">
                                <NavItem href="/about" label="ABOUT" submenuItems={[
                                    { href: "/history", label: "History" },
                                    { href: "/leadership", label: "Leadership" },
                                    { href: "/process", label: "Process" },
                                    { href: "/about", label: "Why KMA" },
                                    { href: "/design-studio", label: "Design Studio" },
                                ]} />
                                <NavItem href="/product" label="PRODUCT" submenuItems={[
                                    { href: "/product?filter=womenswear", label: "Womenswear" },
                                    { href: "/product?filter=menswear", label: "Menswear" },
                                    { href: "/product?filter=kids", label: "Kidswear" },
                                    { href: "/product?filter=activewear", label: "Activewear" },
                                ]} />
                                <NavItem href="/sustainability" label="SUSTAINABILITY" />
                                <NavItem href="/social-responsibilities" label="SOCIAL RESPONSIBILITIES" />
                                <NavItem href="/why-kma" label="WHY KMA" />
                                <NavItem href="/recent-highlights" label="RECENT HIGHLIGHTS" />
                            </div>
                        </div>
                        <div className="flex items-center space-x-4">
                            <a href="/contact" className="hidden lg:flex items-center text-gray-600 hover:text-black transition-colors duration-300">
                                <Plus className="h-4 w-4 mr-1" />
                                CONTACT US
                            </a>
                            <button
                                className="lg:hidden flex flex-col items-center justify-center w-6 h-6"
                                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            >
                                <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-black my-1 transition-all duration-300 ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
                                <span className={`w-6 h-0.5 bg-black transition-all duration-300 ${isMobileMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
                            </button>
                        </div>
                    </div>
                </nav>
                {/* Mobile and Tablet Menu */}
                <div className={`lg:hidden bg-white transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                    <div className="px-4 py-2 space-y-2">
                        <MobileNavItem label="ABOUT" submenuItems={[
                            { href: "/history", label: "History" },
                            { href: "/leadership", label: "Leadership" },
                            { href: "/process", label: "Process" },
                            { href: "/about", label: "Why kma" },
                            { href: "/design-studio", label: "Design Studio" },
                        ]} />
                        <MobileNavItem label="PRODUCT" submenuItems={[
                            { href: "/product?filter=womenswear", label: "Womenswear" },
                            { href: "/product?filter=menswear", label: "Menswear" },
                            { href: "/product?filter=kids", label: "Kidswear" },
                            { href: "/product?filter=activewear", label: "Activewear" },
                        ]} />
                        <a href="/sustainability" className="block py-2 text-gray-600 hover:text-black transition-colors duration-300">SUSTAINABILITY</a>
                        <a href="/social-responsibilities" className="block py-2 text-gray-600 hover:text-black transition-colors duration-300">SOCIAL RESPONSIBILITIES</a>
                        <a href="/why-kma" className="block py-2 text-gray-600 hover:text-black transition-colors duration-300">WHY kma</a>
                        <a href="/recent-highlights" className="block py-2 text-gray-600 hover:text-black transition-colors duration-300">RECENT HIGHLIGHTS</a>
                        <a href="/contact" className="block py-2 text-gray-600 hover:text-black transition-colors duration-300">CONTACT US</a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <main ref={heroRef} className="pt-32 bg-gradient-to-b from-gray-50 to-white font-styled">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-[90rem] mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-16"
                >
                    <h1 className="text-[6rem] font-light text-start md:text-center tracking-tight leading-none">
                        KOEL MODISH
                    </h1>
                    <h2 className="text-[5rem] font-light text-center tracking-tight leading-none mt-[-1.75rem]">
                        APPARELS
                    </h2>
                    <p className="text-center text-lg tracking-[0.2em] mt-8 font-styled">
                        WEAR THE POWER
                    </p>
                </motion.div>
            </main>

            {/* Image Gallery */}
            <section className="py-16 ">
                <div className="container mx-auto px-4 pb-20">
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
                        {images.map((src, index) => (
                            <div key={src} className="aspect-w-16 aspect-h-9 overflow-hidden shadow-md">
                                <img
                                    src={src}
                                    alt={`Gallery image ${index + 1}`}
                                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
                                />
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}

const NavItem = ({ href, label, submenuItems }) => {
    return (
        <div className="relative group">
            <a
                href={href}
                className="text-gray-600 hover:text-black transition-colors duration-300 py-2 inline-block"
            >
                {label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
            </a>
            {submenuItems && (
                <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                    {submenuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}

const MobileNavItem = ({ label, submenuItems }) => {
    const [isOpen, setIsOpen] = useState(false)

    return (
        <div>
            <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex justify-between items-center w-full text-left text-gray-600 hover:text-black transition-colors duration-300 py-2"
            >
                {label}
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && submenuItems && (
                <div className="pl-4 mt-2 space-y-2">
                    {submenuItems.map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="block text-sm text-gray-600 hover:text-black transition-colors duration-300"
                        >
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    )
}