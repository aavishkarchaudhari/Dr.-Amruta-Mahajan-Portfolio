import { BookOpen, Terminal, Blocks, FileText, Download } from 'lucide-react';

const TeachingMaterial = () => {
  const courses = [
    {
      title: "Computer Programming & Problem Solving",
      shortCode: "CPPS",
      icon: <Terminal size={32} className="text-primary group-hover:text-accent transition-colors" />,
      description: "Fundamentals of programming logic, algorithmic thinking, and effective problem-solving techniques."
    },
    {
      title: "Object Oriented Programming",
      shortCode: "OOP",
      icon: <Blocks size={32} className="text-primary group-hover:text-accent transition-colors" />,
      description: "Core concepts of OOP including inheritance, encapsulation, polymorphism, and abstraction."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto py-10 animate-fade-in">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Teaching Material</h1>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-600 max-w-2xl mx-auto text-lg">
          Course resources, syllabus outlines, and study materials for current academic sessions.
        </p>
      </div>

      <div className="flex items-center mb-8 border-b-2 border-secondary pb-4">
        <BookOpen size={28} className="mr-3 text-primary" />
        <h2 className="text-2xl font-bold text-primary">Current Courses</h2>
      </div>

      {/* Course Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {courses.map((course, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-xl transition-all duration-300 relative overflow-hidden flex flex-col h-full border-t-4 hover:border-t-accent border-t-primary"
          >
            {/* Background Decoration */}
            <div className="absolute -right-8 -top-8 bg-secondary/30 w-32 h-32 rounded-full group-hover:scale-150 transition-transform duration-500 ease-in-out -z-10"></div>
            
            {/* Icon & Badge */}
            <div className="flex justify-between items-start mb-6 z-10">
              <div className="bg-primary/5 p-4 rounded-xl border border-primary/10">
                {course.icon}
              </div>
              <span className="bg-accent/10 text-accent font-bold px-3 py-1 rounded-full text-sm tracking-wider">
                {course.shortCode}
              </span>
            </div>

            {/* Course Info */}
            <div className="flex-grow z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-3 leading-tight">
                {course.title}
              </h3>
              <p className="text-gray-600 mb-8 leading-relaxed">
                {course.description}
              </p>
            </div>

            {/* Action Buttons (Placeholders for future links) */}
            <div className="flex flex-wrap gap-3 mt-auto pt-6 border-t border-gray-100 z-10">
              <button className="flex-1 flex items-center justify-center bg-secondary/50 hover:bg-primary hover:text-white text-gray-700 font-medium px-4 py-2.5 rounded-lg transition-colors duration-200">
                <FileText size={18} className="mr-2" /> Syllabus
              </button>
              <button className="flex-1 flex items-center justify-center border border-gray-200 hover:border-accent hover:text-accent text-gray-700 font-medium px-4 py-2.5 rounded-lg transition-colors duration-200">
                <Download size={18} className="mr-2" /> Resources
              </button>
            </div>
            
          </div>
        ))}
      </div>

    </section>
  );
};

export default TeachingMaterial;