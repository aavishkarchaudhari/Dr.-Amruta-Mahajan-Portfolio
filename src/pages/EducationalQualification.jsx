import { GraduationCap, Award, Book, University, Building } from 'lucide-react';

const EducationalQualification = () => {
  const educationData = [
    {
      degree: "Doctor Of Philosophy : Computer Science & Engineering",
      university: "Kalinga University, Raipur (C.G.)",
      institute: null,
      icon: <Award className="text-white" size={26} />,
      year: "Ph.D",
      highlight: true
    },
    {
      degree: "Master of Technology : Computer Science & Engineering",
      university: "Visvesvaraya Technological University, Belgaum. Karnataka (VTU)",
      institute: "Sri Taralabalu Jagadguru Institute of Technology, Ranebennur.",
      icon: <Book className="text-primary" size={24} />,
      year: "M.Tech"
    },
    {
      degree: "Bachelor of Engineering : Information Science & Engineering",
      university: "Visvesvaraya Technological University, Belgaum. Karnataka (VTU)",
      institute: "Tontadarya College of Engineering, Gadag.",
      icon: <GraduationCap className="text-primary" size={24} />,
      year: "B.E."
    }
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 animate-fade-in px-4 sm:px-6">

      {/* Page Header */}
      <div className="text-center mb-20 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
          Educational Qualification
        </h1>
        <div className="w-24 h-1.5 bg-linear-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Academic background and foundational studies shaping my expertise in Computer Science and Engineering.
        </p>
      </div>

      {/* Timeline Layout */}
      <div className="relative border-l-[3px] border-primary/10 ml-4 md:ml-12 space-y-16">
        {educationData.map((edu, index) => (
          <div key={index} className="relative pl-10 md:pl-16 group">

            {/* Timeline Dot with Icon */}
            <div className={`absolute -left-6.75 top-4 w-12.5 h-12.5 rounded-full flex items-center justify-center shadow-lg border-[3px] border-white transition-all duration-500 z-10 
              ${edu.highlight
                ? 'bg-linear-to-br from-primary to-accent group-hover:scale-110'
                : 'bg-white bg-linear-to-br hover:from-primary/10 hover:to-accent/10 group-hover:border-primary/20 group-hover:scale-110'}`}
            >
              {edu.icon}
            </div>

            {/* Content Card */}
            <div className="relative bg-white p-8 md:p-10 rounded-3xl shadow-sm border border-gray-100 hover:shadow-2xl transition-all duration-400 group-hover:-translate-y-1 overflow-hidden">

              {/* Background geometric blur */}
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500 z-0"></div>

              <div className="relative z-10 flex flex-col md:flex-row md:items-center gap-4 mb-6">
                <div className={`inline-flex px-4 py-1.5 font-bold text-sm tracking-wider rounded-xl border
                  ${edu.highlight ? 'bg-primary border-primary text-white shadow-md' : 'bg-primary/5 text-primary border-primary/10'}`}>
                  {edu.year}
                </div>
              </div>

              <h3 className="relative z-10 text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-snug group-hover:text-primary transition-colors">
                {edu.degree}
              </h3>

              <div className="relative z-10 flex flex-col gap-4">
                <div className="flex items-start bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                  <University size={20} className="text-secondary mt-0.5 mr-3 shrink-0 group-hover:text-accent transition-colors" />
                  <div>
                    <span className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">University</span>
                    <span className="text-gray-800 font-medium leading-relaxed">{edu.university}</span>
                  </div>
                </div>

                {edu.institute && (
                  <div className="flex items-start bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                    <Building size={20} className="text-secondary mt-0.5 mr-3 shrink-0 group-hover:text-accent transition-colors" />
                    <div>
                      <span className="block text-xs uppercase tracking-widest text-gray-400 font-bold mb-1">Institute</span>
                      <span className="text-gray-700 leading-relaxed">{edu.institute}</span>
                    </div>
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