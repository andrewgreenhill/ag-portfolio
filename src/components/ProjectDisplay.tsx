import { displayNameForGroup } from '../data/projectsData';
import { IProjectRecord, TProjectGroupCode } from '../types';
import { extractFileNameFromUrl } from '../assets/utils';
import { ReactMarkdownOpenInNewTab } from './Utilities';

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
      {DisplayProjectName(projectData.projectName)}
      <DisplayMarkdownText label="" markdownText={projectData.projectDescription} />
      {DisplayImages(projectData.images)}
      <DisplayMarkdownText label="My role and contributions: " markdownText={projectData.myRole} />
      <DisplayMarkdownText label="Technologies used: " markdownText={projectData.technologies} />
      <DisplayMarkdownText label="Link to demo: " markdownText={projectData.link2Demo} />
      <DisplayMarkdownText label="Link to source code: " markdownText={projectData.link2Code} />
      <DisplayMarkdownText label="Comments: " markdownText={projectData.publicComments} />
    </div>
  );
}

function DisplayProjectName(projectName: string) {
  return <h3 className="text-xl font-bold">{projectName}</h3>;
}

function DisplayMarkdownText({ label, markdownText }: { label?: string; markdownText: string }) {
  return (
    <p className="mt-2 text-gray-600">
      {label && <strong>{label}</strong>}
      <ReactMarkdownOpenInNewTab markdownText={markdownText} />
    </p>
  );
}

function DisplayImages(images: string[]) {
  if (!images || images.length === 0) return null;
  return (
    <p className="mt-2 text-gray-600">
      <div>{images.map((image, index) => DisplayImage(image, index))}</div>
    </p>
  );
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
