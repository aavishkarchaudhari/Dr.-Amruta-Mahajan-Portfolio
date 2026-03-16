import { BookOpen, FileText, Calendar, Hash, Globe, ChevronRight, Award } from 'lucide-react';

const Publications = () => {
  const publicationsData = [
    {
      title: "Optimized approach for access control and privacy preserving in cloud based E-Healthcare systems",
      journal: "International Journal of Advances in Arts, Science & Engineering (ijoaase.com)",
      volume: "Volume 7, Issue 16",
      date: "November 2018",
      issn: "2320-6144",
      link: "#"
    },
    {
      title: "Survey on optimized approach for access control and privacy preserving in cloud based E-Healthcare systems",
      journal: "Journal of Advances & Scholarly Researches in Allied Education",
      volume: "Volume 16, Issue No 1",
      date: "January 2019",
      issn: "2230-7540",
      link: "#"
    }
  ];

  return (
    <section className="max-w-5xl mx-auto py-12 animate-fade-in px-4 sm:px-6">

      {/* Page Header */}
      <div className="text-center mb-16 relative">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-6 tracking-tight">
          Research & Publications
        </h1>
        <div className="w-24 h-1.5 bg-linear-to-r from-primary to-accent mx-auto rounded-full"></div>
        <p className="mt-6 text-gray-500 max-w-2xl mx-auto text-lg leading-relaxed">
          Exploring advanced concepts in cloud computing, privacy-preserving systems, and modern access control mechanisms.
        </p>
      </div>

      <div className="flex items-center mb-10 border-b border-gray-200 pb-4">
        <div className="bg-primary/10 p-3 rounded-xl mr-4">
          <BookOpen size={28} className="text-primary" />
        </div>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800 tracking-wide">Journal Publications</h2>
      </div>

      {/* Publications List */}
      <div className="flex flex-col gap-10">
        {publicationsData.map((pub, index) => (
          <div
            key={index}
            className="group relative bg-white rounded-3xl p-8 shadow-sm border border-gray-100 hover:shadow-2xl hover:-translate-y-1 transition-all duration-400 overflow-hidden flex flex-col md:flex-row gap-8"
          >
            {/* Background decorative blob */}
            <div className="absolute -right-20 -top-20 w-64 h-64 bg-accent/5 rounded-full blur-3xl group-hover:bg-accent/10 transition-colors duration-500"></div>

            {/* Left: Icon & Date Badge */}
            <div className="relative md:w-48 shrink-0 flex flex-col items-start gap-4 border-b border-gray-100 md:border-b-0 md:border-r md:pr-6 pb-6 md:pb-0">
              <div className="bg-linear-to-br from-primary/10 to-accent/10 p-5 rounded-2xl md:mx-auto">
                <FileText size={40} className="text-primary group-hover:text-accent group-hover:scale-110 transition-all duration-300" />
              </div>
              <div className="w-full flex md:flex-col items-center gap-2 mt-2 md:mt-4">
                <span className="bg-secondary/40 text-primary text-xs font-bold uppercase tracking-widest px-4 py-2 rounded-full w-full text-center">
                  {pub.date.split(' ')[1]} {/* Extracts just the year */}
                </span>
                <span className="text-gray-500 text-sm font-medium w-full text-center flex items-center justify-center gap-1.5">
                  <Calendar size={14} /> {pub.date.split(' ')[0]} {/* Month */}
                </span>
              </div>
            </div>

            {/* Right: Content */}
            <div className="flex-1 flex flex-col justify-center relative z-10">
              <h3 className="text-2xl font-bold text-gray-900 mb-4 leading-tight group-hover:text-primary transition-colors duration-300">
                {pub.title}
              </h3>

              <div className="flex items-start mb-6 bg-gray-50/50 p-4 rounded-xl border border-gray-100">
                <Award className="text-accent mr-3 mt-0.5 shrink-0" size={20} />
                <p className="text-gray-700 font-medium leading-relaxed">
                  {pub.journal}
                </p>
              </div>

              {/* Metadata Badges */}
              <div className="flex flex-wrap gap-4 mt-auto">
                <div className="flex items-center text-sm text-gray-600 font-medium bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-lg">
                  <BookOpen size={16} className="mr-2 text-primary" />
                  {pub.volume}
                </div>
                <div className="flex items-center text-sm text-gray-600 font-medium bg-white border border-gray-200 shadow-sm px-4 py-2 rounded-lg">
                  <Hash size={16} className="mr-2 text-primary" />
                  ISSN: <span className="text-gray-800 ml-1 font-semibold">{pub.issn}</span>
                </div>
              </div>

            </div>

          </div>
        ))}
      </div>

    </section>
  );
};

export default Publications;