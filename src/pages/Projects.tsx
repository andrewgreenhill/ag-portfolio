import PageTransition from '../components/PageTransition';
import { TProjectGroupCode } from '../types';
import { projectsData } from '../data/projectsData';
import { DisplayProjectsOfGroup } from '../components/ProjectDisplay';

function Projects() {
  const projectGroupsToDisplay: TProjectGroupCode[] = [
    'Miscellaneous',
    'IdeagenDT',
    'DamstraAPE',
    'EarlyWork',
  ];

  return (
    <PageTransition>
      <div className="text-center p-10">
        <h1 className="text-3xl font-bold">Projects</h1>
        <p className="mt-2 text-gray-600">Check out my work below!</p>

        {/* TODO */}
        <p className="mt-2 text-gray-600">
          This page is under construction. More content is coming soon...
        </p>

        <div>
          {projectGroupsToDisplay.map((groupCode, index) => (
            <div key={index}>
              <br />
              {DisplayProjectsOfGroup({ groupCode, projectsData })}
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default Projects;
