import { lazy } from 'react';
import { Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import {
  cardColourClasses,
  linkActiveColourClasses,
  linkHoverColourClasses,
} from '../assets/constants';
import { splitTextDefaultConfig } from '../utils/SplitTextConstants';
import { useHeadingFlags } from '../theme/HeadingContext';

const SplitText = lazy(() => import('../utils/SplitText'));

/**
 * The Skills page displays a list of my skills in frontend, other, tools, and soft skills.
 * @returns The Skills page
 */
function Skills() {
  const { hasSeenSkillsHeading, setHasSeenSkillsHeading } = useHeadingFlags();
  const skillsH2Classes = 'text-2xl font-bold mb-4 text-left';
  const skillsULClasses = 'list-disc list-inside text-left space-y-2';
  const cardClassNames = `${cardColourClasses} shadow rounded-lg p-7 md:p-9 lg:p-11`;

  const handleHeadingAnimationComplete = () => {
    setHasSeenSkillsHeading(true);
  };

  return (
    <PageTransition>
      <div className="max-w-4xl md:max-w-6xl lg:max-w-7xl mx-auto px-8 pb-4 md:pt-8 sm:pt-2">
        <SplitText
          {...splitTextDefaultConfig}
          tag="h1"
          text="Skills"
          className="text-3xl font-bold text-center mb-6 md:mb-8"
          onLetterAnimationComplete={handleHeadingAnimationComplete}
          disableAnimation={hasSeenSkillsHeading}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
          {/* Front-end Skills Card */}
          <div className={cardClassNames}>
            <h2 className={skillsH2Classes}>Frontend</h2>
            <ul className={skillsULClasses}>
              {[
                'JavaScript',
                'TypeScript',
                'React.js and related technologies like React Query, React Hook Form and Redux',
                'Next.js',
                'HTML',
                'CSS, SASS/SCSS',
              ].map((skill) => (
                <li key={skill} className="hanging-indent">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Other Skills Card */}
          <div className={cardClassNames}>
            <h2 className={skillsH2Classes}>Other</h2>
            <ul className={skillsULClasses}>
              {['C# and .NET', 'APIs', 'Python', 'Microsoft PowerShell'].map((skill) => (
                <li key={skill} className="hanging-indent">
                  {skill}
                </li>
              ))}
            </ul>
          </div>

          {/* Tools Card */}
          <div className={cardClassNames}>
            <h2 className={skillsH2Classes}>Tools</h2>
            <ul className={skillsULClasses}>
              {[
                'Create React App and Vite',
                'IDEs: Visual Studio Code, Sublime Text, some Visual Studio, and VSC extensions including ES Lint, Prettier, Code Runner, Copilot, GitLens, etc',
                'Testing: JEST and Vitest',
                'Source control: Git, GitHub and Bitbucket',
                'Virtualisation: Docker',
                'Zapier and its CLI',
                'Package managers: npm and yarn',
              ].map((tool) => (
                <li key={tool} className="hanging-indent">
                  {tool}
                </li>
              ))}
            </ul>
          </div>

          {/* Soft Skills Card */}
          <div className={cardClassNames}>
            <h2 className={skillsH2Classes}>Soft skills</h2>
            <ul className={skillsULClasses}>
              {[
                'Communication and teamwork',
                'Problem-solving, troubleshooting, analysis',
                'Attention to detail',
                'Commitment, determination and persistence',
                'My experience across diverse roles in software development, technical support, and customer success has strengthened my ability to understand end-user needs. I am passionate about delivering user-centric solutions that solve business problems.',
              ].map((skill) => (
                <li key={skill} className="hanging-indent">
                  {skill}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="relative lg:hidden xl:hidden 2xl:hidden">
          <Link
            to="#"
            className={`absolute bottom-0 right-4 ${linkActiveColourClasses} ${linkHoverColourClasses} hover:underline`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top ⇧
          </Link>
        </div>
      </div>
    </PageTransition>
  );
}

export default Skills;
