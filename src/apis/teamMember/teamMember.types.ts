import type { PositionType } from '../../components/Label/Label.types';

interface teamMemberInfo {
  memberId: number;
  position: string;
  role: string;
  nickname: string;
  profileImageURL: string;
}

interface teamMemberUpdateRoleRequest {
  teamId: number;
  teamMemberId: number;
  role: PositionType;
}

export { teamMemberInfo, teamMemberUpdateRoleRequest };
