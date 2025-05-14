import ApiBuilder from '../config/builder/ApiBuilder';
import type { projectInfo } from './project.types';

const END_POINT = {
  PROJECTS: (teamId: number) => `/api/v1/projects/${teamId}`,
};

const getProjects = (teamId: number) => {
  return ApiBuilder.create<void, projectInfo[]>(
    END_POINT.PROJECTS(teamId),
  ).setMethod('GET');
};
export { getProjects };
