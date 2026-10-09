import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Send, Sun, Moon } from 'lucide-react';
import { NavbarBrand } from '../molecules/NavbarBrand';
import { Button } from '../atoms/Button';
import { useTheme } from '../../context/ThemeContext';

export const Navbar = ({ developer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme, isDark } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about' },
    { label: 'Tech Stack', href: '#tech-stack' },
    { label: 'Projects', href: '#projects' },
    { label: 'Case Studies', href: '#case-studies' },
    { label: 'Experience', href: '#experience' },
    { label: 'Services', href: '#services' },
    { label: 'Contact', href: '#contact' },
  ];

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
      scrolled 
        ? 'bg-white/95 dark:bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800/80 shadow-md dark:shadow-lg py-2.5 sm:py-3' 
        : 'bg-white/80 dark:bg-[#0b0f19]/60 backdrop-blur-sm border-b border-slate-200/80 dark:border-slate-800/30 py-3.5 sm:py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-3 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <NavbarBrand name={developer?.shortName || '[DEV.NAME]'} role="IT & MOBILE DEV" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-5 text-sm font-medium text-slate-600 dark:text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-1.5 rounded-lg hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/50 transition-all text-xs lg:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons & Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2 sm:p-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 dark:bg-slate-800/80 dark:hover:bg-slate-700/80 border border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 transition-all flex items-center justify-center cursor-pointer shadow-sm"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400 animate-in spin-in-180 duration-300" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-600 animate-in spin-in-180 duration-300" />
            )}
          </button>

          <Button variant="outline" size="sm" href="/Ian_Castillo_CV.pdf" target="_blank" rel="noopener noreferrer" icon={FileDown} className="border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white">
            Resume
          </Button>
          <Button variant="primary" size="sm" href="#contact" icon={Send}>
            Let's Talk
          </Button>
        </div>

        {/* Mobile Actions (Theme Toggle + Hamburger Menu) */}
        <div className="flex sm:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            type="button"
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-amber-500 dark:hover:text-amber-400 border border-slate-300 dark:border-slate-700/80 focus:outline-none cursor-pointer"
            title={isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            aria-label="Toggle theme mode"
          >
            {isDark ? (
              <Sun className="w-4 h-4 text-amber-400" />
            ) : (
              <Moon className="w-4 h-4 text-cyan-600" />
            )}
          </button>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2.5 rounded-xl bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 hover:text-slate-900 dark:hover:text-white border border-slate-300 dark:border-slate-700/80 focus:outline-none cursor-pointer"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-[#0e1424] border-b border-slate-200 dark:border-slate-800 px-5 py-4 space-y-2.5 shadow-xl animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm text-slate-700 dark:text-slate-300 hover:text-cyan-600 dark:hover:text-cyan-400 hover:bg-slate-100 dark:hover:bg-slate-800/40 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-200 dark:border-slate-800 flex gap-2.5">
            <Button variant="outline" size="sm" href="#resume" className="flex-1 border-slate-300 dark:border-slate-700 text-slate-700 dark:text-slate-300" onClick={() => setIsOpen(false)}>
              CV
            </Button>
            <Button variant="primary" size="sm" href="#contact" className="flex-1" onClick={() => setIsOpen(false)}>
              Contact
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};
