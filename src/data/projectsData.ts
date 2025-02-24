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
    link2Demo: '[https://www.ideagen.com](https://www.ideagen.com)',
    link2Code: 'n/a',
    images: [],
    when: '',
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
    link2Demo:
      '[https://andrewgreenhill.github.io/ag_agworld_accessory](https://andrewgreenhill.github.io/ag_agworld_accessory)',
    link2Code:
      '[https://github.com/andrewgreenhill/ag_agworld_accessory](https://github.com/andrewgreenhill/ag_agworld_accessory)',
    images: ['http://localhost:5173/images/Agworld/ag_agworld_accessory.jpg'],
    when: 'Around June-July 2021',
    publicComments:
      'This isn’t a complete project and it doesn’t make use of all the modern front-end development practices, having been made quickly and many years ago.',
    internalComments: '',
  },
  {
    id: 3,
    groupCode: 'IdeagenDT',
    subGroup: 'EPP',
    projectName: 'Workflows',
    projectDescription:
      'Workflow functionality to allow a process to be defined like a flowchart, and then have that orchestrated automatically, using the Camunda workflow engine. For example, if a user completes a form in [Damstra Forms](https://damstratechnology.com/products/digital-forms) then that could create a record in EPP, which might be reviewed and that could schedule a lesson in Damstra’s [Learning Management System](https://damstratechnology.com/products/elearning) and send an email.',
    myRole: 'I created the front-end of the module in EPP.',
    technologies:
      'TypeScript/JavaScript, React and related technologies, HTML, CSS, APIs, and Camunda.',
    link2Demo:
      '[https://damstratechnology.com/solutions/enterprise-protection-platform](https://damstratechnology.com/solutions/enterprise-protection-platform)',
    link2Code: 'Not available, proprietary',
    images: ['http://localhost:5173/images/EPP/TasksList.png'],
    when: 'Approx. March 2023 – June 2023',
    publicComments:
      'I overcame steep initial learning curves, and many roadblock problems in multiple repos, by being determined and persistently applying myself and pursuing help. I worked through those challenges, satisfied the criteria, and grew into this role.',
    internalComments: '',
  },
];

export { displayNameForGroup, projectsData };
