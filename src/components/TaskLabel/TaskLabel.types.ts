import type { label } from '../../apis/label/label.types';

interface TaskLabelProps {
  labelInfo: label;
  isClickable?: boolean;
  type?: string;
  onClick?: () => void;
}

export { TaskLabelProps };
