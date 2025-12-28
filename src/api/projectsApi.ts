import { TProjectGroupsInfo, IProjectRecord } from '../types';

// This file contains the API functions for fetching project groups information and project data.

const queryKeyGroupsInfo = 'groupsInfo';
const queryKeyProjectsData = 'projectsData';

const fetchGroupsInfo = async (): Promise<TProjectGroupsInfo> => {
  // Mock API fetching of the project groups information
  const { groupsInfo } = await import('../data/projectsData');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(groupsInfo as TProjectGroupsInfo);
    }, 0); // Make this greater than zero to simulate a network delay
  });
};

const fetchProjectsData = async (): Promise<IProjectRecord[]> => {
  // Mock API fetching of the projects data
  const { projectsData } = await import('../data/projectsData');
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projectsData as IProjectRecord[]);
    }, 0); // Make this greater than zero to simulate a network delay
  });
};

export { fetchGroupsInfo, fetchProjectsData, queryKeyGroupsInfo, queryKeyProjectsData };
