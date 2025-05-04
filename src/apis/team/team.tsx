import ApiBuilder from '../config/builder/ApiBuilder';
import type { teamInfo } from './team.types';

const END_POINT = {
  TEAM: '/api/v1/teams',
  TEAM_DETAIL: (teamId: number) => `/api/v1/teams/${teamId}`,
};

const getTeamList = () => {
  return ApiBuilder.create<void, teamInfo[]>(END_POINT.TEAM).setMethod('GET');
};

export { getTeamList };
