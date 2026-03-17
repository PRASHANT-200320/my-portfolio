import React from "react";

const Footer = () => (
  <footer className="bg-black text-white text-center py-6">
    
    {/* Social Links */}
    <div className="flex justify-center gap-6 mb-4">
      <a
        href="https://github.com/PRASHANT-200320"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#1DB954] transition"
      >
        GitHub
      </a>

      <a
        href="https://linkedin.com/in/prashant-shringi-07b1b8323"
        target="_blank"
        rel="noopener noreferrer"
        className="hover:text-[#1DB954] transition"
      >
        LinkedIn
      </a>
    </div>

    {/* Copyright */}
    <p className="text-gray-400 text-sm">
      &copy; {new Date().getFullYear()} Prashant Shringi. All Rights Reserved.
    </p>
  </footer>
);

export default Footer;