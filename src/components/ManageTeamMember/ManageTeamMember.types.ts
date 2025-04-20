import type { PositionType } from '../Label/Label.types';

interface ManageTeamMemberProps {
  id: string;
  name: string;
  role: PositionType;
  isOwner?: boolean;
  onRemove?: () => void;
}

export { ManageTeamMemberProps };
