import { Link } from 'react-router-dom';
import { Mail, Linkedin, MapPin, ArrowRight, GraduationCap, Github } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-white border-t border-gray-100 mt-auto w-full overflow-hidden">
      {/* Decorative Top Gradient Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-linear-to-r from-primary via-blue-500 to-accent opacity-80" />

      {/* Background Decorative Blurs */}
      <div className="absolute -left-32 top-0 w-64 h-64 bg-primary/5 rounded-full blur-[100px] -z-10 pointer-events-none" />
      <div className="absolute right-0 bottom-0 w-96 h-96 bg-accent/5 rounded-full blur-[120px] -z-10 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-10 pb-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8 lg:gap-6 mb-8">

          {/* Brand & About */}
          <div className="col-span-1 md:col-span-2 lg:col-span-2 xl:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-2xl bg-linear-to-br from-primary to-accent flex items-center justify-center shadow-lg shadow-primary/20 shrink-0">
                <GraduationCap className="text-white w-6 h-6" />
              </div>
              <h2 className="text-xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary to-accent tracking-wide">
                Dr. Amruta Mahajan
              </h2>
            </div>
            <p className="text-gray-500 font-medium leading-relaxed text-sm lg:pr-4">
              Assistant Professor at Pimpri Chinchwad College of Engineering. Dedicated to advancing computer engineering education and fostering innovation through practical learning.
            </p>
          </div>

          {/* Quick Links */}
          <div className="col-span-1 xl:ml-auto mt-4 xl:mt-0">
            <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-widest mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2.5 group text-sm font-medium w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary transition-colors"></span>
                  Home
                </Link>
              </li>
              <li>
                <Link to="/education" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2.5 group text-sm font-medium w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary transition-colors"></span>
                  Education
                </Link>
              </li>
              <li>
                <Link to="/experience" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2.5 group text-sm font-medium w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary transition-colors"></span>
                  Experience
                </Link>
              </li>
              <li>
                <Link to="/publications" className="text-gray-500 hover:text-primary transition-colors flex items-center gap-2.5 group text-sm font-medium w-fit">
                  <span className="w-1.5 h-1.5 rounded-full bg-gray-300 group-hover:bg-primary transition-colors"></span>
                  Publications
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Details */}
          <div className="col-span-1 lg:pl-4 mt-4 xl:mt-0">
            <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-widest mb-4">Contact Us</h3>
            <ul className="space-y-3">
              <li>
                <a href="mailto:amruta.mahajan@pccoepune.org" className="group flex items-start gap-4 text-gray-500 hover:text-primary transition-colors">
                  <div className="w-8 h-8 rounded-xl bg-primary/5 flex items-center justify-center shrink-0 group-hover:bg-primary/10 transition-colors">
                    <Mail size={16} className="text-primary" />
                  </div>
                  <span className="text-sm font-medium pt-1.5 break-all">amruta.mahajan@pccoepune.org</span>
                </a>
              </li>
              <li>
                <div className="group flex items-start gap-4 text-gray-500">
                  <div className="w-8 h-8 rounded-xl bg-accent/5 flex items-center justify-center shrink-0">
                    <MapPin size={16} className="text-accent" />
                  </div>
                  <span className="text-sm font-medium pt-1">PCCoE, Sector - 26, Pradhikaran, Nigdi, Pune 411044</span>
                </div>
              </li>
            </ul>
          </div>

          {/* Social / Extra Links */}
          <div className="col-span-1 lg:justify-self-end mt-4 xl:mt-0">
            <h3 className="text-xs font-extrabold text-gray-900 uppercase tracking-widest mb-4">Connect</h3>
            <div className="flex gap-4">
              <a
                href="https://www.linkedin.com/in/dr-amruta-mahajan-7a8400284/"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-[#0A66C2]/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Linkedin size={18} className="text-gray-400 group-hover:text-[#0A66C2] relative z-10 transition-colors" />
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=amruta.mahajan@pccoepune.org"
                target="_blank"
                rel="noopener noreferrer"
                className="group w-10 h-10 rounded-xl bg-white border border-gray-100 flex items-center justify-center shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 relative overflow-hidden"
              >
                <div className="absolute inset-0 bg-primary/10 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                <Mail size={18} className="text-gray-400 group-hover:text-primary relative z-10 transition-colors" />
              </a>
            </div>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-6 border-t border-gray-100 flex flex-col md:flex-row justify-center items-center gap-6">
          <div className="flex items-center gap-2 text-gray-400 text-sm font-medium">
            <span>© {new Date().getFullYear()}</span>
            <span className="w-1 h-1 rounded-full bg-gray-300"></span>
            <span>Dr. Amruta Mahajan</span>
            <span className="hidden sm:inline w-1 h-1 rounded-full bg-gray-300"></span>
            <span className="hidden sm:inline">All Rights Reserved</span>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;