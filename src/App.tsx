import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useCallback } from 'react';
import Home from './pages/Home';
import Projects from './pages/Projects';
import About from './pages/About';
import Skills from './pages/Skills';
import Contact from './pages/Contact';
import NotFound from './pages/NotFound';
import './App.css';
import { transitionDuration, REACT_QUERY_STALE_TIME } from './assets/constants';
import NavBar from './components/NavBar';
import Footer from './components/Footer';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { EagerLoadProjectData } from './components/EagerLoadProjectData';
import { useTheme } from './theme/ThemeContext';

const queryClient = new QueryClient({
  defaultOptions: {
    queries: { staleTime: REACT_QUERY_STALE_TIME },
  },
});

function App() {
  const location = useLocation(); // Get current route
  const [isNavBarFixed, setIsNavBarFixed] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const { theme } = useTheme();

  const mainBackgroundClasses =
    theme === 'dark'
      ? 'text-gray-100 bg-gradient-to-r from-gray-800 via-gray-700 to-gray-800'
      : 'text-gray-900 bg-gradient-to-r from-gray-200 via-gray-100 to-gray-200';

  const handleScroll = useCallback(() => {
    if (
      (isNavBarFixed && window.scrollY < lastScrollY + 2) ||
      (!isNavBarFixed && window.scrollY < lastScrollY - 6)
    ) {
      setIsNavBarFixed(true);
    } else {
      setIsNavBarFixed(false);
    }
    setLastScrollY(window.scrollY);
  }, [lastScrollY, isNavBarFixed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  return (
    <QueryClientProvider client={queryClient}>
      <EagerLoadProjectData />
      <div className="flex flex-col min-h-screen">
        <div className={`${isNavBarFixed ? 'fixed' : 'relative'} top-0 left-0 right-0 z-50`}>
          <NavBar />
          {isNavBarFixed && (
            // Thin grey line to separate navbar from content, only visible when the navbar is fixed
            <div className={`h-2 ${mainBackgroundClasses}`}></div>
          )}
        </div>
        <div className={`flex-grow min-h min-w-screen ${mainBackgroundClasses} pt-16`}>
          <div className="container mx-auto p-8 pb-4">
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
                  <Route path="/projects/:projectId" element={<Projects />} />
                  <Route path="/skills" element={<Skills />} />
                  <Route path="/about" element={<About />} />
                  <Route path="/contact" element={<Contact />} />
                  <Route path="*" element={<NotFound />} />
                </Routes>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
