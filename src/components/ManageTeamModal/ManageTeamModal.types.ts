import type { teamMemberInfo } from '../../apis/teamMember/teamMember.types';
interface ManageTeamModalProps {
  onClose: () => void;
  teamMembers: teamMemberInfo[];
}

export { ManageTeamModalProps };
