import { useState, useEffect, useRef } from 'react';
import { NavLink, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

const NAV_LINKS = [
  { to: '/', label: 'Home' },
  { to: '/education', label: 'Education' },
  { to: '/experience', label: 'Experience' },
  { to: '/teaching', label: 'Teaching Material' },
  { to: '/publications', label: 'Publications' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const menuRef = useRef(null);

  // Close menu on route change
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  // Close menu on outside click
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    if (menuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [menuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive
      ? 'bg-primary text-white shadow-md'
      : 'text-gray-600 hover:text-primary hover:bg-secondary/50'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block w-full px-5 py-3.5 rounded-xl text-base font-medium transition-all duration-200 ${isActive
      ? 'bg-primary text-white shadow-md'
      : 'text-gray-700 hover:bg-secondary/60 hover:text-primary'
    }`;

  return (
    <>
      <nav
        ref={menuRef}
        className="sticky top-0 z-50 backdrop-blur-lg bg-white/90 border-b border-gray-200 shadow-sm"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-auto md:py-4">

            {/* Logo / Name */}
            <NavLink to="/" className="flex items-center gap-2 min-w-0">
              <div className="min-w-0">
                <h2 className="text-lg md:text-2xl font-bold text-primary tracking-wide leading-tight hover:text-primary/80 transition-colors truncate">
                  Dr. Amruta Mahajan
                </h2>
              </div>
            </NavLink>

            {/* Desktop Nav Links */}
            <ul className="hidden md:flex flex-wrap justify-center gap-2 md:gap-4">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="md:hidden flex items-center justify-center w-10 h-10 rounded-xl text-primary hover:bg-secondary/50 transition-colors duration-200 flex-shrink-0"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-[500px] opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-4 pb-5 pt-2 bg-white/95 backdrop-blur-md border-t border-gray-100">
            <ul className="flex flex-col gap-1.5">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className={mobileLinkClass}
                    end={link.to === '/'}
                    onClick={() => setMenuOpen(false)}
                  >
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </nav>

      {/* Backdrop overlay for mobile */}
      {menuOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm md:hidden"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default Navbar;