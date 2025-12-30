import { lazy } from 'react';
import PageTransition from '../components/PageTransition';
import ContactForm from '../components/ContactForm';
import { hyperlinkClasses } from '../assets/constants';
import { splitTextDefaultConfig } from '../utils/SplitTextConstants';
import { useHeadingFlags } from '../theme/HeadingContext';

const SplitText = lazy(() => import('../utils/SplitText'));

/**
 * @returns The Contact page
 */
function Contact() {
  const { hasSeenContactHeading, setHasSeenContactHeading } = useHeadingFlags();
  const handleHeadingAnimationComplete = () => {
    setHasSeenContactHeading(true);
  };

  return (
    <PageTransition>
      <div className="text-center px-8 pb-4 md:pt-8 sm:pt-2">
        <SplitText
          {...splitTextDefaultConfig}
          tag="h1"
          text="Contact me"
          className="text-3xl font-bold mb-1 text-center"
          onLetterAnimationComplete={handleHeadingAnimationComplete}
          disableAnimation={hasSeenContactHeading}
        />
        <h2 className="text-2xl font-bold pt-3">Let's connect!</h2>
        <br />

        <ContactForm />

        {/* Social media links */}
        <div className="flex justify-center">
          <ul className="mt-4 text-left pt-4">
            <li>
              LinkedIn{' '}
              <a
                href="https://www.linkedin.com/in/andrew-greenhill"
                target="_blank"
                className={hyperlinkClasses}
              >
                www.linkedin.com/in/andrew-greenhill
              </a>
            </li>
            <li>
              Bluesky{' '}
              <a
                href="https://bsky.app/profile/andrew-greenhill.bsky.social"
                target="_blank"
                className={hyperlinkClasses}
              >
                bsky.app/profile/andrew-greenhill.bsky.social
              </a>
            </li>
          </ul>
        </div>
      </div>
    </PageTransition>
  );
}

export default Contact;
