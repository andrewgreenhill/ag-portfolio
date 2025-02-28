import { FaLinkedin, FaGithub, FaMicrosoft, FaFreeCodeCamp, FaStackOverflow } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';

function Footer() {
  return (
    <footer className="bg-white text-black py-4 mt-8">
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-between px-4">
        <p className="text-sm whitespace-nowrap">
          Made with ♥ using React and TypeScript
          {/* Made with <span className="text-red-500">♥</span> using React and TypeScript */}
        </p>

        <div className="container mx-auto flex justify-center space-x-6">
          <a href="https://www.linkedin.com/in/andrew-greenhill" target="_blank" rel="noreferrer">
            <FaLinkedin className="w-6 h-6 hover:text-green-500" />
          </a>
          <a href="https://github.com/andrewgreenhill" target="_blank" rel="noreferrer">
            <FaGithub className="w-6 h-6 hover:text-green-500" />
          </a>
          <a
            href="https://learn.microsoft.com/en-gb/users/andrewgreenhill"
            target="_blank"
            rel="noreferrer"
          >
            <FaMicrosoft className="w-6 h-6 hover:text-green-500" />
          </a>
          <a href="https://www.freecodecamp.org/andrewgreenhill" target="_blank" rel="noreferrer">
            <FaFreeCodeCamp className="w-6 h-6 hover:text-green-500" />
          </a>
          <a
            href="https://stackoverflow.com/users/3532483/andrewgreenhill"
            target="_blank"
            rel="noreferrer"
          >
            <FaStackOverflow className="w-6 h-6 hover:text-green-500" />
          </a>
          <a
            href="https://bsky.app/profile/andrew-greenhill.bsky.social"
            target="_blank"
            rel="noreferrer"
          >
            <FaBluesky className="w-6 h-6 hover:text-green-500" />
          </a>
        </div>

        {/* <div className="flex space-x-2"> */}
        {/* Social icons or text links */}
        {/* <a href="https://github.com/andrewgreenhill" target="_blank" rel="noreferrer">
            LinkedIn
          </a>
          <a href="https://www.linkedin.com/in/andrew-greenhill" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://learn.microsoft.com/en-gb/users/andrewgreenhill"
            target="_blank"
            rel="noreferrer"
          >
            Microsoft
          </a>
          <a href="https://www.freecodecamp.org/andrewgreenhill" target="_blank" rel="noreferrer">
            freeCodeCamp
          </a>
          <a
            href="https://stackoverflow.com/users/3532483/andrewgreenhill"
            target="_blank"
            rel="noreferrer"
          >
            Stack Overflow
          </a>
          <a
            href="https://bsky.app/profile/andrew-greenhill.bsky.social"
            target="_blank"
            rel="noreferrer"
          >
            Bluesky
          </a> */}
        {/* </div> */}
        <p className="text-sm whitespace-nowrap">© 2025 Andrew Greenhill. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
