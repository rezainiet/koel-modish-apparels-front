// src/components/Navbar.js

import React, { useState } from "react";
import { Plus, ChevronDown, Menu, X } from "lucide-react";
import logo from "./../../assets/logo/koel_modish_apparels_logo.png";

export const Navbar = ({ isScrolled, isMobileMenuOpen, toggleMobileMenu }) => {
    return (
        <header
            className={`fixed top-0 left-0 right-0 z-50 bg-white transition-all duration-300 border-b-2 ${isScrolled ? "shadow-md" : ""
                }`}
        >
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
                        <a
                            href="/contact"
                            className="hidden lg:flex items-center text-gray-600 hover:text-black transition-colors duration-300"
                        >
                            <Plus className="h-4 w-4 mr-1" />
                            CONTACT US
                        </a>
                        <button
                            className="lg:hidden flex flex-col items-center justify-center w-6 h-6"
                            onClick={toggleMobileMenu}
                        >
                            {isMobileMenuOpen ? <X /> : <Menu />}
                        </button>
                    </div>
                </div>
            </nav>
            {/* Mobile Menu */}
            <div className={`lg:hidden bg-white transition-all duration-300 overflow-hidden ${isMobileMenuOpen ? 'max-h-screen' : 'max-h-0'}`}>
                {/* Mobile navigation items */}
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
