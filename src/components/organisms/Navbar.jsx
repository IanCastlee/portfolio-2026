import React, { useState, useEffect } from 'react';
import { Menu, X, FileDown, Send } from 'lucide-react';
import { NavbarBrand } from '../molecules/NavbarBrand';
import { Button } from '../atoms/Button';

export const Navbar = ({ developer }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

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
        ? 'bg-[#0b0f19]/90 backdrop-blur-md border-b border-slate-800/80 shadow-lg py-3' 
        : 'bg-[#0b0f19]/60 backdrop-blur-sm border-b border-slate-800/30 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        
        <NavbarBrand name={developer?.shortName || '[DEV.NAME]'} role="IT & MOBILE DEV" />

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-1 lg:space-x-5 text-sm font-medium text-slate-300">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="px-2.5 py-1.5 rounded-lg hover:text-cyan-400 hover:bg-slate-800/50 transition-all text-xs lg:text-sm"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Action Buttons */}
        <div className="hidden sm:flex items-center gap-3">
          <Button variant="outline" size="sm" href="#resume" icon={FileDown}>
            Resume
          </Button>
          <Button variant="primary" size="sm" href="#contact" icon={Send}>
            Let's Talk
          </Button>
        </div>

        {/* Mobile Toggle Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden p-2.5 rounded-xl bg-slate-800/80 text-slate-300 hover:text-white border border-slate-700/80 focus:outline-none"
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>

      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-[#0e1424] border-b border-slate-800 px-5 py-4 space-y-2.5 animate-fadeIn">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block px-3 py-2 text-sm text-slate-300 hover:text-cyan-400 hover:bg-slate-800/40 rounded-lg transition-colors"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-3 border-t border-slate-800 flex gap-2.5">
            <Button variant="outline" size="sm" href="#resume" className="flex-1" onClick={() => setIsOpen(false)}>
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
