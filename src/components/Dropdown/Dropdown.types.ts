import type { MilestoneResponse } from '../../apis/milestone/milestone.types';
import type { projectInfo } from '../../apis/project/project.types';

interface DropdownProps {
  options: Array<projectInfo | MilestoneResponse>;
  placeholder?: string;
  onSelect: (id: number, title: string) => void;
  value?: number;
  width?: string;
  dropdownType?: 'default' | 'primary';
}

interface DropdownStylesProps {
  width?: string;
}

export { DropdownProps, DropdownStylesProps };
