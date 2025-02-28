import { NavLink } from 'react-router-dom';
// import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <nav className="bg-white text-black p-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="text-green-600 text-xl">Andrew Greenhill</div>
        <div className="space-x-4">
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
      </div>
    </nav>

    // TODO: Add a hamburger menu for mobile / small screens

    // TODO: Remove this commented-out code
    // <nav className="p-4 bg-white shadow-md">
    //   <div className="container mx-auto flex justify-between">
    //     <Link to="/" className="text-xl font-bold">
    //       Andrew Greenhill
    //     </Link>
    //     <div className="space-x-4">
    //       <Link to="/" className="hover:text-blue-500">
    //         Home
    //       </Link>
    //       <Link to="/projects" className="hover:text-blue-500">
    //         Projects
    //       </Link>
    //       <Link to="/skills" className="hover:text-blue-500">
    //         Skills
    //       </Link>
    //       <Link to="/about" className="hover:text-blue-500">
    //         About
    //       </Link>
    //       <Link to="/contact" className="hover:text-blue-500">
    //         Contact
    //       </Link>
    //     </div>
    //   </div>
    // </nav>
  );
}

export default NavBar;
