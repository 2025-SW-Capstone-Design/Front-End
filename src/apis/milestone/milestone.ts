import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  MilestoneCreateRequest,
  MilestoneDeadlineRespone,
  MilestoneDetailResponse,
  MilestoneResponse,
  MilestoneUpdateRequest,
  MilestoneUpdateStatusRequest,
} from './milestone.types';

const BASE_ENDPOINT = (teamId: number) => `/api/v1/teams/${teamId}`;

const END_POINT = {
  UPDATE_MILESTONE: (teamId: number, projectId: number, milestoneId: number) =>
    `${BASE_ENDPOINT(teamId)}/projects/${projectId}/milestones/${milestoneId}`,

  GET_PROJECT_MILESTONES: (teamId: number, projectId: number) =>
    `${BASE_ENDPOINT(teamId)}/projects/${projectId}`,

  CREATE_MILESTONE: (teamId: number, projectId: number) =>
    `${BASE_ENDPOINT(teamId)}/projects/${projectId}`,

  GET_ALL_MILESTONES: (teamId: number) => `${BASE_ENDPOINT(teamId)}`,

  GET_MILESTONE_DETAIL: (teamId: number, milestoneId: number) =>
    `${BASE_ENDPOINT(teamId)}/milestones/${milestoneId}`,
  UPDATE_MILESTONE_STATUS: (
    teamId: number,
    projectId: number,
    milestoneId: number,
  ) =>
    `${BASE_ENDPOINT(teamId)}/projects/${projectId}/milestones/${milestoneId}/status`,
  GET_DEADLINE: (teamId: number) => `/api/v1/teams/${teamId}/milestones`,
};

const updateMilestone = (
  teamId: number,
  projectId: number,
  milestoneId: number,
) => {
  return ApiBuilder.create<MilestoneUpdateRequest, MilestoneResponse>(
    END_POINT.UPDATE_MILESTONE(teamId, projectId, milestoneId),
  ).setMethod('PUT');
};

const getMilestoneByProject = (teamId: number, projectId: number) => {
  return ApiBuilder.create<void, MilestoneResponse[]>(
    END_POINT.GET_PROJECT_MILESTONES(teamId, projectId),
  ).setMethod('GET');
};

const createMilestone = (teamId: number, projectId: number) => {
  return ApiBuilder.create<MilestoneCreateRequest, number>(
    END_POINT.CREATE_MILESTONE(teamId, projectId),
  ).setMethod('POST');
};

const getMilesotnes = (teamId: number) => {
  return ApiBuilder.create<void, MilestoneResponse[]>(
    END_POINT.GET_ALL_MILESTONES(teamId),
  ).setMethod('GET');
};

const getMilestoneDetail = (teamId: number, milestoneId: number) => {
  return ApiBuilder.create<void, MilestoneDetailResponse>(
    END_POINT.GET_MILESTONE_DETAIL(teamId, milestoneId),
  ).setMethod('GET');
};

const updateMilestoneStatus = (
  teamId: number,
  projectId: number,
  milestoneId: number,
) => {
  return ApiBuilder.create<MilestoneUpdateStatusRequest, void>(
    END_POINT.UPDATE_MILESTONE_STATUS(teamId, projectId, milestoneId),
  ).setMethod('PATCH');
};

const getDeadlineMilstone = (teamId: number) => {
  return ApiBuilder.create<void, MilestoneDeadlineRespone[]>(
    END_POINT.GET_DEADLINE(teamId),
  ).setMethod('GET');
};

export {
  updateMilestone,
  getMilesotnes,
  getMilestoneByProject,
  getMilestoneDetail,
  createMilestone,
  updateMilestoneStatus,
  getDeadlineMilstone,
};
