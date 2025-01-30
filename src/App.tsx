import { Routes, Route, useLocation, Link } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import './App.css';
import { transitionDuration } from './assets/constants';

function App() {
  const location = useLocation(); // Get current route

  return (
    <div className="min-h-screen bg-gray-100 text-gray-900">
      <nav className="p-4 bg-white shadow-md">
        <div className="container mx-auto flex justify-between">
          <Link to="/" className="text-xl font-bold">
            My Portfolio
          </Link>
          <div className="space-x-4">
            <Link to="/" className="hover:text-blue-500">
              Home
            </Link>
            <Link to="/projects" className="hover:text-blue-500">
              Projects
            </Link>
            <Link to="/skills" className="hover:text-blue-500">
              Skills
            </Link>
            <Link to="/about" className="hover:text-blue-500">
              About
            </Link>
            <Link to="/contact" className="hover:text-blue-500">
              Contact
            </Link>
          </div>
        </div>
      </nav>

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
  );
}

export default App;
