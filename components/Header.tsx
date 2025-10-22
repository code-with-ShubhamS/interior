'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { FaFacebook, FaTwitter, FaDribbble, FaBehance, FaBars, FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <header
      className={`fixed w-full top-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-gray-900/95 backdrop-blur-sm py-2' : 'bg-transparent py-4'
      }`}
    >
      <div className="container-custom">
        <div className="hidden md:flex items-center justify-between py-2 text-xs text-white/80">
          <div className="flex items-center space-x-4">
            <a href="tel:+9530123654896" className="hover:text-primary transition-colors">
              +953 012 3654 896
            </a>
            <a href="mailto:support@interior.com" className="hover:text-primary transition-colors">
              support@interior.com
            </a>
          </div>
          <div className="flex items-center space-x-3">
            <a href="#" className="hover:text-primary transition-colors">
              <FaFacebook />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FaTwitter />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FaDribbble />
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              <FaBehance />
            </a>
          </div>
        </div>

        <div className="flex items-center justify-between border-t border-gray-700/30 pt-4">
          <Link href="/" className="text-2xl font-bold text-white">
            Interior<span className="text-primary">.</span>
          </Link>

          <nav className="hidden lg:block">
            <ul className="flex space-x-8">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-white text-sm uppercase font-medium hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <button
            className="lg:hidden text-white text-2xl"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '100%' }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 bg-gray-900 lg:hidden z-40 pt-20"
          >
            <nav className="container-custom">
              <ul className="space-y-6">
                {navLinks.map((link) => (
                  <motion.li
                    key={link.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Link
                      href={link.href}
                      className="text-white text-xl uppercase font-medium hover:text-primary transition-colors block"
                      onClick={() => setMobileMenuOpen(false)}
                    >
                      {link.label}
                    </Link>
                  </motion.li>
                ))}
              </ul>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
