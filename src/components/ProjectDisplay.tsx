import { useState, useMemo } from 'react';
import { IProjectRecord, TProjectGroupKey } from '../types';
import { extractFileNameFromUrl } from '../assets/utils';
import { ReactMarkdownOpenInNewTab } from './Utilities';
import Modal from 'react-modal';
import {
  cardColourClasses,
  mutedTextColourClasses,
  bodyTextColourClasses,
  projectImageClasses,
  projectImageDarkStyleColourClasses,
  projectImageLightBackgroundColourClasses,
} from '../assets/constants';

interface ProjectsOfGroupProps {
  projectsData: IProjectRecord[];
  groupCode: TProjectGroupKey;
}

function ProjectsOfGroup({ projectsData, groupCode }: ProjectsOfGroupProps) {
  const projectsOfGroup = useMemo(
    () => projectsData.filter((project) => project.groupCode === groupCode),
    [projectsData, groupCode]
  );

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-12">
      {projectsOfGroup.length === 0 ? (
        <div className={`mt-2 ${mutedTextColourClasses}`}>
          There is currently no project data for this group.
        </div>
      ) : (
        projectsOfGroup.map((project) => (
          <div key={project.id} className={`${cardColourClasses} shadow-md rounded-lg p-6`}>
            <DisplayProject projectData={project} />
          </div>
        ))
      )}
    </div>
  );
}

function DisplayProject({ projectData }: { projectData: IProjectRecord }) {
  return (
    <div className="text-left">
      <ProjectName projectName={projectData.projectName} />
      <MarkdownField label="" markdownText={projectData.projectDescription} />
      {projectData.images?.length > 0 && <Images images={[projectData.images[0]]} />}
      <MarkdownField label="My role and contributions: " markdownText={projectData.myRole} />
      <MarkdownField label="Technologies: " markdownText={projectData.technologies} />
      <MarkdownField label="Demo: " markdownText={projectData.link2Demo} />
      <MarkdownField label="Source code: " markdownText={projectData.link2Code} />
      <MarkdownField label="Comments: " markdownText={projectData.publicComments} />
    </div>
  );
}

function ProjectName({ projectName }: { projectName: string }) {
  return <h2 className="text-xl font-bold mb-2">{projectName}</h2>;
}

function MarkdownField({ label, markdownText }: { label: string; markdownText: string }) {
  if (!markdownText) return null;
  return (
    <p className={`mt-2 ${bodyTextColourClasses} break-words`}>
      {label && <strong>{label}</strong>}
      <ReactMarkdownOpenInNewTab markdownText={markdownText} />
    </p>
  );
}

function Images({ images }: { images: string[] }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  if (!images?.length) return null;

  // TODO: Restore this after adding Image titles+Descriptions[+ Alt tags] to the data
  // const openModal = (image: string) => {
  //   setSelectedImage(image);
  //   setModalIsOpen(true);
  // };

  const closeModal = () => {
    setSelectedImage(null);
    setModalIsOpen(false);
  };

  const baseURL = import.meta.env.BASE_URL || '';

  return (
    <div className={`mt-2 ${mutedTextColourClasses}`}>
      {images.map((image, index) => (
        <div key={index}>
          {/* // TODO: Restore use of this Modal after adding Image titles+Descriptions[+ Alt tags] to the data
            <img
            src={image}
            alt={extractFileNameFromUrl(image) || `Screenshot ${index + 1}`}
            className={`project-screenshot rounded-lg cursor-pointer ${projectImageClasses}`}
            onClick={() => openModal(image)}
            /> */}
          {/* TODO: Disable the <a> tag below when I restore the Modal operation above */}
          <a href={`${baseURL}${image}`} target="_blank" rel="noopener noreferrer">
            <img
              src={`${baseURL}${image}`}
              alt={extractFileNameFromUrl(image) || `Screenshot ${index + 1}`}
              className={`project-screenshot rounded-lg cursor-pointer ${projectImageClasses}`}
            />
          </a>
          {index < images.length - 1 && <br />}
        </div>
      ))}
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        contentLabel="Image Modal"
        style={{
          content: {
            border: `2px solid ${projectImageDarkStyleColourClasses}`,
            borderRadius: '10px',
            paddingTop: '10px',
            backgroundColor: projectImageLightBackgroundColourClasses,
          },
        }}
      >
        <div style={{ textAlign: 'center' }}>
          <button
            onClick={closeModal}
            className="close-button"
            style={{ marginBottom: '10px', float: 'right' }}
          >
            Close
          </button>
        </div>
        <h2 className="text-center text-2xl p-8">Image</h2> {/* TODO: Review the modal's title */}
        {selectedImage && (
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignContent: 'center',
              paddingTop: '10px',
            }}
          >
            <img
              src={selectedImage}
              alt="Selected"
              style={{ width: '80%', border: '1px solid black', borderRadius: '10px' }}
            />
          </div>
        )}
      </Modal>
    </div>
  );
}

export { ProjectsOfGroup };
