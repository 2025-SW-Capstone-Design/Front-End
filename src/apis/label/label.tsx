import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  IssueLabelDeleteRequest,
  IssueLabelUpdateRequest,
  IssueLabelCreateRequest,
  label,
} from './label.types';

const END_POINT = {
  LABELS: (teamId: number) => `/api/v1/teams/${teamId}/issue-labels`,
  LABELS_DETAIL: (teamId: number, labelId: number) =>
    `/api/v1/teams/${teamId}/issue-labels/${labelId}`,
};

const getLabels = (teamId: number, projectId: number) => {
  return ApiBuilder.create<void, label[]>(END_POINT.LABELS(teamId))
    .setMethod('GET')
    .setParams({ projectId });
};

const createLabel = (teamId: number) => {
  return ApiBuilder.create<IssueLabelCreateRequest, number>(
    END_POINT.LABELS(teamId),
  ).setMethod('POST');
};

const deleteLabel = (teamId: number, labelId: number) => {
  return ApiBuilder.create<IssueLabelDeleteRequest, void>(
    END_POINT.LABELS_DETAIL(teamId, labelId),
  ).setMethod('DELETE');
};

const updateLabel = (teamId: number, labelId: number) => {
  return ApiBuilder.create<IssueLabelUpdateRequest, void>(
    END_POINT.LABELS_DETAIL(teamId, labelId),
  ).setMethod('PATCH');
};

export { getLabels, createLabel, deleteLabel, updateLabel };
