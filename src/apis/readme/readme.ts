import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  ReadmeDetailResponse,
  ReadmeRequest,
  ReadmeResponse,
} from './readme.types';

const END_POINT = {
  README: (teamId: number, projectId: number) =>
    `/api/v1/teams/${teamId}/projects/${projectId}/readmes`,
  README_MODIFY: (teamId: number, projectId: number, readmeId: number) =>
    `/api/v1/teams/${teamId}/projects/${projectId}/readmes/${readmeId}`,
  README_DETAIL: (teamId: number, readmeId: number) =>
    `/api/v1/teams/${teamId}/readmes/${readmeId}`,
};

const getReadmes = (teamId: number, projectId: number) => {
  return ApiBuilder.create<void, ReadmeResponse[]>(
    END_POINT.README(teamId, projectId),
  ).setMethod('GET');
};

const createReadme = (teamId: number, projectId: number) => {
  return ApiBuilder.create<ReadmeRequest, number>(
    END_POINT.README(teamId, projectId),
  ).setMethod('POST');
};

const rollbackReadme = (
  teamId: number,
  projectId: number,
  readmeId: number,
) => {
  return ApiBuilder.create<void, number>(
    END_POINT.README_MODIFY(teamId, projectId, readmeId) + '/rollback',
  ).setMethod('POST');
};

const updateReadme = (teamId: number, projectId: number, readmeId: number) => {
  return ApiBuilder.create<ReadmeRequest, number>(
    END_POINT.README_MODIFY(teamId, projectId, readmeId),
  ).setMethod('PATCH');
};

const getReadmeDetail = (teamId: number, readmeId: number) => {
  return ApiBuilder.create<void, ReadmeDetailResponse>(
    END_POINT.README_DETAIL(teamId, readmeId),
  ).setMethod('GET');
};

const deleteReadme = (teamId: number, readmeId: number) => {
  return ApiBuilder.create<void, void>(
    END_POINT.README_DETAIL(teamId, readmeId),
  ).setMethod('DELETE');
};

export {
  getReadmes,
  createReadme,
  rollbackReadme,
  updateReadme,
  getReadmeDetail,
  deleteReadme,
};
