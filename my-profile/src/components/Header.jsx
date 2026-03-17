import React from 'react';

const Header = () => (
    <header className="sticky top-0 w-full bg-[#191414]/90 backdrop-blur-sm z-50 shadow-lg shadow-black/20">
        <nav className="container mx-auto px-4 h-20 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-white">
               My-Portfolio
            </a>
            <ul className="hidden md:flex space-x-8">
                <li><a href="#home" className="font-medium text-gray-300 hover:text-[#1DB954] transition-colors">Home</a></li>
                <li><a href="#about" className="font-medium text-gray-300 hover:text-[#1DB954] transition-colors">About</a></li>
                <li><a href="#skills" className="font-medium text-gray-300 hover:text-[#1DB954] transition-colors">Skills</a></li>
                <li><a href="#projects" className="font-medium text-gray-300 hover:text-[#1DB954] transition-colors">Projects</a></li>
                <li ><a href='#education' className="font-medium text-gray-300 hover:text-[#1DB954] transition-colors">Education</a></li>
                <li><a href="#contact" className="font-medium text-gray-300 hover:text-[#1DB954] transition-colors">Contact</a></li>
            </ul>
        </nav>
    </header>
);

export default Header;