import { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';

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

  return (
    <nav className="bg-white text-black p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div
          className="text-green-600 text-xl font-bold"
          style={{ fontSize: '1.4rem' }}
          // style={{ fontFamily: 'Kantumruy Pro, sans-serif' }}
        >
          Andrew Greenhill
        </div>
        <div className="hidden md:flex space-x-4 ml-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-green-600 font-bold underline' : 'hover:text-green-500'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-green-600 font-bold underline' : 'hover:text-green-500'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? 'text-green-600 font-bold underline' : 'hover:text-green-500'
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-green-600 font-bold underline' : 'hover:text-green-500'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-green-600 font-bold underline' : 'hover:text-green-500'
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="md:hidden ml-auto">
          <button
            onClick={toggleMenu}
            className="focus:outline-none bg-white dark:bg-white border border-gray-300"
            style={{ borderWidth: '1px' }} // Reduced border thickness
          >
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
            className={({ isActive }) =>
              isActive ? 'block text-green-600 font-bold underline' : 'block hover:text-green-500'
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'block text-green-600 font-bold underline' : 'block hover:text-green-500'
            }
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? 'block text-green-600 font-bold underline' : 'block hover:text-green-500'
            }
            onClick={toggleMenu}
          >
            Skills
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'block text-green-600 font-bold underline' : 'block hover:text-green-500'
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'block text-green-600 font-bold underline' : 'block hover:text-green-500'
            }
            onClick={toggleMenu}
          >
            Contact
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default NavBar;
