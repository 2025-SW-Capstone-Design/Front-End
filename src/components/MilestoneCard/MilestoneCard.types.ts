import type { MilestoneResponse } from '~/apis/milestone/milestone.types';

interface MilestoneCardProps {
  milestone: MilestoneResponse;
  isSelected: boolean;
  onSelect: () => void;
  selectedId: number | null;
  isSelectedProjectId: boolean;
}

export { MilestoneCardProps };
