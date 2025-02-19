import { TProjectGroupCode, IProjectRecord } from '../types';

const displayNameForGroup: Record<TProjectGroupCode, string> = {
  Miscellaneous: 'Miscellaneous',
  IdeagenDT: 'For Ideagen / Damstra',
  DamstraAPE: 'For Damstra / Applied Project Experience',
  EarlyWork: 'Early works',
};

const projectsData: IProjectRecord[] = [
  {
    id: 1,
    groupCode: 'Miscellaneous',
    subGroup: 'Miscellaneous',
    projectName: 'Personal Portfolio',
    projectDescription:
      'Personal portfolio website showcasing my skills, projects, and experience. The website is built using React.js and Tailwind CSS.',
    myRole: 'Sole developer',
    technologies: 'React, TypeScript, Tailwind CSS',
    link2Demo: 'https://www.ideagen.com',
    link2Code: 'n/a',
    images: [],
    publicComments: '',
    internalComments: '',
  },
  {
    id: 2,
    groupCode: 'Miscellaneous',
    subGroup: 'Agworld',
    projectName: 'Agworld accessory',
    projectDescription:
      'A small web app for getting data from a weather station; data that is required for completing weather records in Agworld software. Note: I paused operating it because of a Heroku cost increase.',
    myRole: 'I created that as a simple demonstration for Agworld.',
    technologies: 'JavaScript, React, HTML, CSS, APIs, GitHub Pages and Heroku.',
    link2Demo: 'https://andrewgreenhill.github.io/ag_agworld_accessory',
    link2Code: 'https://github.com/andrewgreenhill/ag_agworld_accessory',
    images: ['http://localhost:5173/images/Agworld/ag_agworld_accessory.jpg'],
    publicComments:
      'This isn’t a complete project and it doesn’t make use of all the modern front-end development practices, having been made quickly and many years ago.',
    internalComments: '',
  },
  {
    id: 3,
    groupCode: 'IdeagenDT',
    subGroup: 'Ideagen',
    projectName: 'Ideagen - Risk Management System',
    projectDescription:
      'Risk Management System for Ideagen. The system is used to manage risks, incidents, and audits. It is used by clients in various industries, including healthcare, aviation, and manufacturing.',
    myRole:
      'I was the lead developer on this project. I was responsible for the design and implementation of the system. I worked closely with the client to gather requirements and provide technical support.',
    technologies: 'React, TypeScript, Redux, Node.js, Express, MongoDB',
    link2Demo: 'https://www.ideagen.com',
    link2Code: '',
    images: [],
    publicComments: '',
    internalComments: '',
  },
];

export { displayNameForGroup, projectsData };
