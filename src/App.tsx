import { Routes, Route, useLocation } from 'react-router-dom';
import { AnimatePresence, motion } from 'framer-motion';
import { useState, useEffect, useCallback, lazy, Suspense } from 'react';
import Home from './pages/Home';
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

const Projects = lazy(() => import('./pages/Projects'));

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
    const currentY = window.scrollY;

    // Always show navbar when very close to the top
    if (currentY <= 20) {
      setIsNavBarFixed(true);
      setLastScrollY(currentY);
      return;
    }

    if (
      (isNavBarFixed && currentY < lastScrollY + 2) ||
      (!isNavBarFixed && currentY < lastScrollY - 6)
    ) {
      setIsNavBarFixed(true);
    } else {
      setIsNavBarFixed(false);
    }
    setLastScrollY(currentY);
  }, [lastScrollY, isNavBarFixed]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [handleScroll]);

  // Prefetch the Projects page code in the background so navigation to
  // projects is faster but without affecting the initial JS bundle size
  useEffect(() => {
    const timer = window.setTimeout(() => {
      import('./pages/Projects');
    }, 2000);

    return () => window.clearTimeout(timer);
  }, []);

  return (
    <QueryClientProvider client={queryClient}>
      <EagerLoadProjectData />
      <div className="flex flex-col min-h-screen">
        <div
          className={`fixed top-0 left-0 right-0 z-50 transform transition-transform duration-200 ${
            isNavBarFixed ? 'translate-y-0' : '-translate-y-full'
          }`}
        >
          <NavBar />
          {isNavBarFixed && (
            // Thin grey line to separate navbar from content, only visible when the navbar is fixed
            <div className={`h-2 ${mainBackgroundClasses}`}></div>
          )}
        </div>
        <main className={`flex-grow min-h min-w-screen ${mainBackgroundClasses} pt-16`}>
          <div className="container mx-auto p-8 pb-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={location.pathname} // Ensure animation resets per page
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: transitionDuration }}
              >
                <Suspense fallback={<div>Loading projects…</div>}>
                  <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/projects/:projectId" element={<Projects />} />
                    <Route path="/skills" element={<Skills />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<NotFound />} />
                  </Routes>
                </Suspense>
              </motion.div>
            </AnimatePresence>
          </div>
        </main>
        <Footer />
      </div>
    </QueryClientProvider>
  );
}

export default App;
