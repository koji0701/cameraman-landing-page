"use client"

import React from 'react'
import { Button } from "@/components/ui/button"
import { Menu, X, Github, Download } from "lucide-react"
import { cn } from "@/lib/utils"
import Logo from "./Logo"

const menuItems = [
  { name: "Features", href: "#features" },
  { name: "Demo", href: "#demo" },
  { name: "How It Works", href: "#how-it-works" },
]

const Navigation = () => {
    const [menuState, setMenuState] = React.useState(false);
    const [isScrolled, setIsScrolled] = React.useState(false);

    React.useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 50);
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Effect for smooth scrolling on initial load if URL has a hash
    React.useEffect(() => {
        if (typeof window !== 'undefined' && window.location.hash) {
            const targetId = window.location.hash.substring(1); // Remove #
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                // Using a timeout to ensure the element is fully rendered and positioned
                setTimeout(() => {
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start', // Aligns the top of the target element to the top of the visible area
                    });
                }, 100); // A small delay can help ensure accurate scrolling
            }
        }
    }, []); // Empty dependency array means this runs once on mount

    const handleSmoothScrollLinkClick = (
        event: React.MouseEvent<HTMLAnchorElement>,
        href: string
    ) => {
        event.preventDefault();
        const targetId = href.substring(1); // Remove #
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
        // Close mobile menu if open
        if (menuState) {
            setMenuState(false);
        }
    };
    
    const handleMobileMenuToggle = () => {
        setMenuState(!menuState);
    };

    const handleLogoClick = (e: React.MouseEvent<HTMLAnchorElement>) => {
        e.preventDefault();
        window.scrollTo({ top: 0, behavior: 'smooth' });
        if (menuState) setMenuState(false);
    };

    return (
        <header
            className={cn(
                "sticky top-0 z-50 w-full transition-all duration-300",
                isScrolled ? "glassmorphism shadow-lg" : "bg-transparent",
            )}
        >
            {/* Navigation container */}
            <nav className="relative mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4">
                {/* Logo */}
                <a
                    href="/"
                    className="hover-lift cursor-pointer"
                    onClick={handleLogoClick}
                >
                    <div className="flex items-center gap-3">
                        <Logo className="h-8 w-8" />
                        <div className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                            AI Cameraman
                        </div>
                    </div>
                </a>

                {/* Desktop links - centered */}
                <div className="hidden md:flex items-center gap-8 absolute left-1/2 -translate-x-1/2">
                    {menuItems.map((item) => (
                        <a
                            key={item.name}
                            href={item.href}
                            className="text-sm font-medium transition-colors hover:text-blue-400 text-gray-300"
                            onClick={(e) => handleSmoothScrollLinkClick(e, item.href)}
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* Right side buttons */}
                <div className="flex items-center space-x-4">
                    {/* GitHub Button */}
                    <Button 
                        variant="outline" 
                        className="hidden md:inline-flex border-white/20 bg-white/5 hover:bg-white/10 text-white backdrop-blur-sm transition-all duration-300"
                        asChild
                    >
                        <a href="https://github.com/koji0701/cameraman-ai-agent/tree/dev" target="_blank" rel="noopener noreferrer">
                            <Github className="w-4 h-4 mr-2" />
                            Project GitHub
                        </a>
                    </Button>

                    {/* Coming Soon Button */}
                    <Button 
                        className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white border-0 shadow-lg shadow-blue-500/25 transition-all duration-300 hover:shadow-blue-500/40"
                        disabled
                    >
                        <Download className="w-4 h-4 mr-2" />
                        <span className="hidden sm:inline">Coming Soon</span>
                        <span className="sm:hidden">Soon</span>
                    </Button>

                    {/* Mobile menu button */}
                    <button
                        type="button"
                        className="md:hidden text-white"
                        onClick={handleMobileMenuToggle}
                        aria-label={menuState ? "Close menu" : "Open menu"}
                        aria-expanded={menuState}
                        aria-controls="mobile-menu"
                    >
                        {menuState ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>
            </nav>

            {/* Mobile Navigation */}
            {menuState && (
                <div id="mobile-menu" className="glassmorphism md:hidden">
                    <div className="space-y-1 px-2 pb-3 pt-2">
                        {menuItems.map((item) => (
                            <a
                                key={item.name}
                                href={item.href}
                                className="block rounded-md px-3 py-2 text-base font-medium hover:bg-white/10 text-gray-300"
                                onClick={(e) => handleSmoothScrollLinkClick(e, item.href)}
                            >
                                {item.name}
                            </a>
                        ))}
                        <hr className="border-white/20 my-2" />
                        {/* Mobile GitHub link */}
                        <a
                            href="https://github.com/koji0701/cameraman-ai-agent/tree/dev"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center rounded-md px-3 py-2 text-base font-medium hover:bg-white/10 text-gray-300"
                            onClick={() => setMenuState(false)}
                        >
                            <Github className="w-4 h-4 mr-2" />
                            GitHub
                        </a>
                    </div>
                </div>
            )}
        </header>
    );
};

export default Navigation; 