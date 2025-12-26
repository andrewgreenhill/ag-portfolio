import { useState, useEffect, useRef } from 'react';
import PageTransition from '../components/PageTransition';
import {
  hyperlinkClasses,
  cardColourClasses,
  aboutSectionColourClasses,
  headingColourClasses,
  tooltipColourClasses,
  linkActiveColourClasses,
  linkHoverColourClasses,
} from '../assets/constants';

/**
 * @returns The About page
 */
function About() {
  const [showLanguages, setShowLanguages] = useState(false);
  const popupRef = useRef<HTMLSpanElement>(null);

  const toggleLanguages = () => {
    setShowLanguages(!showLanguages);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (popupRef.current && !popupRef.current.contains(event.target as Node)) {
      setShowLanguages(false);
    }
  };

  const handleEscapePress = (event: KeyboardEvent) => {
    if (event.key === 'Escape') {
      setShowLanguages(false);
    }
  };

  useEffect(() => {
    if (showLanguages) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('keydown', handleEscapePress);

      const timer = setTimeout(() => {
        setShowLanguages(false);
      }, 15000);

      return () => {
        document.removeEventListener('mousedown', handleClickOutside);
        document.removeEventListener('keydown', handleEscapePress);
        clearTimeout(timer);
      };
    }
  }, [showLanguages]);

  const aboutSectionClasses = `text-lg ${aboutSectionColourClasses} leading-relaxed`;

  return (
    <PageTransition>
      <div className={`m-2 p-8 pb-4 ${cardColourClasses} rounded-lg text-left md:text-justify`}>
        <h1 className="text-3xl font-bold mb-6 text-center">About me</h1>

        <section className="space-y-4">
          <p className={aboutSectionClasses}>
            I am a professional software engineer specializing in front-end development. My
            experience includes building web applications using React.js, TypeScript, and related
            web technologies. Known for my commitment, attention to detail, and persistence, I take
            ownership of projects from start to finish — from understanding the specifications,
            developing functional code, collaborating with stakeholders, to post-deployment
            maintenance. I am passionate about delivering user-centric solutions that solve business
            problems.
          </p>
          <p className={aboutSectionClasses}>
            My experience across diverse roles in software development, technical support, and
            customer success has strengthened my ability to understand end-user needs and build
            practical, scalable applications. See more at{' '}
            <a
              className={hyperlinkClasses}
              target="_blank"
              rel="noreferrer"
              href="https://www.linkedin.com/in/andrew-greenhill"
            >
              LinkedIn
            </a>
            .
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className={`text-2xl font-bold ${headingColourClasses} text-center`}>Background</h2>
          <p className={aboutSectionClasses}>
            I began programming while at school, teaching myself. I started with Basic, then when I
            wanted more capabilities, I taught myself machine code. I started creating my own
            operating system “GDOS” (Greenhill Disk Operating System), and when I did my final year
            12 computing project, that ran on my OS. I wrote that all in hexadecimal machine code.
            The project was a game of{' '}
            <a
              className={hyperlinkClasses}
              target="_blank"
              rel="noreferrer"
              href="https://en.wikipedia.org/wiki/Reversi#Othello"
            >
              Othello
            </a>
            , with artificial intelligence that could beat many of my classmates. Following that, I
            wrote many games, and fractal-making programs, 3D graphics, blackjack simulation and
            probability analysis, a mortgage simulator, etc. Usually in Pascal, back then.
          </p>
          <p className={aboutSectionClasses}>
            I studied programming at UWA and Curtin University. I have programmed in 12{' '}
            <span className="relative group">
              <span className={hyperlinkClasses} onClick={toggleLanguages}>
                languages
              </span>
              {showLanguages && (
                <span
                  ref={popupRef}
                  className={`absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-48 p-2 ${tooltipColourClasses} text-left text-sm rounded-lg shadow-lg`}
                >
                  TypeScript, JavaScript, HTML, Python, Ruby, C#, C, VBA, GML, Prolog, Basic,
                  Pascal, and Z80 machine language.
                </span>
              )}
            </span>
            . I have also made a computer from the ground up from very basic components: a CPU,
            EEPROM and RAM memory, buses, etc.
          </p>
          <p className={aboutSectionClasses}>
            Circumstances shifted my course away from the above though, I worked for different
            software companies but did technical support, training and solution engineering. I did
            programming at every opportunity but that wasn't enough, I never stopped longing to be
            programming full time. So, I drove my path back into software development, where I am
            now again - at my happiest and most engaged :-)
          </p>
        </section>

        <section className="mt-8 space-y-4">
          <h2 className={`text-2xl font-bold ${headingColourClasses} text-center`}>Colour theme</h2>
          <p className={aboutSectionClasses}>
            The colour theme for my logo and this web site was inspired by{' '}
            <a
              className={hyperlinkClasses}
              target="_blank"
              rel="noreferrer"
              href="https://www.google.com/search?q=the+matrix&udm=2"
            >
              The Matrix
            </a>
            , because when I was writing in machine code, I did that using a hexadecimal editor that
            looked similar to the screenshot below but with green or amber coloured text. I can
            easily convert between hexadecimal numbers and binary, and so I was only 1 step removed
            from writing directly in binary. I could create cool things like the above, and a moving
            blimp, and play music notes, and much more — the ability to create worlds from green
            numbers!
          </p>
          <img
            src="https://i0.wp.com/blog.compactbyte.com/wp-content/uploads/2019/02/vcxsrv_2019-02-18_23-24-30.png?is-pending-load=1#038;ssl=1"
            alt="Hexadecimal editor screenshot"
            className="rounded-lg shadow-lg mt-4 mx-auto m-4"
          />
        </section>
        <div className="text-right mt-8">
          <a
            href="#"
            className={`${linkActiveColourClasses} ${linkHoverColourClasses} hover:underline`}
            onClick={(e) => {
              e.preventDefault();
              window.scrollTo({ top: 0, behavior: 'smooth' });
            }}
          >
            Back to top ⇧
          </a>
        </div>
      </div>
    </PageTransition>
  );
}

export default About;
