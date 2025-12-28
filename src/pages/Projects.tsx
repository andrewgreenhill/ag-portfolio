import { lazy } from 'react';
import { useParams, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { TProjectGroupKey } from '../types';
import NotFound from './NotFound';
import { ProjectsOfGroup } from '../components/ProjectDisplay';
import { scrollToTop } from '../assets/utils';
import { useQuery } from '@tanstack/react-query';
import {
  fetchGroupsInfo,
  fetchProjectsData,
  queryKeyGroupsInfo,
  queryKeyProjectsData,
} from '../api/projectsApi';
import { loadingErrorDisplay, loadingSpinnerDisplay } from '../components/loadingUtils';
import {
  linkActiveColourClasses,
  linkHoverColourClasses,
  cardColourClasses,
  buttonColourClasses,
} from '../assets/constants';
import { useTheme } from '../theme/ThemeContext';
import { splitTextDefaultConfig } from '../utils/SplitTextConstants';
import { useHeadingFlags } from '../theme/HeadingContext';

const SplitText = lazy(() => import('../utils/SplitText'));

/**
 * The Projects page displays a list of project groups, each with a description and a link to view the projects in that group.
 * If a projectId query parameter is in the URL, the page will display the projects in the group with that id.
 * @returns The Projects page
 */
function Projects(): JSX.Element {
  return (
    <PageTransition>
      <ProjectsContent />
    </PageTransition>
  );
}

function ProjectsContent(): JSX.Element {
  const { hasSeenProjectsHeading, setHasSeenProjectsHeading } = useHeadingFlags();
  const { theme } = useTheme();
  const isDark = theme === 'dark';

  const { projectId } = useParams<{ projectId?: string }>();

  const {
    data: groupsInfo,
    error: groupsInfoError,
    isLoading: isLoadingGroupsInfo,
  } = useQuery({
    queryKey: [queryKeyGroupsInfo],
    queryFn: fetchGroupsInfo,
  });

  const {
    data: projectsData,
    error: projectsDataError,
    isLoading: isLoadingProjectsData,
  } = useQuery({
    queryKey: [queryKeyProjectsData],
    queryFn: fetchProjectsData,
  });

  if (isLoadingGroupsInfo || isLoadingProjectsData) {
    return loadingSpinnerDisplay('projects data');
  }
  if (groupsInfoError || !groupsInfo) {
    return loadingErrorDisplay('projects groups information');
  }
  if (projectsDataError || !projectsData) {
    return loadingErrorDisplay('projects data');
  }

  // Handle case for an individual project
  if (projectId) {
    // Find the key for the group whose link matches the URL's projectId parameter
    const projectGroupKey = Object.keys(groupsInfo).find(
      (key) => groupsInfo[key as TProjectGroupKey].link === projectId
    ) as TProjectGroupKey;

    if (!projectGroupKey) {
      return <NotFound pageType="projects page" />;
    }

    const projectMetadata = groupsInfo[projectGroupKey];

    return (
      <div className="relative text-center p-8 pb-4">
        <Link
          to="/projects"
          className={`absolute top-0 left-4 ${linkActiveColourClasses} ${linkHoverColourClasses} hover:underline`}
        >
          ⇦ Back to all projects
        </Link>
        <h1 className="text-3xl font-bold">{projectMetadata.name}</h1>
        <h2 className="mt-2 mb-8">{projectMetadata.description}</h2>
        <ProjectsOfGroup projectsData={projectsData} groupCode={projectGroupKey} />
        <div className="relative">
          <Link
            to="#"
            className={`absolute bottom-2 right-4 ${linkActiveColourClasses} ${linkHoverColourClasses} hover:underline`}
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          >
            Back to top ⇧
          </Link>
        </div>
      </div>
    );
  }

  // Handle case for All projects
  const projectGroupsToDisplay: TProjectGroupKey[] = [
    'IdeagenDT',
    'DamstraAPE',
    'Miscellaneous',
    'EarlyWork',
  ];

  const handleHeadingAnimationComplete = () => {
    setHasSeenProjectsHeading(true);
  };

  return (
    <div className="text-center px-8 pb-4 md:pt-8 sm:pt-2">
      <SplitText
        {...splitTextDefaultConfig}
        tag="h1"
        text="Projects"
        className="text-3xl font-bold"
        onLetterAnimationComplete={handleHeadingAnimationComplete}
        disableAnimation={hasSeenProjectsHeading}
      />
      <h2 className="mt-2 text-2xl mb-6 md:mb-8">Check out my work below</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
        {projectGroupsToDisplay.map((groupCode) => (
          <div
            key={groupCode}
            className={`${cardColourClasses} shadow-md rounded-lg px-6 md:px-8 lg:px-10 py-8 md:py-10 lg:py-16 transform transition duration-200 ease-in-out`}
          >
            <h2 className="text-2xl font-bold">{groupsInfo[groupCode].name}</h2>
            <p className="justify-center">{groupsInfo[groupCode].description}</p>

            <Link
              className={`inline-block ${buttonColourClasses} border ${
                isDark ? 'border-gray-300' : 'border-black'
              } font-bold m-4 mb-0 py-2 px-4 rounded ${linkHoverColourClasses} hover:scale-105 transform transition duration-200 ease-in-out`}
              to={`/projects/${groupsInfo[groupCode].link}`}
              onClick={scrollToTop}
            >
              View projects
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;
