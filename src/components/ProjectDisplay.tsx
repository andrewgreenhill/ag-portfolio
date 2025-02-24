import { displayNameForGroup } from '../data/projectsData';
import { IProjectRecord, TProjectGroupCode } from '../types';
import { extractFileNameFromUrl } from '../assets/utils';
import { ReactMarkdownOpenInNewTab } from './Utilities';

interface DisplayProjectsOfGroupProps {
  groupCode: TProjectGroupCode;
  projectsData: IProjectRecord[];
}

function DisplayProjectsOfGroup({ groupCode, projectsData }: DisplayProjectsOfGroupProps) {
  const projectsOfGroup = projectsData.filter((project) => project.groupCode === groupCode);
  return (
    <div>
      <h2 className="text-2xl font-bold">{displayNameForGroup[groupCode]}</h2>
      {projectsOfGroup.length === 0 ? (
        <p className="mt-2 text-gray-600">
          Under construction. There is no project data for this group yet.
        </p>
      ) : (
        projectsOfGroup.map((project, index) => (
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
      <DisplayProjectName projectName={projectData.projectName} />
      <DisplayMarkdownField label="" markdownText={projectData.projectDescription} />
      <DisplayImages images={projectData.images} />
      <DisplayMarkdownField label="My role and contributions: " markdownText={projectData.myRole} />
      <DisplayMarkdownField label="Technologies used: " markdownText={projectData.technologies} />
      <DisplayMarkdownField label="Link to demo: " markdownText={projectData.link2Demo} />
      <DisplayMarkdownField label="Link to source code: " markdownText={projectData.link2Code} />
      <DisplayMarkdownField label="Comments: " markdownText={projectData.publicComments} />
    </div>
  );
}

function DisplayProjectName({ projectName }: { projectName: string }) {
  return <h3 className="text-xl font-bold">{projectName}</h3>;
}

function DisplayMarkdownField({ label, markdownText }: { label: string; markdownText: string }) {
  return (
    <p className="mt-2 text-gray-600">
      {label && <strong>{label}</strong>}
      <ReactMarkdownOpenInNewTab markdownText={markdownText} />
    </p>
  );
}

function DisplayImages({ images }: { images: string[] }) {
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
