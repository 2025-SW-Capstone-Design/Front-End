import ApiBuilder from '../config/builder/ApiBuilder';
import type { teamMemberInfo } from './teamMember.types';

const END_POINT = {
  TEAM_MEMBER: (teamId: number) => `/api/v1/teams/${teamId}/members`,
};

const getTeamMembers = (teamId: number) => {
  return ApiBuilder.create<void, teamMemberInfo[]>(
    END_POINT.TEAM_MEMBER(teamId),
  ).setMethod('GET');
};

export { getTeamMembers };
