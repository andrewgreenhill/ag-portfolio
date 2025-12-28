import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { scrollToTop } from '../assets/utils';
import { homeButtonColourClasses, bodyTextColourClasses } from '../assets/constants';
import { useTheme } from '../theme/ThemeContext';

const baseURL = import.meta.env.BASE_URL || '';
const lightImage = `${baseURL}images/Backdrop/Perth_CBD_skyline_from_State_War_Memorial_Lookout,_2023,_04_b.jpg`;
const darkImage = `${baseURL}images/Backdrop/Perth_CBD_from_KingsPark(simulated).jpg`;

// Hook to detect dark mode using global theme state
function useDarkMode() {
  const { theme } = useTheme();
  return theme === 'dark';
}

const getBackgroundImage = (isDark: boolean) => (isDark ? darkImage : lightImage);

function MainScreenHeadingsAndButtons() {
  const isDark = useDarkMode();
  return (
    <div
      className="p-8 rounded-lg shadow-lg max-w-4xl w-full text-center mt-16 sm:mt-1 md:mt-16"
      style={{ backgroundColor: `rgba(255, 255, 255, ${isDark ? '0.25' : '0.75'})` }} // Translucent white
    >
      <h1 className="!text-2xl sm:!text-3xl md:!text-4xl font-bold">
        I'm a Frontend Developer specialising in React and TypeScript
      </h1>
      <br />
      <h2 className="!text-xl sm:!text-xl md:!text-2xl font-bold">
        I build modern, responsive, user-friendly web applications.
      </h2>
      <div className="mt-8 flex justify-center space-x-4">
        {/** Button border colour tracks theme: black in light mode, gray-300 in dark mode */}
        {/** `homeButtonColourClasses` handles text + hover colours for each theme. */}
        <Link
          to="/projects"
          className={`${homeButtonColourClasses} home-hero-button text-lg sm:text-xl md:text-2xl border ${{ true: 'border-black', false: 'border-gray-300' }[(!isDark).toString() as 'true' | 'false']} font-bold m-2 px-4 py-2 rounded-lg hover:scale-105 transform transition duration-200 ease-in-out`}
          onClick={scrollToTop}
        >
          View my work
        </Link>
        <Link
          to="/about"
          className={`${homeButtonColourClasses} home-hero-button text-lg sm:text-xl md:text-2xl border ${{ true: 'border-black', false: 'border-gray-300' }[(!isDark).toString() as 'true' | 'false']} font-bold m-2 px-4 py-2 rounded-lg hover:scale-105 transform transition duration-200 ease-in-out`}
          onClick={scrollToTop}
        >
          More about me
        </Link>
      </div>
    </div>
  );
}

function HomeScreenWide() {
  const isDark = useDarkMode();
  const backgroundImage = getBackgroundImage(isDark);

  return (
    <PageTransition>
      <div className="relative px-8 pb-4 md:pt-8 sm:pt-2">
        <img
          src={backgroundImage}
          alt="Perth CBD skyline from State War Memorial Lookout"
          className="w-full h-auto"
        />
        <div className="absolute inset-0 flex items-start justify-center px-8 pb-4 md:pt-8 sm:pt-2">
          <MainScreenHeadingsAndButtons />
        </div>
      </div>
      <p className={`text-center text-sm ${bodyTextColourClasses} hidden lg:block`}>
        I'm located in Perth, Western Australia.
      </p>
    </PageTransition>
  );
}

function HomeScreenTall() {
  const isDark = useDarkMode();
  const backgroundImage = getBackgroundImage(isDark);

  return (
    <PageTransition>
      <div className="relative px-8 pb-4 md:pt-8 sm:pt-2">
        <div className="absolute inset-0">
          <img
            src={backgroundImage}
            alt="Perth CBD skyline from State War Memorial Lookout"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative flex items-start justify-center px-8 pb-4 md:pt-8 sm:pt-2">
          <MainScreenHeadingsAndButtons />
        </div>
      </div>
      <p className={`text-center pt-2 text-sm ${bodyTextColourClasses}`}>
        I'm located in Perth, Western Australia.
      </p>
    </PageTransition>
  );
}

/** Component to display the home screen.
 * To best respond to the user's screen size and aspect ratio,
 * this looks at those and then uses the best approach accordingly. */
function Home() {
  // Eagerly load both background images so that switching theme doesn't
  // need to wait for an image fetch the first time the user toggles.
  useEffect(() => {
    [lightImage, darkImage].forEach((src) => {
      const img = new Image();
      img.src = src;
    });
  }, []);

  const [isWideScreen, setIsWideScreen] = useState(false);

  const updateScreenState = () => {
    const screenWidth = window.innerWidth;
    const screenHeight = window.innerHeight;
    // const isLandscape = window.screen.orientation?.type.includes("landscape");
    setIsWideScreen(
      // Check if the screen is wide. For small screens, allow width to be up to 2.5x height before considering it wide.
      screenWidth > screenHeight && !(screenWidth < 1024 && screenWidth < 2.5 * screenHeight)
    );
  };

  useEffect(() => {
    updateScreenState(); // Initialize on component mount
    window.addEventListener('resize', updateScreenState);
    return () => window.removeEventListener('resize', updateScreenState);
  }, []);

  return isWideScreen ? <HomeScreenWide /> : <HomeScreenTall />;
}

export default Home;
