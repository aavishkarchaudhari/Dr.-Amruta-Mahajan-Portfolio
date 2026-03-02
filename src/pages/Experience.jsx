import { Cloud, CheckCircle, Terminal, BookOpen } from 'lucide-react';
import pccoelogo from '../assets/PCCOE-Pune-Logo.png';

const Experience = () => {
  // We map the subjects to icons to make the UI pop
  const interests = [
    {
      name: "Cloud Computing",
      icon: <Cloud size={32} className="text-primary" />
    },
    {
      name: "Software Testing",
      icon: <CheckCircle size={32} className="text-primary" />
    },
    {
      name: "Computer Programming & Problem Solving",
      icon: <Terminal size={32} className="text-primary" />
    }
  ];

  return (
    <section className="max-w-4xl mx-auto py-10 animate-fade-in">

      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Experience & Expertise</h1>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
      </div>

      {/* Experience Highlight Card */}
      <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-8 md:p-10 mb-16 flex flex-col md:flex-row items-center gap-8 hover:shadow-md transition-shadow duration-300 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 w-32 h-32 bg-accent/5 rounded-bl-full -z-10"></div>

        {/* PCCoE Logo */}
        <div className="bg-white p-4 rounded-2xl flex-shrink-0 border border-gray-200 shadow-sm flex items-center justify-center w-28 h-28">
          <img
            src={pccoelogo}
            alt="PCCoE Logo"
            className="w-full h-full object-contain"
          />
        </div>

        <div className="text-center md:text-left z-10">
          <h2 className="text-2xl md:text-3xl font-bold text-primary mb-3">Teaching Experience</h2>
          <p className="text-lg text-gray-600 leading-relaxed">
            <span className="font-bold text-accent text-2xl mr-2">2+ Years</span>
            of teaching experience in an engineering institute as an
            <span className="font-semibold text-gray-900 ml-1">Assistant Professor</span>.
          </p>
          <p className="mt-3 text-sm font-semibold text-primary/70 uppercase tracking-wider">
            Pimpri Chinchwad College of Engineering (PCCoE), Pune
          </p>
        </div>
      </div>

      {/* Area of Interest Subjects Grid */}
      <div className="mt-12">
        <div className="flex items-center mb-8 border-b-2 border-secondary pb-4">
          <BookOpen size={28} className="mr-3 text-primary" />
          <h2 className="text-2xl font-bold text-primary">Area of Interest Subjects</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {interests.map((subject, index) => (
            <div
              key={index}
              className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 text-center hover:-translate-y-2 hover:shadow-xl transition-all duration-300 group flex flex-col items-center justify-center min-h-[200px]"
            >
              <div className="bg-secondary/30 w-20 h-20 rounded-full flex items-center justify-center mb-6 group-hover:scale-110 group-hover:bg-primary/5 transition-all duration-300">
                {subject.icon}
              </div>
              <h3 className="text-lg font-semibold text-gray-800 leading-snug">
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