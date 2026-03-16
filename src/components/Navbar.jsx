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

  // Close menu and scroll to top on route change
  useEffect(() => {
    setMenuOpen(false);
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
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
    `px-4 py-2 rounded-full text-sm font-bold transition-all duration-300 flex items-center ${isActive
      ? 'bg-linear-to-r from-primary to-accent text-white shadow-md shadow-primary/20 scale-105'
      : 'text-gray-600 hover:text-primary hover:bg-primary/5 hover:scale-105'
    }`;

  const mobileLinkClass = ({ isActive }) =>
    `block w-full px-5 py-3.5 rounded-2xl text-base font-bold transition-all duration-300 ${isActive
      ? 'bg-linear-to-r from-primary to-accent text-white shadow-md shadow-primary/20 translate-x-1'
      : 'text-gray-600 hover:bg-primary/5 hover:text-primary hover:translate-x-1'
    }`;

  return (
    <div className="sticky top-0 z-50 pt-2 sm:pt-4 px-4 sm:px-6 w-full flex justify-center pointer-events-none">
      <nav
        ref={menuRef}
        className="pointer-events-auto w-full max-w-6xl backdrop-blur-2xl bg-white/70 shadow-lg shadow-gray-200/50 border border-white/50 rounded-3xl md:rounded-full transition-all duration-300"
      >
        <div className="px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 md:h-auto md:py-3 cursor-pointer">

            {/* Logo / Name */}
            <NavLink to="/" className="flex items-center gap-3 min-w-0 md:mr-8 group">
              <div className="min-w-0">
                <h2 className="text-xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent tracking-wide leading-tight group-hover:opacity-80 transition-opacity truncate pb-1">
                  Dr. Amruta Mahajan
                </h2>
              </div>
            </NavLink>

            {/* Desktop Nav Links */}
            <ul className="hidden xl:flex flex-wrap justify-end gap-1 md:gap-2 flex-1">
              {NAV_LINKS.map((link) => (
                <li key={link.to}>
                  <NavLink to={link.to} className={linkClass} end={link.to === '/'}>
                    {link.label}
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Mobile / Tablet Hamburger Button */}
            <button
              onClick={(e) => {
                e.preventDefault();
                setMenuOpen((prev) => !prev);
              }}
              className="xl:hidden flex items-center justify-center w-10 h-10 rounded-2xl bg-white shadow-sm border border-gray-100 text-primary hover:bg-primary/5 transition-all duration-200 shrink-0"
              aria-label={menuOpen ? 'Close menu' : 'Open menu'}
              aria-expanded={menuOpen}
            >
              {menuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>

          </div>
        </div>

        {/* Mobile / Tablet Dropdown Menu */}
        <div
          className={`xl:hidden overflow-hidden transition-all duration-300 ease-in-out ${menuOpen ? 'max-h-125 opacity-100' : 'max-h-0 opacity-0'
            }`}
        >
          <div className="px-4 pb-5 pt-2 mx-2 mb-2 bg-white/80 backdrop-blur-xl rounded-b-3xl border-t border-gray-100/50">
            <ul className="flex flex-col gap-2">
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
          className="fixed inset-0 top-0 -z-10 bg-black/5 backdrop-blur-xs xl:hidden pointer-events-auto"
          onClick={() => setMenuOpen(false)}
          aria-hidden="true"
        />
      )}
    </div>
  );
};

export default Navbar;