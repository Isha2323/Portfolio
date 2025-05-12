"use client";
import { useState } from "react";
import { Menu, X } from "lucide-react";

const navItems = ["Home", "About", "Skills", "Projects", "Contact"];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-black text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center h-16">
        <div className="text-2xl font-bold">MyPortfolio</div>

        {/* Desktop Nav */}
        <ul className="hidden md:flex space-x-8">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="relative group transition duration-300"
              >
                {item}
                <span className="absolute left-0 bottom-[-2px] w-0 h-[2px] bg-white transition-all duration-300 group-hover:w-full"></span>
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Toggle */}
        <div className="md:hidden">
          <button onClick={toggleMenu} aria-label="Toggle Menu">
            {menuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col bg-black px-6 py-4 space-y-4">
          {navItems.map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={closeMenu}
                className="block text-lg"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
};

export default Navbar;
