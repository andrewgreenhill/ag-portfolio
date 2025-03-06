import { useParams, Link } from 'react-router-dom';
import PageTransition from '../components/PageTransition';
import { TProjectGroupKey } from '../types';
import { groupsInfo, projectsData } from '../data/projectsData';
import NotFound from './NotFound';
import { ProjectsOfGroup } from '../components/ProjectDisplay';

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
        <div className="text-center p-8 pb-4">
          <h1 className="text-3xl font-bold">{projectMetadata.name}</h1>
          <p className="mt-2 text-gray-600">{projectMetadata.description}</p>
          {/* <Link className="text-green-600 hover:underline"
              to={`/projects/${projectMetadata.link}`}>
              {`${window.location.href}`}
              </Link> */}
          <ProjectsOfGroup projectsData={projectsData} groupCode={projectGroupKey} />
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
      <div className="text-center p-8 pb-4">
        {/* TODO: Improve the presentation of the project groups */}
        <p className="mt-2 font-bold text-gray-600">
          <em>This is under construction. Nicer presentation is coming soon...</em>
        </p>
        <br />

        <h1 className="text-3xl font-bold">Projects</h1>

        <p className="mt-2 text-gray-600">Check out my work below!</p>
        <div>
          {projectGroupsToDisplay.map((groupCode) => (
            <div key={groupCode}>
              <br />
              <h2 className="text-2xl font-bold">{groupsInfo[groupCode].name}</h2>
              <p>{groupsInfo[groupCode].description}</p>
              <p>
                <Link
                  className="text-green-600 hover:underline"
                  to={`/projects/${groupsInfo[groupCode].link}`}
                >
                  {`${window.location.href}/${groupsInfo[groupCode].link}`}
                </Link>
              </p>
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default Projects;
