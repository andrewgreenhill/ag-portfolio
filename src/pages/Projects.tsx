import PageTransition from '../components/PageTransition';
import { TProjectGroupCode } from '../types';
import { projectsData } from '../data/projectsData';
import { ProjectsOfGroup } from '../components/ProjectDisplay';

function Projects() {
  const projectGroupsToDisplay: TProjectGroupCode[] = [
    'IdeagenDT',
    'DamstraAPE',
    'Miscellaneous',
    'EarlyWork',
  ];

  return (
    <PageTransition>
      <div className="text-center p-10">
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
              <ProjectsOfGroup projectsData={projectsData} groupCode={groupCode} />
            </div>
          ))}
        </div>
      </div>
    </PageTransition>
  );
}

export default Projects;
