import React, { useState } from "react";
import { Plus, ChevronDown, Menu, X } from "lucide-react";
import logo from "./../../assets/logo/koel_modish_apparels_logo.png";

const ContactSheet = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleSheet = () => setIsOpen(!isOpen);

    return (
        <>
            <button
                onClick={toggleSheet}
                className="hidden lg:flex items-center text-gray-600 hover:text-black transition-colors duration-300"
            >
                <Plus className="h-4 w-4 mr-1" />
                CONTACT US
            </button>
            <div
                className={`fixed inset-y-0 right-0 w-full sm:max-w-[540px] bg-white shadow-lg transform transition-transform duration-300 ease-in-out z-50 ${isOpen ? 'translate-x-0' : 'translate-x-full'
                    }`}
            >
                <div className="h-full overflow-y-auto p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-2xl font-bold">Contact Us</h2>
                        <button
                            onClick={toggleSheet}
                            className="text-gray-500 hover:text-black"
                        >
                            <X className="h-6 w-6" />
                        </button>
                    </div>
                    <form onSubmit={(e) => e.preventDefault()} className="space-y-6">
                        <div>
                            <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">
                                Full Name
                            </label>
                            <input
                                type="text"
                                id="fullName"
                                name="fullName"
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                                placeholder="Full Name"
                            />
                        </div>
                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                                Phone Number
                            </label>
                            <div className="flex">
                                {/* <select
                                    className="w-24 px-3 py-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-1 focus:ring-black"
                                >
                                    <option value="BD">BD +880</option>
                                    <option value="UK">UK +44</option>
                                    <option value="HK">HK +852</option>
                                </select> */}
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                                    placeholder="+880 17555-55555"
                                />
                            </div>
                        </div>
                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                                Reason to Connect
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows={4}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-black"
                                placeholder="Leave us a message..."
                            ></textarea>
                        </div>
                        <button
                            type="submit"
                            className="w-full bg-black text-white py-2 px-4 rounded-md hover:bg-gray-800 transition-colors duration-300"
                        >
                            Get Started
                        </button>
                    </form>
                    <div className="mt-8 space-y-6">
                        <p className="text-gray-600">Physical Address</p>
                        <div>
                            <h3 className="font-semibold text-lg mb-2">UTTARA, DHAKA</h3>
                            <p className="text-sm text-gray-600">
                                House #31, Road #17, Sector #13, Dhaka-1230, Bangladesh
                            </p>
                        </div>
                        {/* <div>
                            <h3 className="font-semibold text-lg mb-2">HONGKONG</h3>
                            <p className="text-sm text-gray-600">
                                Unit 1607-8, 16/F Citicorp Centre, 18 Whitfield Road, Causeway Bay, Hongkong
                            </p>
                        </div> */}
                    </div>
                </div>
            </div>
            {isOpen && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 z-40"
                    onClick={toggleSheet}
                ></div>
            )}
        </>
    );
};

export const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeSubmenu, setActiveSubmenu] = useState(null);

    const toggleSubmenu = (submenu) => {
        setActiveSubmenu(activeSubmenu === submenu ? null : submenu);
    };

    return (
        <header className="fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b-2">
            <nav className="container mx-auto px-4 py-4">
                <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-8">
                        <a href="/" className="flex items-center">
                            <img
                                src={logo}
                                alt="Logo of Koel Modish Apparels"
                                className="h-10 w-24"
                            />
                        </a>
                        <div className="hidden lg:flex items-center space-x-8">
                            <NavItem href="#" label="ABOUT" submenuItems={[
                                { href: "/our-strength", label: "Our Strength" },
                                { href: "/process", label: "Process" },
                                // { href: "/leadership", label: "Leadership" },
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
                        <ContactSheet />
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
            {/* Mobile Menu */}
            <div className={`lg:hidden bg-white transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                <div className="px-4 py-2 space-y-2">
                    <MobileNavItem label="ABOUT" submenuItems={[
                        { href: "/history", label: "History" },
                        { href: "/process", label: "Process" },
                        // { href: "/leadership", label: "Leadership" },
                        { href: "/about", label: "Why KMA" },
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
                    <a href="/why-kma" className="block py-2 text-gray-600 hover:text-black transition-colors duration-300">WHY KMA</a>
                    <a href="/recent-highlights" className="block py-2 text-gray-600 hover:text-black transition-colors duration-300">RECENT HIGHLIGHTS</a>
                    <ContactSheet />
                </div>
            </div>
        </header>
    );
};

const NavItem = ({ href, label, submenuItems }) => (
    <div className="relative group">
        <a href={href} className="text-gray-600 hover:text-black transition-colors duration-300 py-2 inline-block">
            {label}
            <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-black transition-all duration-300 group-hover:w-full"></span>
        </a>
        {submenuItems && (
            <div className="absolute left-0 mt-2 w-48 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300">
                {submenuItems.map((item) => (
                    <a key={item.href} href={item.href} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-300">
                        {item.label}
                    </a>
                ))}
            </div>
        )}
    </div>
);

const MobileNavItem = ({ label, submenuItems }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div>
            <button onClick={() => setIsOpen(!isOpen)} className="flex justify-between items-center w-full text-left text-gray-600 hover:text-black transition-colors duration-300 py-2">
                {label}
                <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? 'rotate-180' : ''}`} />
            </button>
            {isOpen && submenuItems && (
                <div className="pl-4 mt-2 space-y-2">
                    {submenuItems.map((item) => (
                        <a key={item.href} href={item.href} className="block text-sm text-gray-600 hover:text-black transition-colors duration-300">
                            {item.label}
                        </a>
                    ))}
                </div>
            )}
        </div>
    );
};