import { Mail, MapPin, Building2, ChevronRight, Download } from 'lucide-react';
import { Link } from 'react-router-dom';
import profilePhoto from '../assets/DrAmrutaMahajan.webp';

const Home = () => {
  return (
    <section className="min-h-[80vh] flex flex-col animate-fade-in py-6 px-4 sm:px-8 md:px-16">

      {/* Top Section: Photo (left) + Details (right) */}
      <div className="flex flex-col md:flex-row gap-10 items-center mb-12">

        {/* Left: Profile Photo */}
        <div className="md:w-1/3 w-full flex-shrink-0">
          <div className="relative rounded-3xl overflow-hidden shadow-2xl" style={{ height: '400px' }}>
            <img
              src={profilePhoto}
              alt="Dr. Amruta Mahajan"
              className="w-full h-full object-cover object-top"
            />
            {/* Subtle gradient overlay at bottom */}
            <div className="absolute bottom-0 left-0 right-0 h-20 bg-gradient-to-t from-black/30 to-transparent" />
          </div>
        </div>

        {/* Right: Name, Title, Bio, Button */}
        <div className="pl-4 md:w-2/3 w-full flex flex-col justify-center">
          {/* Badge */}
          <span className="inline-block self-start bg-accent/10 text-accent text-xs font-semibold px-3 py-1 rounded-full mb-4 uppercase tracking-widest">
            Faculty — Computer Engineering
          </span>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-2 text-primary leading-tight">
            Dr. Amruta Mahajan
          </h1>

          {/* Decorative divider */}
          <div className="flex items-center gap-3 mb-5">
            <div className="h-1 w-12 bg-accent rounded-full" />
            <h2 className="text-lg text-accent font-semibold uppercase tracking-widest">
              Assistant Professor
            </h2>
          </div>

          <p className="text-gray-500 mb-8 leading-relaxed text-base max-w-xl border-l-4 border-accent/30 pl-4 italic">
            "Dedicated to advancing computer engineering education and fostering innovation through practical learning and research."
          </p>

          <div className="flex flex-wrap gap-3">
            <Link to="/education" className="flex items-center bg-primary text-white px-5 py-2.5 rounded-xl hover:bg-primary/90 transition-all duration-200 shadow-md hover:shadow-lg hover:-translate-y-0.5 text-sm sm:text-base">
              View Credentials <ChevronRight size={18} className="ml-2" />
            </Link>
            <Link to="/publications" className="flex items-center border-2 border-primary text-primary px-5 py-2.5 rounded-xl hover:bg-primary hover:text-white transition-all duration-200 text-sm sm:text-base">
              Publications <ChevronRight size={18} className="ml-2" />
            </Link>
          </div>
        </div>
      </div>

      {/* Bottom Section: Contact Info Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
        <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-accent/40 hover:-translate-y-1">
          <div className="flex items-start">
            <div className="bg-accent/10 p-3 rounded-xl mr-4 group-hover:bg-accent/20 transition-colors">
              <Building2 className="text-accent" size={22} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Department</h3>
              <p className="text-gray-800 font-medium">Computer Engineering</p>
            </div>
          </div>
        </div>

        <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-accent/40 hover:-translate-y-1">
          <div className="flex items-start">
            <div className="bg-accent/10 p-3 rounded-xl mr-4 group-hover:bg-accent/20 transition-colors">
              <MapPin className="text-accent" size={22} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Institution</h3>
              <p className="text-gray-800 font-medium leading-relaxed">
                PCCoE, Sector-26, Pradhikaran,<br />Nigdi, Pune 411044.
              </p>
            </div>
          </div>
        </div>

        <div className="group bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 hover:border-accent/40 hover:-translate-y-1">
          <div className="flex items-start">
            <div className="bg-accent/10 p-3 rounded-xl mr-4 group-hover:bg-accent/20 transition-colors">
              <Mail className="text-accent" size={22} />
            </div>
            <div>
              <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-1">Email</h3>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amruta.mahajan@pccoepune.org" target="_blank" rel="noopener noreferrer" className="text-gray-800 font-medium hover:text-accent transition-colors text-sm whitespace-nowrap">
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