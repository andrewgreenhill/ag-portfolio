import { groupDisplayName } from '../data/projectsData';
import { IProjectRecord, TProjectGroupCode } from '../types';
import { extractFileNameFromUrl } from '../assets/utils';
import { ReactMarkdownOpenInNewTab } from './Utilities';

interface ProjectsOfGroupProps {
  projectsData: IProjectRecord[];
  groupCode: TProjectGroupCode;
}

function ProjectsOfGroup({ projectsData, groupCode }: ProjectsOfGroupProps) {
  const projectsOfGroup = projectsData.filter((project) => project.groupCode === groupCode);
  return (
    <div>
      <h2 className="text-2xl font-bold">{groupDisplayName[groupCode]}</h2>
      {projectsOfGroup.length === 0 ? (
        <div className="mt-2 text-gray-600">
          Under construction. There is no project data for this group yet.
        </div>
      ) : (
        projectsOfGroup.map((projectData) => (
          <div key={projectData.id}>
            <br />
            <DisplayProject projectData={projectData} />
          </div>
        ))
      )}
    </div>
  );
}

function DisplayProject({ projectData }: { projectData: IProjectRecord }) {
  return (
    <div>
      <ProjectName projectName={projectData.projectName} />
      <MarkdownField label="" markdownText={projectData.projectDescription} />
      <Images images={projectData.images} />
      <MarkdownField label="My role and contributions: " markdownText={projectData.myRole} />
      <MarkdownField label="Technologies used: " markdownText={projectData.technologies} />
      <MarkdownField label="Link to demo: " markdownText={projectData.link2Demo} />
      <MarkdownField label="Link to source code: " markdownText={projectData.link2Code} />
      <MarkdownField label="Comments: " markdownText={projectData.publicComments} />
    </div>
  );
}

function ProjectName({ projectName }: { projectName: string }) {
  return <h3 className="text-xl font-bold">{projectName}</h3>;
}

function MarkdownField({ label, markdownText }: { label: string; markdownText: string }) {
  return (
    <p className="mt-2 text-gray-600">
      {label && <strong>{label}</strong>}
      <ReactMarkdownOpenInNewTab markdownText={markdownText} />
    </p>
  );
}

function Images({ images }: { images: string[] }) {
  if (!images?.length) return null;
  const numImages = images.length;
  return (
    <div className="mt-2 text-gray-600">
      {images.map((image, index) => (
        <>
          <DisplayImage image={image} index={index} />
          {index < numImages - 1 && <br />}
        </>
      ))}
    </div>
  );
}

function DisplayImage({ image, index }: { image: string; index: number }) {
  return (
    <div key={index}>
      <img
        src={image}
        alt={extractFileNameFromUrl(image) || `Screenshot ${index + 1}`}
        className="project-screenshot"
        style={{ border: '2px solid #ccc', padding: '5px', width: '100%' }}
      />
    </div>
  );
}

export { ProjectsOfGroup };
