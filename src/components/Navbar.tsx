import React, { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  const navLinks = [{
    name: 'About',
    href: '/about'
  }, {
    name: 'Contact',
    href: '/contact'
  }];
  return <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled || isMobileMenuOpen ? 'bg-white/80 backdrop-blur-md border-b border-gray-200/50' : 'bg-transparent'}`}>
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        <Link to="/" className="text-xl font-semibold tracking-tight text-gray-900">
          Portfolio
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <Link key={link.name} to={link.href} className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`}>
              {link.name}
            </Link>)}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-white border-b border-gray-200 shadow-lg px-6 py-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
          {navLinks.map(link => <Link key={link.name} to={link.href} className={`text-base font-medium py-2 ${location.pathname === link.href ? 'text-gray-900' : 'text-gray-600 hover:text-gray-900'}`} onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>)}
        </div>}
    </nav>;
}