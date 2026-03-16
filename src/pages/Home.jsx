import { Mail, MapPin, Building2, ChevronRight, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/DrAmrutaMahajan.webp';

const Home = () => {
  return (
    <section className="min-h-[80vh] flex flex-col animate-fade-in py-10 px-4 sm:px-8 md:px-16 max-w-7xl mx-auto">

      {/* Top Section: Photo (left) + Details (right) */}
      <div className="flex flex-col md:flex-row gap-12 lg:gap-16 items-center mb-16">

        {/* Left: Profile Photo */}
        <div className="md:w-5/12 lg:w-4/12 w-full shrink-0 relative group">
          {/* Decorative background blob */}
          <div className="absolute -inset-4 bg-linear-to-br from-primary/20 to-accent/20 rounded-[2.5rem] blur-2xl group-hover:blur-3xl transition-all duration-500 opacity-70"></div>

          <div className="relative rounded-4xl overflow-hidden shadow-2xl border-4 border-white z-10 group-hover:-translate-y-2 transition-transform duration-500" style={{ height: '465px' }}>
            <img
              src={profilePhoto}
              alt="Dr. Amruta Mahajan"
              className="w-full h-full object-cover object-top filter contrast-[0.95] group-hover:scale-105 transition-transform duration-700 ease-out"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute inset-x-0 bottom-0 h-1/3 bg-linear-to-t from-black/60 via-black/20 to-transparent" />
          </div>
        </div>

        {/* Right: Name, Title, Bio, Button */}
        <div className="md:w-7/12 lg:w-8/12 w-full flex flex-col justify-center">
          {/* Badge */}
          <span className="inline-flex items-center gap-1.5 self-start bg-primary/5 text-primary text-xs font-bold px-4 py-1.5 rounded-full mb-5 uppercase tracking-widest border border-primary/10 shadow-sm">
            <Building2 size={14} /> Faculty • Computer Engineering
          </span>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold mb-4 text-gray-900 leading-tight tracking-tight">
            Dr. Amruta <span className="text-transparent bg-clip-text bg-linear-to-r from-primary to-accent">Mahajan</span>
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center gap-4 mb-6">
            <div className="h-1.5 w-16 bg-linear-to-r from-primary to-accent rounded-full shadow-sm" />
            <h2 className="text-xl md:text-2xl text-gray-700 font-bold tracking-wide">
              Assistant Professor
            </h2>
          </div>

          <div className="mb-8">
            <div className="flex items-center gap-2 mb-3">
              <GraduationCap size={18} className="text-gray-400" />
              <p className="text-xs sm:text-sm font-bold uppercase tracking-widest text-gray-400">
                Qualifications
              </p>
            </div>
            <div className="flex flex-wrap gap-3">
              <span className="px-4 py-2 rounded-xl bg-white text-gray-800 text-sm font-semibold border border-gray-100 shadow-sm hover:border-primary/30 transition-colors">
                Ph.D. (Computer Science &amp; Engineering)
              </span>
              <span className="px-4 py-2 rounded-xl bg-white text-gray-800 text-sm font-semibold border border-gray-100 shadow-sm hover:border-primary/30 transition-colors">
                M.Tech (Computer Science &amp; Engineering)
              </span>
              <span className="px-4 py-2 rounded-xl bg-white text-gray-800 text-sm font-semibold border border-gray-100 shadow-sm hover:border-primary/30 transition-colors">
                B.E. (Information Science &amp; Engineering)
              </span>
            </div>
          </div>

          <p className="text-gray-600 mb-10 leading-relaxed text-lg max-w-2xl border-l-4 border-accent/40 pl-5 italic font-medium bg-linear-to-r from-gray-50 to-transparent py-2 rounded-r-xl">
            "Dedicated to advancing computer engineering education and fostering innovation through practical learning and research."
          </p>

          <div className="flex flex-wrap gap-4">
            <Link to="/education" className="group flex items-center bg-linear-to-r from-primary to-primary/90 text-white px-6 py-3.5 rounded-xl hover:shadow-lg hover:-translate-y-1 transition-all duration-300 font-semibold text-sm sm:text-base">
              View Credentials <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform" />
            </Link>
            <Link to="/publications" className="group flex items-center bg-white border-2 border-gray-200 text-gray-700 px-6 py-3.5 rounded-xl hover:border-primary hover:text-primary hover:shadow-md hover:-translate-y-1 transition-all duration-300 font-semibold text-sm sm:text-base">
              Publications <ChevronRight size={20} className="ml-2 group-hover:translate-x-1 transition-transform opacity-50 group-hover:opacity-100" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 mt-auto">
        <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="bg-linear-to-br from-primary/10 to-accent/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-white">
              <Building2 className="text-primary" size={26} />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Department</h3>
              <p className="text-gray-900 font-bold text-lg leading-tight">Computer Engineering</p>
            </div>
          </div>
        </div>

        <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="bg-linear-to-br from-primary/10 to-accent/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-white">
              <MapPin className="text-primary" size={26} />
            </div>
            <div>
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Institution</h3>
              <p className="text-gray-900 font-bold leading-snug">
                PCCoE, Sector-26, Pradhikaran,<br className="hidden lg:block" /> Nigdi, Pune 411044.
              </p>
            </div>
          </div>
        </div>

        <div className="group relative bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-400 overflow-hidden">
          <div className="absolute -right-10 -top-10 w-32 h-32 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500"></div>
          <div className="relative flex flex-col md:flex-row items-start md:items-center gap-5">
            <div className="bg-linear-to-br from-primary/10 to-accent/10 p-4 rounded-2xl group-hover:scale-110 transition-transform duration-300 shadow-sm border border-white">
              <Mail className="text-primary" size={26} />
            </div>
            <div className="min-w-0 flex-1 w-full">
              <h3 className="text-xs font-bold text-gray-400 uppercase tracking-widest mb-1.5">Email</h3>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amruta.mahajan@pccoepune.org" target="_blank" rel="noopener noreferrer" className="text-gray-900 font-bold hover:text-primary transition-colors block break-all text-sm xl:text-base" title="amruta.mahajan@pccoepune.org">
                amruta.mahajan@pccoepune.org
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;