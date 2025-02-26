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
      'My personal portfolio website to show my projects, skills, and experience. It is a single-page application (SPA), built with React.js and TypeScript, and uses Tailwind CSS for styling. The content is written in Markdown and hosted on GitHub Pages.',
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
      'Agworld accessory isn’t a complete project and it doesn’t make use of all the modern front-end development practices; it was just a quick project and made many years ago.',
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
    myRole:
      'I maintained and extended front end functionality in miscellaneous areas of EPP including lesson scheduling and skill configuration.',
    technologies:
      'TypeScript/JavaScript, React and related technologies (including React Query, React Hook Form, and Yup), HTML, CSS and APIs.',
    link2Demo:
      '[https://damstratechnology.com/solutions/enterprise-protection-platform](https://damstratechnology.com/solutions/enterprise-protection-platform)',
    link2Code: 'Not available, proprietary',
    images: ['http://localhost:5173/images/EPP/LessonScheduling.jpg'],
    when: 'March 2023 to Dec 2024',
    publicComments: '',
    internalComments: '',
  },

  {
    id: 3.1,
    groupCode: 'DamstraAPE',
    subGroup: '',
    projectName: 'Damstra Safety to Damstra Forms template converter',
    projectDescription:
      'After seeing on the Forms’ roadmap “Conversion of Check templates to Form templates”, I created a tool for doing that, including making a simple front end, documentation for it to be made into an API to be used by Safety devs, and JSON schemas for validating its input and output data.',
    myRole: 'My initiative and creation.',
    technologies: 'JavaScript, React, Redux, HTML, CSS, AJV and Jest',
    link2Demo: 'Not available',
    link2Code: 'Not available',
    images: ['http://localhost:5173/images/DamstraAPE/FormTemplateConverter.jpg'],
    when: 'Approx April to July 2022.',
    publicComments:
      'It was received with enthusiasm by product management, as the fastest way to achieve their goal.',
    internalComments: '',
  },
  {
    id: 3.2,
    groupCode: 'DamstraAPE',
    subGroup: '',
    projectName: 'Get APE Mobile Info (web app)',
    projectDescription:
      'I created a utility to make it easy to export lists of data from APE Mobile.',
    myRole:
      'I created this to fill an unmet need. One customer, at John Holland, commented “It worked like a charm! It’s been probably the best part of the platform so far.”',
    technologies:
      'JavaScript, HTML, CSS, APIs, GitHub Pages and Heroku. That included making an API Client/Helper, and modified CORS-Anywhere proxy and hosting that on Heroku.',
    link2Demo:
      '[https://andrewgreenhill.github.io/GetAPEMobileInfo/?options=all](https://andrewgreenhill.github.io/GetAPEMobileInfo/?options=all)',
    link2Code:
      '[https://github.com/andrewgreenhill/GetAPEMobileInfo](https://github.com/andrewgreenhill/GetAPEMobileInfo)',
    images: ['http://localhost:5173/images/DamstraAPE/Get_Forms_2.jpg'],
    when: 'Jan 2020 to Jan 2023',
    publicComments: 'I’ve paused operating this app because of a Heroku cost increase.',
    internalComments: '',
  },
  {
    id: 3.3,
    groupCode: 'DamstraAPE',
    subGroup: '',
    projectName: 'Damstra Forms',
    projectDescription:
      'I have worked closely with many Damstra Forms / APE Mobile developers and product management teams. I made minor contributions to Damstra Forms’ frontend (js-packages) and backend, including fixing Live View, and I supplied JavaScript/Node code to a Smart Asset developer so that he could get PDFs from Forms. I also worked a lot with its REST API endpoints.',
    myRole: 'As above.',
    technologies:
      'Mostly JavaScript in Visual Studio Code. Also, with exposure to React, issue tracking using JIRA, and version control using GitHub and Bitbucket.',
    link2Demo: 'N/A',
    link2Code: 'Not available, proprietary',
    images: ['http://localhost:5173/images/DamstraAPE/DamstraForms_LiveFeed.jpg'],
    when: 'Mar 2015 to Feb 2023',
    publicComments: '',
    internalComments: '',
  },
  {
    id: 3.4,
    groupCode: 'DamstraAPE',
    subGroup: '',
    projectName: 'Template Migration Assistant (web app)',
    projectDescription:
      'I started a web app to help with migrating form templates between servers.',
    myRole: 'As above.',
    technologies: 'JavaScript, HTML, CSS and REST APIs.',
    link2Demo: 'N/A',
    link2Code:
      '[https://github.com/andrewgreenhill/TemplateMigrationAssistant](https://github.com/andrewgreenhill/TemplateMigrationAssistant) (private repo)',
    images: ['http://localhost:5173/images/DamstraAPE/TMA.jpg'],
    when: 'April 2019 to Feb 2020',
    publicComments: '',
    internalComments: '',
  },
  {
    id: 3.5,
    groupCode: 'DamstraAPE',
    subGroup: '',
    projectName: 'Damstra’s public APE Mobile (Damstra Forms) Zapier Integration',
    projectDescription:
      'It is a public integration that is used by Damstra Forms customers to create automations using Triggers and Actions that the integration provides.',
    myRole:
      'After seeing needs from customers, and seeing that the dev team didn’t have familiarity with that code at that time, I took over the code base, fixed problems and extended its functionality. I became the maintainer of that code base.',
    technologies: 'JavaScript, REST APIs, and Zapier – including its CLI.',
    link2Demo:
      '[https://zapier.com/apps/ape-mobile/integrations](https://zapier.com/apps/ape-mobile/integrations)',
    link2Code: 'Not available, proprietary',
    images: ['http://localhost:5173/images/DamstraAPE/Public_APE_Forms_Zapier_integration.jpg'],
    when: 'Approx Oct 2019 to July 2021',
    publicComments: '',
    internalComments: '',
  },
  {
    id: 3.6,
    groupCode: 'DamstraAPE',
    subGroup: '',
    projectName: 'Damstra Forms – Safety Integration',
    projectDescription:
      'I created an integration that synchronises lists from Damstra Safety into Damstra Forms software, and Forms’ data and PDF files from Damstra Forms into Safety as compliance records.',
    myRole: 'My creation.',
    technologies: 'JavaScript, Node events, APIs and Zapier.',
    link2Demo: 'The integration is available by invitation only.',
    link2Code: 'Not available',
    images: ['http://localhost:5173/images/DamstraAPE/Forms-Safety_Integration.jpg'],
    when: 'Approx Apr 2021 to Sep 2023',
    publicComments: 'Used by some customers who have Damstra Forms and Safety.',
    internalComments: '',
  },
  {
    id: 3.7,
    groupCode: 'DamstraAPE',
    subGroup: '',
    projectName: 'Multiple other Zapier Integration works',
    projectDescription:
      'I created other Zapier Integrations when there was a need that couldn’t be satisfied by the off-the-shelf software. The integrations helped with automating customer tasks and raising alerts. Also, as a working demo pilot for an important integration needed for an enterprise prospect.',
    myRole: 'My creations.',
    technologies: 'JavaScript, APIs and Zapier.',
    link2Demo: 'Those integrations are available by invitation only.',
    link2Code: 'Not available',
    images: [
      'http://localhost:5173/images/DamstraAPE/Zapier_Integrations.jpg',
      'http://localhost:5173/images/DamstraAPE/Zapier_Integrations_AGsSamm.jpg',
      'http://localhost:5173/images/DamstraAPE/Zapier_Integrations_DF_Tools.jpg',
    ],
    when: 'Approx 2020 to 2022',
    publicComments: '',
    internalComments: '',
  },
  {
    id: 3.8,
    groupCode: 'DamstraAPE',
    subGroup: '',
    projectName: 'Google Scripts for Damstra Forms',
    projectDescription:
      'I made a way for customers to pre-fill Damstra Forms from data in Google Sheets, by making an extension to Google Sheets.',
    myRole:
      'I created this to meet the needs of sales staff who required the integration to assist with sales.',
    technologies: 'JavaScript and Google Scripts.',
    link2Demo: 'N/A',
    link2Code: 'Not available, proprietary',
    images: ['http://localhost:5173/images/DamstraAPE/GoogleScripts.png'],
    when: 'In 2019',
    publicComments: '',
    internalComments: '',
  },
  {
    id: 3.9,
    groupCode: 'DamstraAPE',
    subGroup: '',
    projectName: 'Python Scripts for Damstra Forms',
    projectDescription: `I wrote many Python scripts for tasks including:\n
•	Zendesk backups (articles and tickets)\n
•	Damstra Forms: making bulk changes\n
•	Damstra Forms: exporting data\n
•	Damstra Forms: create pre-filled forms from CSV data (did thousands for John Holland)\n
•	Damstra Forms: searching for bad data`,
    myRole: 'I created those to meet organizational and customer needs.',
    technologies: 'Python, Damstra Forms APIs, and a Zendesk API.',
    link2Demo: 'N/A',
    link2Code: 'Not available, proprietary',
    images: [],
    when: 'Approx 2017 to Feb 2022',
    publicComments: '',
    internalComments: '',
  },
  {
    id: 3.11,
    groupCode: 'DamstraAPE',
    subGroup: '',
    projectName: 'Formulas',
    projectDescription:
      'One of the APE developers observed that I made formulas work like a programming language. For example, I initially used simple functions to simulate Boolean functions, and simulated SQRT by using recursive subtraction and division operations (a Babylonian method!). Later I got the set of functions extended and then further advanced what could be achieved with formulas, establishing methods that are used by other staff today for putting smart functionality into Damstra Forms.',
    myRole: 'As above.',
    technologies: 'APE / Damstra Forms’ formula syntax.',
    link2Demo:
      'There is some information at [https://damstra.zendesk.com/hc/en-us/articles/8404022778777-Using-Formulas-List-of-Formula-Functions](https://damstra.zendesk.com/hc/en-us/articles/8404022778777-Using-Formulas-List-of-Formula-Functions) and [https://damstra.zendesk.com/hc/en-us/articles/8404043637145-Using-Formulas-Auto-completing-Short-Description](https://damstra.zendesk.com/hc/en-us/articles/8404043637145-Using-Formulas-Auto-completing-Short-Description) and [https://damstra.zendesk.com/hc/en-us/search?utf8=%E2%9C%93&category=4406152250649&query=formulas](https://damstra.zendesk.com/hc/en-us/search?utf8=%E2%9C%93&category=4406152250649&query=formulas)',
    link2Code: 'N/A',
    images: ['http://localhost:5173/images/DamstraAPE/Formula_example.jpg'],
    when: 'Mar 2015 to Feb 2023',
    publicComments: '',
    internalComments: '',
  },

  {
    id: 4.1,
    groupCode: 'EarlyWork',
    subGroup: 'Micromine',
    projectName: 'Micromine: Python with Micromine API',
    projectDescription:
      'I developed a 2-day course to teach people how to program Micromine software using its new Python programming interface. I made scripts to automate operations in Micromine software. I created a programming framework to make it easier for novices to do the above.',
    myRole: 'As above.',
    technologies: 'Python, Micromine software, and its API.',
    link2Demo: 'N/A',
    link2Code: 'Not available, proprietary',
    images: [
      'http://localhost:5173/images/Micromine/Ex6.1ColourSetsResult.jpg',
      'http://localhost:5173/images/Micromine/PythonScripting.jpg',
    ],
    when: 'May 2013 to Oct 2013',
    publicComments: '',
    internalComments: '',
  },
  {
    id: 4.2,
    groupCode: 'EarlyWork',
    subGroup: 'ERMapper',
    projectName: 'ER Mapper Hot Prospects Database',
    projectDescription:
      'A distributed database application for the sales department and resellers. Resellers recorded details of sales prospects, which were then communicated to the head office.',
    myRole: 'I conceived the application, built it, managed its rollout, and maintained it.',
    technologies: 'Microsoft Access, VBA, Internet Information Server (IIS) and Outlook.',
    link2Demo: '',
    link2Code: '',
    images: [],
    when: '',
    publicComments: '',
    internalComments: '',
  },
  {
    id: 4.3,
    groupCode: 'EarlyWork',
    subGroup: 'ERMapper',
    projectName: 'ER Mapper Query Tracking System',
    projectDescription:
      'A database application for the technical support department. It was used in the head office and regional offices for recording support queries, tracking communications and status, and reporting.',
    myRole: 'I took over managing it and extended the functionality.',
    technologies: 'Microsoft Access and VBA',
    link2Demo: '',
    link2Code: '',
    images: [],
    when: '',
    publicComments: '',
    internalComments: '',
  },
  {
    id: 4.41,
    groupCode: 'EarlyWork',
    subGroup: 'Curtin',
    projectName: 'Curtin University: XPAT',
    projectDescription:
      'I did summer vacation work, on a short-term contract, as a C programmer on an image-processing package ‘XPAT’, in which I added functionality and did maintenance on the software.',
    myRole: 'As above.',
    technologies: 'C and UNIX',
    link2Demo: '',
    link2Code: '',
    images: [],
    when: '',
    publicComments: '',
    internalComments: '',
  },
  {
    id: 4.42,
    groupCode: 'EarlyWork',
    subGroup: 'Curtin',
    projectName: 'Curtin University: Automated Beef carcass image analysis',
    projectDescription:
      'I did a major project during my studies at Curtin University in which I used C to write a program that did image processing for segmentation and analysis of images of beef carcesses for the purpose of their valuation - based on the amount of meat and fat, and the location of bruises.',
    myRole: 'As above.',
    technologies: 'C and UNIX',
    link2Demo: '',
    link2Code: '',
    images: [],
    when: '',
    publicComments: '',
    internalComments: '',
  },
  {
    id: 4.5,
    groupCode: 'EarlyWork',
    subGroup: 'UWA',
    projectName: 'UWA/PARG Automated Supernova Research',
    projectDescription:
      'I wrote a specialized editor for use with a new CCD camera, for an automated supernova research project, for the Perth/Peel Astronomy Research Group.',
    myRole: 'My work for a vacation scholarship.',
    technologies: 'Pascal',
    link2Demo: '',
    link2Code: '',
    images: [],
    when: '',
    publicComments: '',
    internalComments: '',
  },
  {
    id: 4.6,
    groupCode: 'EarlyWork',
    subGroup: 'Hobby',
    projectName: 'Hobby Programming',
    projectDescription: `I started creating my own operating system and when I did my final year 12 computing project, it ran on my OS. I wrote that entirely in hexadecimal Z80 machine language code, which I taught myself. That project was a game of Othello, with artificial intelligence that could beat many of my class mates. Later on, I wrote many games, and fractal-making programs, 3D graphics, blackjack simulation and probability analysis, a mortgage simulator, etc.
I also made a computer from the ground up from very basic components: a CPU, RAM, buses, etc.`,
    myRole: 'My creations.',
    technologies:
      'Software: languages including Z80 machine language, Basic and Pascal.\nHardware: integrated circuits (Z80 CPU, EEPROM memory, etc) and other electronic components such as I/O devices and a crystal for the computer’s MHz clock signal.',
    link2Demo: '',
    link2Code: '',
    images: [],
    when: '',
    publicComments: '',
    internalComments: '',
  },
];

export { groupDisplayName, projectsData };
