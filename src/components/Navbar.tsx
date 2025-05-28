'use client';

import Link from 'next/link';
import { useState } from 'react';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { href: '/', label: 'Home' },
    { href: '/projects', label: 'Projects' },
    { href: '/tools', label: 'Tools' },
    { href: '/gallery', label: 'Gallery' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/dev-notes', label: 'Dev Notes' }, // Fixed duplicate href
  ];

  return (
    <nav className="w-full bg-zinc-900 text-white shadow-md">
      {/* Desktop Navigation */}
      <div className="hidden md:flex justify-center py-4 px-6 space-x-6">
        {navItems.map((item) => (
          <Link 
            key={item.href}
            href={item.href} 
            className="hover:underline whitespace-nowrap"
          >
            {item.label}
          </Link>
        ))}
      </div>

      {/* Mobile Navigation */}
      <div className="md:hidden">
        {/* Mobile Header with Hamburger */}
        <div className="flex justify-between items-center py-4 px-6">
          <Link href="/" className="font-semibold text-lg">
            Menu
          </Link>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="flex flex-col space-y-1 focus:outline-none"
            aria-label="Toggle menu"
          >
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${isMenuOpen ? 'opacity-0' : ''}`}></span>
            <span className={`block w-6 h-0.5 bg-white transition-transform ${isMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
          </button>
        </div>

        {/* Mobile Menu Items */}
        <div className={`${isMenuOpen ? 'block' : 'hidden'} border-t border-zinc-700`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 px-6 hover:bg-zinc-800 transition-colors"
              onClick={() => setIsMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;