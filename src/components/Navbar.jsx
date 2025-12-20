import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaTwitter } from 'react-icons/fa';

const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 w-full z-50 px-6 py-4 backdrop-blur-md bg-[#0300145e] border-b border-[#ffffff1a]"
    >
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Gopi Krishna Gajam
        </a>

        <div className="hidden md:flex items-center gap-8">
          <a href="#education" className="text-gray-300 hover:text-white transition-colors">Education</a>
          <a href="#experience" className="text-gray-300 hover:text-white transition-colors">Experience</a>
          <a href="#skills" className="text-gray-300 hover:text-white transition-colors">Skills</a>
          <a href="#projects" className="text-gray-300 hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="text-gray-300 hover:text-white transition-colors">Contact</a>
        </div>

        <div className="flex items-center gap-4">
          <a href="https://github.com/gopikrishnagajam" target="_blank" rel="noopener noreferrer" className="text-white hover:text-purple-500 transition-colors text-xl">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/gopikrishnagajam" target="_blank" rel="noopener noreferrer" className="text-white hover:text-cyan-500 transition-colors text-xl">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
