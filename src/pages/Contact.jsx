import { Phone, Mail, Globe, MapPin, ExternalLink, Linkedin, ArrowRight } from 'lucide-react';

const Contact = () => {
  return (
    <section className="max-w-7xl mx-auto py-16 animate-fade-in px-4 sm:px-6">

      {/* Page Header */}
      <div className="text-center mb-20 relative">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-primary/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <h1 className="text-4xl md:text-6xl font-extrabold text-transparent bg-clip-text bg-linear-to-r from-primary via-blue-600 to-accent mb-6 tracking-tight">
          Let's Connect
        </h1>
        <div className="w-24 h-1.5 bg-linear-to-r from-primary to-accent mx-auto rounded-full shadow-[0_0_15px_rgba(59,130,246,0.5)]"></div>
        <p className="mt-8 text-gray-500 max-w-2xl mx-auto text-lg md:text-xl leading-relaxed">
          Feel free to reach out for academic inquiries, research collaborations, or student guidance.
        </p>
      </div>

      {/* Contact Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">

        {/* Email */}
        <a href="https://mail.google.com/mail/?view=cm&fs=1&to=amruta.mahajan@pccoepune.org" target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-4xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative flex flex-col items-center text-center z-10">
          <div className="absolute inset-0 bg-linear-to-b from-blue-50/50 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-16 h-16 bg-blue-100/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary transition-all duration-500 shadow-sm border border-blue-50">
            <Mail size={32} className="text-primary group-hover:text-white transition-colors duration-500" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Email Me</h3>
          <p className="text-sm font-medium text-gray-500 group-hover:text-primary transition-colors truncate w-full">amruta.mahajan<br />@pccoepune.org</p>
        </a>

        {/* Phone */}
        <div className="group bg-white p-8 rounded-4xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative flex flex-col items-center text-center z-10">
          <div className="absolute inset-0 bg-linear-to-b from-emerald-50/50 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-16 h-16 bg-emerald-100/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-emerald-500 transition-all duration-500 shadow-sm border border-emerald-50">
            <Phone size={32} className="text-emerald-600 group-hover:text-white transition-colors duration-500" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">Call Me</h3>
          <a href="tel:+918983002525" className="text-sm font-medium text-gray-500 hover:text-emerald-600 transition-colors block">
            +91 8983 00 2525
          </a>
        </div>

        {/* Website */}
        <a href="https://computer.pccoepune.com/" target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-4xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative flex flex-col items-center text-center z-10">
          <div className="absolute inset-0 bg-linear-to-b from-purple-50/50 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-16 h-16 bg-purple-100/50 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-purple-600 transition-all duration-500 shadow-sm border border-purple-50">
            <Globe size={32} className="text-purple-600 group-hover:text-white transition-colors duration-500" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">College Website</h3>
          <p className="text-sm font-medium text-gray-500 group-hover:text-purple-600 transition-colors block break-all">
            computer.pccoepune.com
          </p>
        </a>

        {/* LinkedIn */}
        <a href="https://www.linkedin.com/in/dr-amruta-mahajan-7a8400284/" target="_blank" rel="noopener noreferrer" className="group bg-white p-8 rounded-4xl shadow-lg border border-gray-100 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 overflow-hidden relative flex flex-col items-center text-center z-10">
          <div className="absolute inset-0 bg-linear-to-b from-[#0A66C2]/10 to-transparent -z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
          <div className="w-16 h-16 bg-[#0A66C2]/10 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-[#0A66C2] transition-all duration-500 shadow-sm border border-[#0A66C2]/20">
            <Linkedin size={32} className="text-[#0A66C2] group-hover:text-white transition-colors duration-500" />
          </div>
          <h3 className="text-lg font-bold text-gray-900 mb-2">LinkedIn Profile</h3>
          <p className="text-sm font-medium flex items-center gap-1 text-gray-500 group-hover:text-[#0A66C2] transition-colors">
            Connect <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform" />
          </p>
        </a>

      </div>

      {/* Map Section */}
      <div className="bg-white p-4 md:p-5 rounded-4xl shadow-xl border border-gray-100 relative group overflow-hidden max-w-5xl mx-auto mb-4">

        <div className="absolute -left-16 -bottom-16 w-64 h-64 bg-primary/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>
        <div className="absolute -right-16 -top-16 w-64 h-64 bg-accent/5 rounded-full blur-[80px] -z-10 pointer-events-none"></div>

        <div className="flex flex-col md:flex-row gap-4 md:gap-6 items-center h-full relative z-10">
          <div className="w-full md:w-5/12 shrink-0 px-2 py-4 text-center md:text-left">
            <div className="inline-flex items-center justify-center w-12 h-12 bg-red-50 text-red-500 rounded-2xl mb-4 shadow-sm border border-red-100 group-hover:scale-110 transition-transform duration-500">
              <MapPin size={24} />
            </div>
            <h3 className="text-xl font-extrabold text-gray-900 mb-2">Visit Campus</h3>
            <p className="text-sm text-gray-600 leading-relaxed font-medium">
              Pimpri Chinchwad College Of Engineering (PCCoE),<br />
              Sector - 26, Pradhikaran, Nigdi,<br />
              Pune - 411044.
            </p>
          </div>

          <div className="w-full md:w-7/12 h-64 relative rounded-3xl overflow-hidden shadow-inner border border-gray-100 bg-gray-50">
            {/* Map Loading Skeleton */}
            <div className="absolute inset-0 flex items-center justify-center z-0 text-gray-400">
              <div className="flex flex-col items-center gap-3 animate-pulse">
                <MapPin size={32} className="text-gray-300" />
                <p className="font-medium text-sm">Loading visual map...</p>
              </div>
            </div>

            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3780.273183570222!2d73.75945141525492!3d18.65082108733285!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2b9e76c8fa205%3A0x1b210131915734fd!2sPimpri%20Chinchwad%20College%20Of%20Engineering%20(PCCOE)!5e0!3m2!1sen!2sin!4v1680000000000!5m2!1sen!2sin"
              className="w-full h-full relative z-10 transition-opacity duration-700 hover:opacity-95"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="PCCOE Campus Map"
            ></iframe>
          </div>
        </div>
      </div>

    </section>
  );
};

export default Contact;