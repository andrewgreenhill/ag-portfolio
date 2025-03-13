import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../assets/utils';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
      setIsMenuOpen(false);
    }
  };

  const handleKeyDown = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setIsMenuOpen(false);
    }
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleKeyDown);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [isMenuOpen]);

  const linkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'text-green-600 font-bold underline' : 'hover:text-green-500';

  const hamburgerLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive ? 'block text-green-600 font-bold underline' : 'block hover:text-green-500';

  return (
    <nav className="bg-white text-black p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className="text-green-600 text-xl font-bold"
          style={{ fontSize: '1.4rem' }}
          onClick={scrollToTop}
          // style={{ fontFamily: 'Kantumruy Pro, sans-serif' }}
        >
          Andrew Greenhill
        </NavLink>
        <div className="hidden md:flex space-x-4 ml-auto">
          <NavLink to="/" className={linkClasses} onClick={scrollToTop}>
            Home
          </NavLink>
          <NavLink to="/projects" className={linkClasses} onClick={scrollToTop}>
            Projects
          </NavLink>
          <NavLink to="/skills" className={linkClasses} onClick={scrollToTop}>
            Skills
          </NavLink>
          <NavLink to="/about" className={linkClasses} onClick={scrollToTop}>
            About
          </NavLink>
          <NavLink to="/contact" className={linkClasses} onClick={scrollToTop}>
            Contact
          </NavLink>
        </div>
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="focus:outline-none bg-white dark:bg-white border border-gray-300"
            style={{ borderWidth: '1px' }}
          >
            {/* Hamburger icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
                className="text-black dark:text-black"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className="dropdown-menu md:hidden bg-white text-black p-2 absolute right-0 mt-2 w-35 border border-gray-300"
        >
          <NavLink
            to="/"
            className={hamburgerLinkClasses}
            onClick={() => {
              toggleMenu();
              scrollToTop();
            }}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={hamburgerLinkClasses}
            onClick={() => {
              toggleMenu();
              scrollToTop();
            }}
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={hamburgerLinkClasses}
            onClick={() => {
              toggleMenu();
              scrollToTop();
            }}
          >
            Skills
          </NavLink>
          <NavLink
            to="/about"
            className={hamburgerLinkClasses}
            onClick={() => {
              toggleMenu();
              scrollToTop();
            }}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={hamburgerLinkClasses}
            onClick={() => {
              toggleMenu();
              scrollToTop();
            }}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
