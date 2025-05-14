import type { teamMemberInfo } from '../../apis/teamMember/teamMember.types';
interface ManageTeamModalProps {
  onClose: () => void;
  teamMembers: teamMemberInfo[];
  refetchMembers: () => void;
}

export { ManageTeamModalProps };
