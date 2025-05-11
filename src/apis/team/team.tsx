import ApiBuilder from '../config/builder/ApiBuilder';
import type {
  teamCreateRequest,
  teamInfo,
  teamInvitationRequest,
  teamJoinRequest,
} from './team.types';

const END_POINT = {
  TEAM: '/api/v1/teams',
  TEAM_DETAIL: (teamId: number) => `/api/v1/teams/${teamId}`,
};

const getTeamList = () => {
  return ApiBuilder.create<void, teamInfo[]>(END_POINT.TEAM).setMethod('GET');
};

const createTeam = () => {
  return ApiBuilder.create<teamCreateRequest, number>(END_POINT.TEAM).setMethod(
    'POST',
  );
};

const generateInvitationCode = (teamId: number) => {
  return ApiBuilder.create<void, string>(
    END_POINT.TEAM_DETAIL(teamId) + '/invitation-code',
  ).setMethod('POST');
};

const sendTeamInvitationEmail = (teamId: number) => {
  return ApiBuilder.create<teamInvitationRequest, void>(
    END_POINT.TEAM_DETAIL(teamId) + '/invitation-emails',
  ).setMethod('POST');
};

const joinTeam = () => {
  return ApiBuilder.create<teamJoinRequest, number>(
    END_POINT.TEAM + '/join',
  ).setMethod('POST');
};

export {
  getTeamList,
  createTeam,
  generateInvitationCode,
  sendTeamInvitationEmail,
  joinTeam,
};
