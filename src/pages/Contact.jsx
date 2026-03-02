import { Phone, Mail, Globe, MapPin, GraduationCap, ExternalLink, BookOpen, Linkedin, Library } from 'lucide-react';

const Contact = () => {
  return (
    <section className="max-w-6xl mx-auto py-10 animate-fade-in">

      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Get In Touch</h1>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Feel free to reach out for academic inquiries, research collaborations, or student guidance.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-12">

        {/* Left Column: Contact Details */}
        <div className="lg:w-5/12 space-y-6">

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group flex items-center">
            <div className="bg-secondary/40 p-4 rounded-xl mr-5 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
              <Phone size={28} className="text-primary group-hover:text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Phone</p>
              <a href="tel:+918983002525" className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors">
                +91 8983 00 2525
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group flex items-center">
            <div className="bg-secondary/40 p-4 rounded-xl mr-5 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
              <Mail size={28} className="text-primary group-hover:text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Email</p>
              <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amruta.mahajan@pccoepune.org" target="_blank" rel="noopener noreferrer" className="text-base sm:text-lg font-semibold text-gray-800 hover:text-primary transition-colors break-all">
                amruta.mahajan@pccoepune.org
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group flex items-center">
            <div className="bg-secondary/40 p-4 rounded-xl mr-5 group-hover:bg-accent/10 group-hover:text-accent transition-colors">
              <Globe size={28} className="text-primary group-hover:text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Website</p>
              <a href="http://www.pccoepune.com/" target="_blank" rel="noopener noreferrer" className="text-lg font-semibold text-gray-800 hover:text-primary transition-colors">
                www.pccoepune.com
              </a>
            </div>
          </div>

          <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300 group flex items-start">
            <div className="bg-secondary/40 p-4 rounded-xl mr-5 group-hover:bg-accent/10 group-hover:text-accent transition-colors mt-1">
              <MapPin size={28} className="text-primary group-hover:text-accent" />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-400 uppercase tracking-wider mb-1">Location</p>
              <p className="text-gray-800 font-medium leading-relaxed">
                Pimpri Chinchwad College Of Engineering (PCCoE),<br />
                Sector - 26, Pradhikaran, Nigdi,<br />
                Pune 411044.
              </p>
            </div>
          </div>

        </div>

        {/* Right Column: Expanded Academic Profiles */}
        <div className="lg:w-7/12 flex flex-col">
          <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg border-t-4 border-primary flex-grow relative overflow-hidden">
            {/* Decorative background element */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-accent/5 rounded-bl-full -z-10"></div>

            <div className="flex items-center mb-8 border-b border-gray-100 pb-4">
              <GraduationCap size={28} className="text-primary mr-3" />
              <h2 className="text-2xl font-bold text-gray-900">Academic & Professional Profiles</h2>
            </div>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Connect with Dr. Mahajan across various academic and professional networks to stay updated on her latest research, publications, and endeavors.
            </p>

            <div className="flex flex-col gap-4">
              <a href="#" className="flex items-center p-5 rounded-xl border border-gray-200 hover:border-accent hover:shadow-md transition-all group bg-white">
                <div className="bg-primary/5 p-3 rounded-lg mr-4 group-hover:bg-accent/10 transition-colors">
                  <BookOpen size={24} className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <span className="block font-bold text-gray-800 group-hover:text-accent transition-colors text-lg mb-1">Google Scholar</span>
                  <span className="text-sm text-gray-500">View citations and research articles</span>
                </div>
                <ExternalLink size={20} className="ml-auto text-gray-400 group-hover:text-accent transition-colors" />
              </a>

              <a href="#" className="flex items-center p-5 rounded-xl border border-gray-200 hover:border-accent hover:shadow-md transition-all group bg-white">
                <div className="bg-primary/5 p-3 rounded-lg mr-4 group-hover:bg-accent/10 transition-colors">
                  <Linkedin size={24} className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <span className="block font-bold text-gray-800 group-hover:text-accent transition-colors text-lg mb-1">LinkedIn</span>
                  <span className="text-sm text-gray-500">Connect for professional updates</span>
                </div>
                <ExternalLink size={20} className="ml-auto text-gray-400 group-hover:text-accent transition-colors" />
              </a>

              <a href="#" className="flex items-center p-5 rounded-xl border border-gray-200 hover:border-accent hover:shadow-md transition-all group bg-white">
                <div className="bg-primary/5 p-3 rounded-lg mr-4 group-hover:bg-accent/10 transition-colors">
                  <Library size={24} className="text-primary group-hover:text-accent transition-colors" />
                </div>
                <div>
                  <span className="block font-bold text-gray-800 group-hover:text-accent transition-colors text-lg mb-1">ResearchGate</span>
                  <span className="text-sm text-gray-500">Explore ongoing research projects</span>
                </div>
                <ExternalLink size={20} className="ml-auto text-gray-400 group-hover:text-accent transition-colors" />
              </a>
            </div>
          </div>
        </div>

      </div>

      {/* Campus Map Section */}
      <div className="mt-16 bg-white p-4 rounded-2xl shadow-sm border border-gray-100 h-[280px] sm:h-[350px] md:h-[400px] w-full overflow-hidden">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273183570222!2d73.75945141525492!3d18.65082108733285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPimpri%20Chinchwad%20College%20Of%20Engineering%20(PCCOE)!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
          width="100%"
          height="100%"
          style={{ border: 0, borderRadius: '0.75rem' }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="PCCOE Campus Map"
        ></iframe>
      </div>

    </section>
  );
};

export default Contact;