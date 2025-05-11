import type { label } from '../../apis/label/label.types';

interface TaskLabelProps {
  labelInfo: label;
  isClickable?: boolean;
  type?: 'taskModal' | 'default';
  onClick?: () => void;
  selectedType?: string; // 추가
}

export { TaskLabelProps };
