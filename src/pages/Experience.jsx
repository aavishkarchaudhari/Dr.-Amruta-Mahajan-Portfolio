import { Cloud, CheckCircle, Terminal, BookOpen, Briefcase } from 'lucide-react';
import pccoelogo from '../assets/PCCOE-Pune-Logo.png';

const Experience = () => {
  // We map the subjects to icons to make the UI pop
  const interests = [
    {
      name: "Cloud Computing",
      icon: <Cloud size={36} className="text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
    },
    {
      name: "Software Testing",
      icon: <CheckCircle size={36} className="text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
    },
    {
      name: "Computer Programming & Problem Solving",
      icon: <Terminal size={36} className="text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
    }
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 animate-fade-in px-4 sm:px-6">

      {/* Page Header */}
      <div className="text-center mb-16 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
          Experience & Expertise
        </h1>
        <div className="w-24 h-1.5 bg-linear-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Professional timeline, core teaching competencies, and specialized areas of interest in computer engineering.
        </p>
      </div>

      {/* Experience Highlight Card */}
      <div className="group relative bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col md:flex-row items-center gap-10 mb-20 z-0">
        {/* Background Decorative Blob */}
        <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500 z-0"></div>

        {/* PCCoE Logo */}
        <div className="relative z-10 bg-white p-5 rounded-3xl shrink-0 border border-gray-100 shadow-md flex items-center justify-center w-36 h-36 mx-auto md:mx-0 group-hover:border-accent/30 transition-all duration-300">
          <img
            src={pccoelogo}
            alt="PCCoE Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-center md:text-left z-10 flex-1">
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <div className="bg-primary/10 p-2 rounded-lg">
              <Briefcase size={20} className="text-primary" />
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 tracking-wide group-hover:text-primary transition-colors">
              Teaching Experience
            </h2>
          </div>

          <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-4">
            <span className="inline-block bg-accent/10 text-accent font-black text-2xl px-3 py-1 rounded-lg mr-3">4+ Years</span>
            of teaching experience in an engineering institute as an
            <br className="hidden md:block" />
            <span className="font-bold text-gray-900 ml-1">Assistant Professor</span>.
          </p>
          <div className="flex items-center justify-center md:justify-start">
            <p className="inline-block mt-2 text-sm font-bold text-primary bg-primary/5 border border-primary/10 px-4 py-2 rounded-xl uppercase tracking-wider">
              Pimpri Chinchwad College of Engineering (PCCoE), Pune
            </p>
          </div>
        </div>
      </div>

      {/* Area of Interest Subjects Grid */}
      <div className="mt-16">
        <div className="flex items-center mb-10 border-b border-gray-200 pb-4">
          <div className="bg-primary/10 p-3 rounded-xl mr-4">
            <BookOpen size={28} className="text-primary" />
          </div>
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">Areas of Interest</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {interests.map((subject, index) => (
            <div
              key={index}
              className="group relative bg-white p-10 rounded-3xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 hover:shadow-2xl hover:border-accent/30 transition-all duration-400 flex flex-col items-center justify-center min-h-60 overflow-hidden"
            >
              {/* Card background blob */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent to-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-400 z-0" />

              <div className="relative z-10 bg-linear-to-br from-primary/10 to-accent/10 w-24 h-24 rounded-2xl flex items-center justify-center mb-8 rotate-3 group-hover:rotate-0 transition-all duration-400 shadow-sm border border-white">
                {subject.icon}
              </div>
              <h3 className="relative z-10 text-xl font-bold text-gray-800 leading-snug group-hover:text-primary transition-colors">
                {subject.name}
              </h3>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Experience;