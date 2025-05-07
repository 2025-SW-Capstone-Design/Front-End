import type { teamMemberInfo } from '../../apis/teamMember/teamMember.types';
import type { PositionType } from '../Label/Label.types';

interface ManageTeamMemberProps {
  id: string;
  name: string;
  role: PositionType;
  isOwner?: boolean;
  onRemove?: () => void;
}

interface teamMemberProps {
  info: teamMemberInfo;
  isLeader: boolean;
  refetchMembers: () => void;
}

export { ManageTeamMemberProps, teamMemberProps };
