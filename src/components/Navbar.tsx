import { useEffect, useState, useCallback } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';
export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  
  const handleScroll = useCallback(() => {
    setIsScrolled(window.scrollY > 10);
  }, []);
  
  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);
  const navLinks = [{
    name: 'Projects',
    href: '/'
  }, {
    name: 'About',
    href: '/about'
  }, {
    name: 'Contact',
    href: '/contact'
  }];
  return <nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-gray-100/60 backdrop-blur-sm border-b border-gray-200/30 shadow-[0_2px_8px_-2px_rgba(0,0,0,0.08)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 h-14 sm:h-16 flex items-center justify-between">
        <Link to="/" className="text-base sm:text-lg md:text-xl font-semibold tracking-tight text-gray-900 truncate max-w-[60%] sm:max-w-none">
          Nathan Hammerschmitt Le Gal
        </Link>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center space-x-8">
          {navLinks.map(link => <Link key={link.name} to={link.href} className={`text-sm font-medium transition-colors ${location.pathname === link.href ? 'text-gray-950 font-semibold' : 'text-gray-600 hover:text-gray-900'}`}>
              {link.name}
            </Link>)}
        </div>

        {/* Mobile Menu Button */}
        <button className="md:hidden p-2 text-gray-600" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} aria-label="Toggle menu">
          {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isMobileMenuOpen && <div className="md:hidden absolute top-16 left-0 right-0 bg-gray-100/70 backdrop-blur-sm border-b border-gray-200/30 shadow-lg px-6 py-4 flex flex-col space-y-4 animate-in slide-in-from-top-2">
          {navLinks.map(link => <Link key={link.name} to={link.href} className={`text-base font-medium py-2 ${location.pathname === link.href ? 'text-gray-950 font-semibold' : 'text-gray-600 hover:text-gray-900'}`} onClick={() => setIsMobileMenuOpen(false)}>
              {link.name}
            </Link>)}
        </div>}
    </nav>;
}