import ApiBuilder from '../config/builder/ApiBuilder';
import type { label } from './label.types';

const END_POINT = {
  LABELS: (teamId: number) => `/api/v1/teams/${teamId}/issue-labels`,
};

const getLabels = (teamId: number, projectId: number) => {
  return ApiBuilder.create<void, label[]>(END_POINT.LABELS(teamId))
    .setMethod('GET')
    .setParams({ projectId });
};

export { getLabels };
