import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import Home from './pages/Home';
import EducationalQualification from './pages/EducationalQualification';
import Experience from './pages/Experience';
import Publications from './pages/Publications';
import TeachingMaterial from './pages/TeachingMaterial';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <div className="min-h-screen flex flex-col font-sans text-gray-800 bg-gradient-to-br from-background to-secondary/30">
        <Navbar />

        <main className="grow w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/education" element={<EducationalQualification />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/publications" element={<Publications />} />
            <Route path="/teaching" element={<TeachingMaterial />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;