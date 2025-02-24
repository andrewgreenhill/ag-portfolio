import { TProjectGroupCode, IProjectRecord } from '../types';

const groupDisplayName: Record<TProjectGroupCode, string> = {
  Miscellaneous: 'Miscellaneous',
  IdeagenDT: 'For Ideagen / Damstra',
  DamstraAPE: 'For Damstra / Applied Project Experience',
  EarlyWork: 'Early works',
};

const projectsData: IProjectRecord[] = [
  {
    id: 1.1,
    groupCode: 'Miscellaneous',
    subGroup: '',
    projectName: 'My portfolio',
    projectDescription:
      'My personal portfolio website to show my projects, skills, and experience. The website is built using React.js and Tailwind CSS.',
    myRole:
      'I designed and built my portfolio repository from the ground up, i.e. without using a template.',
    technologies: 'TypeScript, React.js, Tailwind CSS, Vite, Markdown, and GitHub Pages.',
    // TODO: Update the link2Demo when the portfolio is live
    link2Demo:
      '[https://andrewgreenhill.github.io/ag-portfolio](https://andrewgreenhill.github.io/ag-portfolio) <= _Not yet live_',
    link2Code:
      '[https://github.com/andrewgreenhill/ag-portfolio](https://github.com/andrewgreenhill/ag-portfolio)',
    // TODO: Update the images when the portfolio is live
    images: ['http://localhost:5173/images/Misc/Portfolio_WIP.jpg'],
    when: 'January-February 2025',
    publicComments: 'The project you are currently viewing is my portfolio.',
    internalComments: '',
  },
  {
    id: 1.2,
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
    images: ['http://localhost:5173/images/Misc/ag_agworld_accessory.jpg'],
    when: 'Around June-July 2021',
    publicComments:
      'This isn’t a complete project and it doesn’t make use of all the modern front-end development practices; it was just a quick project and made many years ago.',
    internalComments: '',
  },
  {
    id: 2.1,
    groupCode: 'IdeagenDT',
    subGroup: 'EPP',
    projectName: 'Workflows',
    projectDescription:
      'Workflow functionality to allow a process to be defined like a flowchart, and then have that orchestrated automatically, using the Camunda workflow engine. For example, if a user completes a form in [Damstra Forms](https://damstratechnology.com/products/digital-forms) then that could create a record in EPP, which might be reviewed and that could schedule a lesson in Damstra’s [Learning Management System](https://damstratechnology.com/products/elearning) and send an email.',
    myRole: 'I created the front-end of the Workflows module in EPP.',
    technologies:
      'JavaScript/TypeScript, React and related technologies, HTML, CSS, APIs, and Camunda.',
    link2Demo:
      '[https://damstratechnology.com/solutions/enterprise-protection-platform](https://damstratechnology.com/solutions/enterprise-protection-platform)',
    link2Code: 'Not available, proprietary',
    images: ['http://localhost:5173/images/EPP/TasksList.png'],
    when: 'Approx. March 2023 – June 2023',
    publicComments:
      'I overcame steep initial learning curves, and many roadblock problems in multiple repos, by being determined and persistently applying myself and pursuing help. I worked through those challenges, satisfied the criteria, and grew into this role.',
    internalComments: '',
  },
  {
    id: 2.2,
    groupCode: 'IdeagenDT',
    subGroup: 'EPP',
    projectName: 'Permits to Work',
    projectDescription:
      'A permit to work system is a formally documented system for managing high-risk activities, which is often used in high-risk industries. A permit is typically issued by a manager, supervisor or project manager. It allows employees to carry out required tasks under specific conditions. See more at [Permit to Work Solution - Damstra Technology](https://damstratechnology.com/solutions/permit-to-work) and [MKT-1605-Permit-to-Work-Damstra.pdf](https://corporateweb-v3-corporatewebv3damstrawebassetbuck-1lruglqypgb84.s3-ap-southeast-2.amazonaws.com/public/MKT-1605-Permit-to-Work-Damstra.pdf) .',
    myRole: 'I created the front-end of the Permits to Work module in EPP.',
    technologies: 'TypeScript/JavaScript, React and related technologies, HTML, CSS, and APIs.',
    link2Demo:
      '[https://damstratechnology.com/solutions/enterprise-protection-platform](https://damstratechnology.com/solutions/enterprise-protection-platform)',
    link2Code: 'Not available, proprietary',
    images: ['http://localhost:5173/images/EPP/PermitDetails.png'],
    when: 'Approx July to Sep 2023',
    publicComments:
      'That included working with developers from other software products (Damstra Forms and a 3rd party workflow engine, Camunda) to make software connections and pioneer a new kind of process orchestration within Damstra’s software suite.',
    internalComments: '',
  },
  {
    id: 2.3,
    groupCode: 'IdeagenDT',
    subGroup: 'EPP',
    projectName: 'Management of Change',
    projectDescription:
      'The Management of Change process is used when document changes need to be reviewed by different departments, following a prescribed workflow process. We implemented that to meet a need of Capstone Copper, using a combination of Damstra Forms, EPP and [Camunda](https://camunda.com/). The workflow begins with a form being filled out, then approvers can review and approve/reject. Camunda is used to orchestrate the process and connect between Damstra Forms & EPP and also to trigger emails to different parties who are involved in the process.',
    myRole: 'I created the front-end of the Management of Change module in EPP.',
    technologies:
      'TypeScript/JavaScript, React and related technologies, HTML, CSS, APIs, and Camunda.',
    link2Demo:
      '[https://damstratechnology.com/solutions/enterprise-protection-platform](https://damstratechnology.com/solutions/enterprise-protection-platform)',
    link2Code: 'Not available, proprietary',
    images: ['http://localhost:5173/images/EPP/ChangeRequestDetails.png'],
    when: 'Approx Sep 2023 to Dec 2023.',
    publicComments:
      'I used the experience I’d gained working on the EPP code base to create my most sophisticated front-end functionality to date and satisfy the need of enterprise customer Capstone Copper.',
    internalComments: '',
  },
  {
    id: 2.4,
    groupCode: 'IdeagenDT',
    subGroup: 'EPP',
    projectName: 'Work Orders',
    projectDescription:
      'The Work Orders module can be used by company admins to manage work orders that have been assigned to their company for completion (e.g. changing light bulbs or routine checks in a building). When a new WO is issued to their company, they are notified and they can then view it, assign to a worker, or decline it. Once a relevant worker closes a WO, the CA is notified again to finally complete the WO.',
    myRole:
      'I co-created the front-end of the Work Orders module in EPP, making heavy use of APIs to connect to the TIKS software back-end.',
    technologies:
      'TypeScript/JavaScript, React and related technologies, HTML, CSS, APIs, and TIKS.',
    link2Demo:
      '[https://damstratechnology.com/solutions/enterprise-protection-platform](https://damstratechnology.com/solutions/enterprise-protection-platform)',
    link2Code: 'Not available, proprietary',
    images: [
      'http://localhost:5173/images/EPP/WorkOrdersFilters.png',
      'http://localhost:5173/images/EPP/WorkOrdersDetails.png',
    ],
    when: 'Approx Jan 2024 to Aug 2024.',
    publicComments:
      'When getting two software products (EPP and TIKS) to work together, which hadn’t been connected before, there was a lot of complexity and unknowns, and a lot of time pressure. I developed a close working relationship with the main back-end developer to increase our understanding. We increasingly collaborated and tested together to finish our tickets faster, reduce issues getting to QA, and meet all the requirements.',
    internalComments: '',
  },
  {
    id: 2.5,
    groupCode: 'IdeagenDT',
    subGroup: 'EPP',
    projectName: 'Enterprise Protection Platform',
    projectDescription:
      'Damstra’s Enterprise Protection Platform ([EPP](https://damstratechnology.com/solutions/enterprise-protection-platform)) software is a web-based workforce management solution that has a wide range of functionality including for managing worker skills, training and site access.',
    myRole: 'Software maintenance and development.',
    technologies:
      'TypeScript/JavaScript, React and related technologies (including React Query, React Hook Form, and Yup), HTML, CSS and APIs.',
    link2Demo:
      '[https://damstratechnology.com/solutions/enterprise-protection-platform](https://damstratechnology.com/solutions/enterprise-protection-platform)',
    link2Code: 'Not available, proprietary',
    images: ['http://localhost:5173/images/EPP/LessonScheduling.jpg'],
    when: 'March 2023 to Dec 2024',
    publicComments:
      'I maintained and extended front end functionality in miscellaneous areas of EPP including lesson scheduling and skill configuration.',
    internalComments: '',
  },
];

export { groupDisplayName, projectsData };
