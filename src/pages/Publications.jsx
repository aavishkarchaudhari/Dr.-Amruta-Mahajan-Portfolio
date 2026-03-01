import { BookOpen, FileText, Calendar, Hash, Globe } from 'lucide-react';

const Publications = () => {
  const publicationsData = [
    {
      title: "Optimized approach for access control and privacy preserving in cloud based E-Healthcare systems",
      journal: "International Journal of Advances in Arts, Science & Engineering (ijoaase.com)",
      volume: "Volume 7, Issue 16",
      date: "November 2018",
      issn: "2320-6144"
    },
    {
      title: "Survey on optimized approach for access control and privacy preserving in cloud based E-Healthcare systems",
      journal: "Journal of Advances & Scholarly Researches in Allied Education",
      volume: "Volume 16, Issue No 1",
      date: "January 2019",
      issn: "2230-7540"
    }
  ];

  return (
    <section className="max-w-5xl mx-auto py-10 animate-fade-in">
      
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-3xl md:text-4xl font-bold text-primary mb-4">Research & Publications</h1>
        <div className="w-24 h-1 bg-accent mx-auto rounded-full"></div>
      </div>

      <div className="flex items-center mb-8 border-b-2 border-secondary pb-4">
        <BookOpen size={28} className="mr-3 text-primary" />
        <h2 className="text-2xl font-bold text-primary">Journal Publications</h2>
      </div>

      {/* Publications List */}
      <div className="flex flex-col gap-8">
        {publicationsData.map((pub, index) => (
          <div 
            key={index} 
            className="group bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 hover:shadow-lg hover:border-accent/40 transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row gap-6"
          >
            {/* Left Accent Strip */}
            <div className="absolute left-0 top-0 bottom-0 w-2 bg-secondary group-hover:bg-accent transition-colors duration-300"></div>
            
            {/* Document Icon */}
            <div className="hidden md:flex bg-primary/5 p-4 rounded-full h-fit border border-primary/10 text-primary group-hover:scale-110 transition-transform duration-300">
              <FileText size={32} />
            </div>

            {/* Publication Details */}
            <div className="flex-1">
              <h3 className="text-xl md:text-2xl font-bold text-gray-900 mb-3 leading-tight group-hover:text-primary transition-colors">
                "{pub.title}"
              </h3>
              
              <div className="flex items-start mb-4">
                <Globe className="text-accent mr-2 mt-1 flex-shrink-0" size={18} />
                <p className="text-gray-700 italic font-serif leading-relaxed">
                  {pub.journal}
                </p>
              </div>

              {/* Metadata Badges */}
              <div className="flex flex-wrap gap-3 mt-5 pt-5 border-t border-gray-100">
                <div className="flex items-center bg-secondary/40 px-3 py-1.5 rounded-md text-sm text-gray-700 font-medium">
                  <Calendar size={16} className="mr-2 text-primary" />
                  {pub.date}
                </div>
                <div className="flex items-center bg-secondary/40 px-3 py-1.5 rounded-md text-sm text-gray-700 font-medium">
                  <BookOpen size={16} className="mr-2 text-primary" />
                  {pub.volume}
                </div>
                <div className="flex items-center bg-secondary/40 px-3 py-1.5 rounded-md text-sm text-gray-700 font-medium">
                  <Hash size={16} className="mr-2 text-primary" />
                  ISSN: {pub.issn}
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