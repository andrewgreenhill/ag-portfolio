import { TProjectGroupsInfo, IProjectRecord } from '../types';
import { groupsInfo, projectsData } from '../data/projectsData';

// Mock API function that simulates fetching the project groups info
const fetchGroupsInfo = async (): Promise<TProjectGroupsInfo> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(groupsInfo as TProjectGroupsInfo);
    }, 0); // Make this greater than zero to simulate a network delay
  });
};

// Mock API function that simulates fetching the projects data
const fetchProjectsData = async (): Promise<IProjectRecord[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve(projectsData as IProjectRecord[]);
    }, 0); // Make this greater than zero to simulate a network delay
  });
};

export { fetchGroupsInfo, fetchProjectsData };
