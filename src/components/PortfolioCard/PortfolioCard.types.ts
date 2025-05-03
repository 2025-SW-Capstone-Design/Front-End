import type { PositionType } from '../Label/Label.types';

// NOTE: Card들 시간 정의 필요
interface PortfolioCardProps {
  title: string;
  status: string;
  position: PositionType[];
  isEditing: boolean;
  isSelected: boolean;
  onSelect: (isSelected: boolean) => void;
}

export { PortfolioCardProps };
