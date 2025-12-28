import { FaLinkedin, FaGithub, FaMicrosoft, FaFreeCodeCamp, FaStackOverflow } from 'react-icons/fa';
import { FaBluesky } from 'react-icons/fa6';
import { footerColourClasses, socialIconColourClasses } from '../assets/constants';

function Footer() {
  const socialIconClasses = `w-6 h-6 ${socialIconColourClasses}`;
  const currentYear = new Date().getFullYear() ?? 2025;

  return (
    <footer className={`${footerColourClasses} py-4 pt-3`}>
      <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between px-4">
        <p className="text-sm whitespace-nowrap p-2">Made with ♥ using React and TypeScript</p>

        <div className="flex justify-center space-x-6 p-2">
          <a
            href="https://www.linkedin.com/in/andrew-greenhill"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Andrew Greenhill on LinkedIn"
          >
            <FaLinkedin className={socialIconClasses} />
          </a>
          <a
            href="https://github.com/andrewgreenhill"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Andrew Greenhill on GitHub"
          >
            <FaGithub className={socialIconClasses} />
          </a>
          <a
            href="https://learn.microsoft.com/en-gb/users/andrewgreenhill"
            target="_blank"
            rel="noreferrer"
            aria-label="View Andrew Greenhill's Microsoft Learn profile"
          >
            <FaMicrosoft className={socialIconClasses} />
          </a>
          <a
            href="https://www.freecodecamp.org/andrewgreenhill"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Andrew Greenhill on freeCodeCamp"
          >
            <FaFreeCodeCamp className={socialIconClasses} />
          </a>
          <a
            href="https://stackoverflow.com/users/3532483/andrewgreenhill"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Andrew Greenhill on Stack Overflow"
          >
            <FaStackOverflow className={socialIconClasses} />
          </a>
          <a
            href="https://bsky.app/profile/andrew-greenhill.bsky.social"
            target="_blank"
            rel="noreferrer"
            aria-label="Visit Andrew Greenhill on Bluesky"
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
