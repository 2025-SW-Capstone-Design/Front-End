import type { PositionType } from '../Label/Label.types';
interface TemplateCardProps {
  title: string;
  position: PositionType[];
  isEditing: boolean;
  isSelected: boolean;
  onSelect: (isSelected: boolean) => void;
}

export { TemplateCardProps };
