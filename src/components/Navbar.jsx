import { useState } from 'react';
import { motion as Motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import portfolio from '../data/portfolio';

const links = [
  ['Capabilities', '#capabilities'],
  ['Work', '#work'],
  ['Lab', '#lab'],
  ['Principles', '#principles'],
  ['About', '#journey'],
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const closeMenu = () => setIsOpen(false);

  return (
    <Motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      aria-label="Primary navigation"
      className="fixed left-0 top-0 z-50 w-full border-b border-white/10 bg-[#030014]/85 px-4 py-4 backdrop-blur-xl"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        <a href="#home" onClick={closeMenu} className="flex items-center gap-3 font-bold text-white" aria-label="Go to homepage">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-gradient-to-br from-purple-500 to-cyan-500 text-sm">GK</span>
          <span className="hidden sm:inline">{portfolio.identity.name}</span>
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([label, href]) => (
            <a key={href} href={href} className="text-sm text-gray-400 transition-colors hover:text-white">{label}</a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a href="#contact" onClick={closeMenu} className="rounded-full border border-purple-400/30 bg-purple-400/10 px-4 py-2 text-sm font-semibold text-purple-200 transition-colors hover:bg-purple-400/20">
            Let&apos;s talk
          </a>
          <button
            type="button"
            onClick={() => setIsOpen((value) => !value)}
            aria-expanded={isOpen}
            aria-controls="mobile-navigation"
            aria-label={isOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white transition-colors hover:bg-white/10 lg:hidden"
          >
            {isOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      {isOpen ? (
        <Motion.div
          id="mobile-navigation"
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          className="mx-auto mt-4 grid max-w-7xl gap-1 border-t border-white/10 pt-3 lg:hidden"
        >
          {links.map(([label, href]) => (
            <a key={href} href={href} onClick={closeMenu} className="rounded-lg px-3 py-3 text-gray-300 transition-colors hover:bg-white/5 hover:text-white">{label}</a>
          ))}
        </Motion.div>
      ) : null}
    </Motion.nav>
  );
};

export default Navbar;
