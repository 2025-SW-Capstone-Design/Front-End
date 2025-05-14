import type { MilestoneResponse } from '~/apis/milestone/milestone.types';

interface MilestoneListModalProps {
  isOpenEditModal: () => void;
  onClose: () => void;
  isSelected: MilestoneResponse | null;
  setIsSelected: React.Dispatch<React.SetStateAction<MilestoneResponse | null>>;
  teamId: number;
  selectedProjectId: number | null;
}

export { MilestoneListModalProps };
