import React, { useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import ResearchPublications from './pages/ResearchPublications';
import ResearchGuidance from './pages/ResearchGuidance';
import Seminars from './pages/Seminars';
import Courses from './pages/Courses';
import Awards from './pages/Awards';
import Recognitions from './pages/Recognitions';
import Patents from './pages/Patents';
import InvitedTalks from './pages/InvitedTalks';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

// Scroll to top helper on route change
function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen bg-slate-50">
        <Header />
        
        {/* Main Content Area */}
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/research-publications" element={<ResearchPublications />} />
            <Route path="/research-guidance" element={<ResearchGuidance />} />
            <Route path="/seminars-workshops" element={<Seminars />} />
            <Route path="/courses" element={<Courses />} />
            <Route path="/awards" element={<Awards />} />
            <Route path="/recognitions" element={<Recognitions />} />
            <Route path="/patents" element={<Patents />} />
            <Route path="/invited-talks" element={<InvitedTalks />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </main>

        <Footer />
      </div>
    </Router>
  );
}

export default App;
