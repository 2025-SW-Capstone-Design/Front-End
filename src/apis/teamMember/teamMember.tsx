import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  teamMemberInfo,
  teamMemberUpdatePositionRequest,
} from './teamMember.types';

const END_POINT = {
  TEAM_MEMBER: (teamId: number) => `/api/v1/teams/${teamId}/members`,
};

const getTeamMembers = (teamId: number) => {
  return ApiBuilder.create<void, teamMemberInfo[]>(
    END_POINT.TEAM_MEMBER(teamId),
  ).setMethod('GET');
};

const updateTeamMemberPostion = (teamId: number) => {
  return ApiBuilder.create<teamMemberUpdatePositionRequest, void>(
    END_POINT.TEAM_MEMBER(teamId) + '/position',
  ).setMethod('PATCH');
};

export { getTeamMembers, updateTeamMemberPostion };
