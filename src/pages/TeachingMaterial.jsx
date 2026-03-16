import { BookOpen, Terminal, Blocks, FileText, Download } from 'lucide-react';

const TeachingMaterial = () => {
  const courses = [
    {
      title: "Computer Programming & Problem Solving",
      shortCode: "CPPS",
      icon: <Terminal size={40} className="text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300" />,
      description: "Fundamentals of programming logic, algorithmic thinking, and effective problem-solving techniques."
    },
    {
      title: "Object Oriented Programming",
      shortCode: "OOP",
      icon: <Blocks size={40} className="text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300" />,
      description: "Core concepts of OOP including inheritance, encapsulation, polymorphism, and abstraction."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 animate-fade-in px-4 sm:px-6">

      {/* Page Header */}
      <div className="text-center mb-16 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
          Teaching Material
        </h1>
        <div className="w-24 h-1.5 bg-linear-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Course resources, syllabus outlines, and study materials for current academic sessions.
        </p>
      </div>

      <div className="flex items-center mb-10 border-b border-gray-200 pb-4">
        <div className="bg-primary/10 p-3 rounded-xl mr-4">
          <BookOpen size={28} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">Current Courses</h2>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {courses.map((course, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col h-full"
          >
            {/* Background decorative blob */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500 z-0"></div>

            {/* Icon & Badge */}
            <div className="flex justify-between items-start mb-8 relative z-10">
              <div className="bg-linear-to-br from-primary/10 to-accent/10 p-5 rounded-2xl">
                {course.icon}
              </div>
              <span className="bg-secondary/40 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full">
                {course.shortCode}
              </span>
            </div>

            {/* Course Info */}
            <div className="grow relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed font-medium">
                {course.description}
              </p>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap gap-4 mt-auto pt-6 border-t border-gray-100 relative z-10 w-full">
              <button className="flex-1 flex items-center justify-center bg-gray-50/50 hover:bg-primary hover:text-white border border-gray-100 text-gray-700 font-semibold px-4 py-3 rounded-xl transition-all duration-300 hover:shadow-md">
                <FileText size={18} className="mr-2.5" /> Syllabus
              </button>
              <button className="flex-1 flex items-center justify-center bg-white hover:border-accent hover:text-accent border border-gray-200 text-gray-700 font-semibold px-4 py-3 rounded-xl transition-all duration-300 hover:shadow-sm">
                <Download size={18} className="mr-2.5" /> Resources
              </button>
            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default TeachingMaterial;