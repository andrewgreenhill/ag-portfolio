import { useQuery } from '@tanstack/react-query';
import { fetchGroupsInfo, fetchProjectsData } from '../api/projectsApi';

/**
 * Eagerly-load the projects groups information and data
 */
export function EagerLoadProjectData() {
  useQuery({ queryKey: ['groupsInfo'], queryFn: fetchGroupsInfo });
  useQuery({ queryKey: ['projectsData'], queryFn: fetchProjectsData });
  return null;
}
