import { useQuery } from '@tanstack/react-query';
import {
  fetchGroupsInfo,
  fetchProjectsData,
  queryKeyGroupsInfo,
  queryKeyProjectsData,
} from '../api/projectsApi';

/**
 * Eagerly-load the projects groups information and data
 */
export function EagerLoadProjectData() {
  useQuery({ queryKey: [queryKeyGroupsInfo], queryFn: fetchGroupsInfo });
  useQuery({ queryKey: [queryKeyProjectsData], queryFn: fetchProjectsData });
  return null;
}
