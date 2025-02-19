import { displayNameForGroup } from '../data/projectsData';
import { IProjectRecord, TProjectGroupCode } from '../types';
import { extractFileNameFromUrl } from '../assets/utils';
import ReactMarkdown from 'react-markdown';

interface DisplayProjectsOfGroupProps {
  groupCode: TProjectGroupCode;
  projectsData: IProjectRecord[];
}

function DisplayProjectsOfGroup({ groupCode, projectsData }: DisplayProjectsOfGroupProps) {
  return (
    <div>
      <h2 className="text-2xl font-bold">{displayNameForGroup[groupCode]}</h2>
      {projectsData.filter((project) => project.groupCode === groupCode).length === 0 ? (
        <p className="mt-2 text-gray-600">
          Under construction. There is no project data for this group yet. {/* TODO */}
        </p>
      ) : (
        projectsData
          .filter((project) => project.groupCode === groupCode)
          .map((project, index) => (
            <div key={index}>
              <br />
              {DisplayProject(project)}
            </div>
          ))
      )}
    </div>
  );
}

function DisplayProject(projectData: IProjectRecord) {
  return (
    <div>
      <h3 className="text-xl font-bold">{projectData.projectName}</h3>
      <p className="mt-2 text-gray-600">
        <ProjectDescriptionComponent markdownText={projectData.projectDescription} />
      </p>
      <p className="mt-2 text-gray-600">{DisplayImages(projectData.images)}</p>
      <p className="mt-2 text-gray-600">My role and contributions: {projectData.myRole}</p>
      <p className="mt-2 text-gray-600">Technologies used: {projectData.technologies}</p>
      <p className="mt-2 text-gray-600">Link to demo: {DisplayLink(projectData.link2Demo)}</p>
      <p className="mt-2 text-gray-600">
        Link to source code: {DisplayLink(projectData.link2Code)}
      </p>
      <p className="mt-2 text-gray-600">Comments: {projectData.publicComments}</p>
    </div>
  );
}

/** ReactMarkdown with a setting to make it open hyperlinks in a new tab  */
function ProjectDescriptionComponent({ markdownText }: { markdownText: string }) {
  return (
    <ReactMarkdown
      components={{
        a: ({ node, ...props }) => (
          <a {...props} target="_blank" rel="noopener noreferrer">
            {props.children}
          </a>
        ),
      }}
    >
      {markdownText}
    </ReactMarkdown>
  );
}

function DisplayLink(link: string) {
  if (!link) return null;
  if (link?.toLowerCase() === 'na' || link?.toLowerCase() === 'n/a') return 'N/A';
  return (
    <a href={link} target="_blank" rel="noreferrer" className="text-blue-500">
      {link}
    </a>
  );
}

function DisplayImages(images: string[]) {
  if (!images || images.length === 0) return null;
  return <div>{images.map((image, index) => DisplayImage(image, index))}</div>;
}

function DisplayImage(image: string, index: number) {
  return (
    <div key={index}>
      <img
        src={image}
        alt={extractFileNameFromUrl(image) || `Screenshot ${index + 1}`}
        className="project-screenshot"
      />
      <br />
    </div>
  );
}

export { DisplayProjectsOfGroup };
