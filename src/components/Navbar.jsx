import { NavLink } from 'react-router-dom';
import pccoelogo from '../assets/PCCOE-Pune-Logo.png';

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    `px-3 py-2 rounded-md text-sm font-medium transition-all duration-300 ${isActive
      ? 'bg-primary text-white shadow-md'
      : 'text-gray-600 hover:text-primary hover:bg-secondary/50'
    }`;

  return (
    <nav className="sticky top-0 z-50 backdrop-blur-lg bg-white/80 border-b border-gray-200 shadow-sm">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center py-4">

          {/* Logo / Name Area */}
          <div className="flex items-center mb-4 md:mb-0">
            <NavLink to="/" className="flex items-center">
              <img src={pccoelogo} alt="PCCoE Logo" className="h-12 w-auto mr-3 object-contain" />
              <div>
                <h2 className="text-xl md:text-2xl font-bold text-primary tracking-wide leading-tight hover:text-primary/80 transition-colors">
                  Dr. Amruta Mahajan
                </h2>
              </div>
            </NavLink>
          </div>

          {/* Navigation Links */}
          <ul className="flex flex-wrap justify-center gap-2 md:gap-4">
            <li><NavLink to="/" className={linkClass}>Home</NavLink></li>
            <li><NavLink to="/education" className={linkClass}>Education</NavLink></li>
            <li><NavLink to="/experience" className={linkClass}>Experience</NavLink></li>
            <li><NavLink to="/teaching" className={linkClass}>Teaching Material</NavLink></li>
            <li><NavLink to="/publications" className={linkClass}>Publications</NavLink></li>
            <li><NavLink to="/contact" className={linkClass}>Contact</NavLink></li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;