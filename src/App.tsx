import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './App.css';
import { transitionDuration } from './assets/constants';
import NavBar from './components/NavBar';
import Footer from './components/Footer';

function App() {
  const location = useLocation(); // Get current route

  return (
    <>
      <NavBar />
      <div className="min-h-screen bg-gray-100 text-gray-900">
        <div className="container mx-auto p-4">
          <AnimatePresence mode="wait">
            <motion.div
              key={location.pathname} // Ensure animation resets per page
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: transitionDuration }}
            >
              <Routes location={location} key={location.pathname}>
                <Route path="/" element={<Home />} />
                <Route path="/projects" element={<Projects />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/about" element={<About />} />
                <Route path="/contact" element={<Contact />} />
              </Routes>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default App;
