import { useState, useEffect, useRef, useId } from 'react';
import { NavLink } from 'react-router-dom';
import { scrollToTop } from '../assets/utils';
import { useTheme } from '../theme/ThemeContext';
import {
  navBarColourClasses,
  linkActiveColourClasses,
  linkHoverColourClasses,
  brandColourClasses,
  dropdownColourClasses,
  hamburgerButtonColourClasses,
  iconColourClasses,
} from '../assets/constants';

type ThemeToggleButtonProps = {
  onClick: () => void;
  className?: string;
  id?: string;
};

function ThemeToggleButton({ onClick, className = '', id }: ThemeToggleButtonProps) {
  const { theme } = useTheme();
  const maskId = useId();

  return (
    <button
      type="button"
      onClick={onClick}
      className={`${className} theme-toggle`}
      aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'}
      aria-live="polite"
      title="Toggles light & dark"
      id={id}
    >
      <svg className="sun-and-moon" aria-hidden="true" width="24" height="24" viewBox="0 0 24 24">
        <mask id={maskId} className="moon" maskUnits="userSpaceOnUse" maskType="luminance">
          <rect x="0" y="0" width="100%" height="100%" fill="white" />
          <circle cx="24" cy="10" r="6" fill="black" />
        </mask>
        <circle
          className="sun"
          cx="12"
          cy="12"
          r="6"
          mask={`url(#${maskId})`}
          fill="currentColor"
        />
        <g className="sun-beams" stroke="currentColor">
          <line x1="12" y1="1" x2="12" y2="3" />
          <line x1="12" y1="21" x2="12" y2="23" />
          <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
          <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
          <line x1="1" y1="12" x2="3" y2="12" />
          <line x1="21" y1="12" x2="23" y2="12" />
          <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
          <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
        </g>
      </svg>
    </button>
  );
}

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);
  const { toggleTheme } = useTheme();

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
    isActive ? `${linkActiveColourClasses} font-bold underline` : linkHoverColourClasses;

  const hamburgerLinkClasses = ({ isActive }: { isActive: boolean }) =>
    isActive
      ? `block ${linkActiveColourClasses} font-bold underline`
      : `block ${linkHoverColourClasses}`;

  return (
    <nav className={`${navBarColourClasses} p-4 w-full`}>
      <div className="container mx-auto flex justify-between items-center">
        <NavLink
          to="/"
          className={`${brandColourClasses} text-xl font-bold`}
          style={{ fontSize: '1.4rem' }}
          onClick={scrollToTop}
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
          <ThemeToggleButton
            onClick={toggleTheme}
            className="ml-4 h-6 flex items-center"
            id="theme-toggle"
          />
        </div>
        <div className="md:hidden ml-auto flex items-center space-x-2">
          <button
            onClick={toggleMenu}
            className={`hamburger-button ${hamburgerButtonColourClasses}`}
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
                className={iconColourClasses}
              ></path>
            </svg>
          </button>
          <ThemeToggleButton onClick={toggleTheme} className="h-6 flex items-center" />
        </div>
      </div>
      {isMenuOpen && (
        <div
          ref={menuRef}
          className={`dropdown-menu md:hidden ${dropdownColourClasses} p-2 absolute right-0 mt-2 w-35 border`}
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
