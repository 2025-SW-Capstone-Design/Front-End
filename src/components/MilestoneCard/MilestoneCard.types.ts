import type { PositionType } from '../Label/Label.types';

interface MilestoneCardProps {
  title: string;
  status: string;
  position: PositionType[];
  isEditing: boolean;
  isSelected: boolean;
  onSelect: (isSelected: boolean) => void;
}

export { MilestoneCardProps };
