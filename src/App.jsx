import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import EducationalQualification from './pages/EducationalQualification';
import Experience from './pages/Experience';
import Publications from './pages/Publications';
import TeachingMaterial from './pages/TeachingMaterial';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col bg-gradient-to-br from-[#FAFAFA] to-[#E2E8F0]/30 font-sans text-gray-800">
        <Navbar />
        
        <main className="flex-grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<EducationalQualification />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/publications" element={<Publications />} /> 
            <Route path="/teaching" element={<TeachingMaterial />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>
        
        <footer className="bg-primary text-white/70 py-6 text-center text-sm">
          <p>© {new Date().getFullYear()} Dr. Amruta Mahajan. All Rights Reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;