import { GraduationCap, Award, Book } from 'lucide-react';

const EducationalQualification = () => {
  const educationData = [
    {
      degree: "Doctor Of Philosophy : Computer Science & Engineering",
      university: "Kalinga University, Raipur (C.G.)",
      institute: null,
      icon: <Award className="text-accent" size={24} />,
      year: "Ph.D"
    },
    {
      degree: "Master of Technology : Computer Science & Engineering",
      university: "Visvesvaraya Technological University, Belgaum. Karnataka (VTU)",
      institute: "Sri Taralabalu Jagadguru Institute of Technology, Ranebennur.",
      icon: <Book className="text-accent" size={24} />,
      year: "M.Tech"
    },
    {
      degree: "Bachelor of Engineering : Information Science & Engineering",
      university: "Visvesvaraya Technological University, Belgaum. Karnataka (VTU)",
      institute: "Tontadarya College of Engineering, Gadag.",
      icon: <GraduationCap className="text-accent" size={24} />,
      year: "B.E."
    }
  ];

  return (
    <section className="max-w-4xl mx-auto py-10 animate-fade-in">
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Educational Qualification</h1>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l-2 border-secondary ml-4 md:ml-8 space-y-12">
        {educationData.map((edu, index) => (
          <div key={index} className="relative pl-8 md:pl-12 group">
            
            {/* Timeline Dot with Icon */}
            <div className="absolute -left-[25px] top-0 bg-white border-4 border-secondary group-hover:border-accent transition-colors duration-300 w-12 h-12 rounded-full flex items-center justify-center shadow-sm">
              {edu.icon}
            </div>

            {/* Content Card */}
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-lg transition-all duration-300 group-hover:-translate-y-1">
              <div className="inline-block px-3 py-1 bg-primary/10 text-primary font-semibold text-sm rounded-full mb-4">
                {edu.year}
              </div>
              <h3 className="text-xl md:text-2xl font-bold text-primary mb-4 leading-snug">
                {edu.degree}
              </h3>
              
              <div className="space-y-3">
                <div className="flex flex-col">
                  <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">University</span>
                  <span className="text-gray-800 font-medium">{edu.university}</span>
                </div>
                
                {edu.institute && (
                  <div className="flex flex-col pt-3 border-t border-gray-100">
                    <span className="text-xs uppercase tracking-wider text-gray-400 font-semibold">Institute</span>
                    <span className="text-gray-800">{edu.institute}</span>
                  </div>
                )}
              </div>
            </div>
            
          </div>
        ))}
      </div>
    </section>
  );
};

export default EducationalQualification;