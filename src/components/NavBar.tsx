import { useState } from 'react';
import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white text-black p-4 w-full">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-600 text-xl">Andrew Greenhill</div>
        <div className="hidden md:flex space-x-4 ml-auto">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'text-green-600 font-bold' : 'hover:text-green-500'
            }
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'text-green-600 font-bold' : 'hover:text-green-500'
            }
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? 'text-green-600 font-bold' : 'hover:text-green-500'
            }
          >
            Skills
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'text-green-600 font-bold' : 'hover:text-green-500'
            }
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'text-green-600 font-bold' : 'hover:text-green-500'
            }
          >
            Contact
          </NavLink>
        </div>
        <div className="md:hidden ml-auto bg-white !dark:bg-white">
          <button onClick={toggleMenu} className="focus:outline-none bg-white !dark:bg-white">
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
        <div className="md:hidden bg-white text-black p-2 absolute right-0 mt-2 w-35 border border-gray-300">
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? 'block text-green-600 font-bold' : 'block hover:text-green-500'
            }
            onClick={toggleMenu}
          >
            Home
          </NavLink>
          <NavLink
            to="/projects"
            className={({ isActive }) =>
              isActive ? 'block text-green-600 font-bold' : 'block hover:text-green-500'
            }
            onClick={toggleMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/skills"
            className={({ isActive }) =>
              isActive ? 'block text-green-600 font-bold' : 'block hover:text-green-500'
            }
            onClick={toggleMenu}
          >
            Skills
          </NavLink>
          <NavLink
            to="/about"
            className={({ isActive }) =>
              isActive ? 'block text-green-600 font-bold' : 'block hover:text-green-500'
            }
            onClick={toggleMenu}
          >
            About
          </NavLink>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? 'block text-green-600 font-bold' : 'block hover:text-green-500'
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
