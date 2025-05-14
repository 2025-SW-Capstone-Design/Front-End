import type { label } from '../../apis/label/label.types';

export interface TaskLabelProps {
  labelInfo: label;
  isClickable?: boolean;
  type?: 'default' | 'taskModal';
  onClick?: () => void;
  selectedType?: string;
}
