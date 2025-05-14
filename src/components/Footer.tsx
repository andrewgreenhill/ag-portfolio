import { FaLinkedin, FaGithub, FaMicrosoft, FaFreeCodeCamp, FaStackOverflow } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';

function Footer() {
  const socialIconClasses = 'w-6 h-6 hover:text-green-500';
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white text-black py-4 mt-1">
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <p className="text-sm whitespace-nowrap p-2">Made with ♥ using React and TypeScript</p>

        <div className="flex justify-center space-x-6 p-2">
          <a href="https://www.linkedin.com/in/andrew-greenhill" target="_blank" rel="noreferrer">
            <FaLinkedin className={socialIconClasses} />
          </a>
          <a href="https://github.com/andrewgreenhill" target="_blank" rel="noreferrer">
            <FaGithub className={socialIconClasses} />
          </a>
          <a
            href="https://learn.microsoft.com/en-gb/users/andrewgreenhill"
            target="_blank"
            rel="noreferrer"
          >
            <FaMicrosoft className={socialIconClasses} />
          </a>
          <a href="https://www.freecodecamp.org/andrewgreenhill" target="_blank" rel="noreferrer">
            <FaFreeCodeCamp className={socialIconClasses} />
          </a>
          <a
            href="https://stackoverflow.com/users/3532483/andrewgreenhill"
            target="_blank"
            rel="noreferrer"
          >
            <FaStackOverflow className={socialIconClasses} />
          </a>
          <a
            href="https://bsky.app/profile/andrew-greenhill.bsky.social"
            target="_blank"
            rel="noreferrer"
          >
            <FaBluesky className={socialIconClasses} />
          </a>
        </div>

        <p className="text-sm whitespace-nowrap p-2">
          {`© ${currentYear} Andrew Greenhill. All rights reserved.`}
        </p>
      </div>
    </footer>
  );
}

export default Footer;
