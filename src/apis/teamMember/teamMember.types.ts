import type { PositionType } from '../../components/Label/Label.types';

interface teamMemberInfo {
  memberId: number;
  position: string;
  role: string;
  nickname: string;
  profileImageURL: string;
}

interface teamMemberUpdatePositionRequest {
  memberId: number;
  position: PositionType;
}

export { teamMemberInfo, teamMemberUpdatePositionRequest };
