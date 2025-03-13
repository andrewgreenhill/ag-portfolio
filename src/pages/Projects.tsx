import { useParams, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { TProjectGroupKey } from '../types';
import { groupsInfo, projectsData } from '../data/projectsData';
import NotFound from './NotFound';
import { ProjectsOfGroup } from '../components/ProjectDisplay';
import { scrollToTop } from '../assets/utils';

/**
 * The Projects page displays a list of project groups, each with a description and a link to view the projects in that group.
 * If a projectId query parameter is in the URL, the page will display the projects in the group with that id.
 * @returns The Projects page
 */
function Projects() {
  const { projectId } = useParams<{ projectId?: string }>();

  // Handle case for an individual project
  if (projectId) {
    // Find the key for the group whose link matches the URL's projectId parameter
    const projectGroupKey = Object.keys(groupsInfo).find(
      (key) => groupsInfo[key as TProjectGroupKey].link === projectId
    ) as TProjectGroupKey;

    if (!projectGroupKey) {
      return (
        <PageTransition>
          <NotFound pageType="projects page" />
        </PageTransition>
      );
    }

    const projectMetadata = groupsInfo[projectGroupKey];

    return (
      <PageTransition>
        <div className="relative text-center p-8 pb-4">
          <Link to="/projects" className="absolute top-0 left-4 text-green-600 hover:underline">
            ⇦ Back to all projects
          </Link>
          <h1 className="text-3xl font-bold">{projectMetadata.name}</h1>
          <h2 className="mt-2 text-black mb-8">{projectMetadata.description}</h2>
          <ProjectsOfGroup projectsData={projectsData} groupCode={projectGroupKey} />
          <div className="relative">
            <Link
              to="#"
              className="absolute bottom-2 right-4 text-green-600 hover:underline"
              onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            >
              Back to top ⇧
            </Link>
          </div>
        </div>
      </PageTransition>
    );
  }

  // Handle case for All projects
  const projectGroupsToDisplay: TProjectGroupKey[] = [
    'IdeagenDT',
    'DamstraAPE',
    'Miscellaneous',
    'EarlyWork',
  ];

  return (
    <PageTransition>
      <div className="text-center px-8 pb-4 md:pt-8 sm:pt-2">
        <h1 className="text-3xl font-bold">Projects</h1>

        <h2 className="mt-2 text-2xl text-gray-600 mb-6 md:mb-8">Check out my work below</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
          {projectGroupsToDisplay.map((groupCode) => (
            <div
              key={groupCode}
              className="bg-white shadow-md rounded-lg p-4 pt-10 transform transition duration-200 ease-in-out"
              // className="bg-white shadow-md rounded-lg p-4 border border-gray-300"
            >
              <h2 className="text-2xl font-bold">{groupsInfo[groupCode].name}</h2>
              <p className="justify-center">{groupsInfo[groupCode].description}</p>

              <Link
                className="inline-block bg-white border border-black font-bold m-4 py-2 px-4 rounded text-black hover:text-green-600 hover:scale-105 transform transition duration-200 ease-in-out"
                to={`/projects/${groupsInfo[groupCode].link}`}
                onClick={scrollToTop}
              >
                View projects
              </Link>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default Projects;
