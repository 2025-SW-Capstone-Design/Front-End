import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  IssueUpdateRequest,
  IssueCreateRequest,
  IssueResponse,
  IssueClosedRequest,
} from './task.types';

const END_POINT = {
  TASK: (teamId: number, projectId: number) =>
    `/api/v1/teams/${teamId}/projects/${projectId}/issues`,
  TASK_UPDATE: (teamId: number, issueId: number) =>
    `/api/v1/teams/${teamId}/issues/${issueId}`,
  TASK_UPDATE_STATUS: (teamId: number, issueId: number) =>
    `/api/v1/teams/${teamId}/issues/${issueId}/closed`,
  TASK_DETAIL: (teamId: number, projectId: number, issueId: number) =>
    `/api/v1/teams/${teamId}/projects/${projectId}/issues/${issueId}`,
};

const getTaskList = (teamId: number, projectId: number, scope: string) => {
  return ApiBuilder.create<void, IssueResponse[]>(
    END_POINT.TASK(teamId, projectId),
  )
    .setParams({ scope })
    .setMethod('GET');
};

const createTask = (teamId: number, projectId: number) => {
  return ApiBuilder.create<IssueCreateRequest, number>(
    END_POINT.TASK(teamId, projectId),
  ).setMethod('POST');
};

const updateTask = (teamId: number, issueId: number) => {
  return ApiBuilder.create<IssueUpdateRequest, void>(
    END_POINT.TASK_UPDATE(teamId, issueId),
  ).setMethod('PATCH');
};

const updateTaskStatus = (teamId: number, issueId: number) => {
  return ApiBuilder.create<IssueClosedRequest, void>(
    END_POINT.TASK_UPDATE_STATUS(teamId, issueId),
  ).setMethod('PATCH');
};

const getTaskDetail = (teamId: number, projectId: number, issueId: number) => {
  return ApiBuilder.create<IssueResponse, void>(
    END_POINT.TASK_DETAIL(teamId, projectId, issueId),
  ).setMethod('GET');
};

export { getTaskDetail, getTaskList, createTask, updateTask, updateTaskStatus };
