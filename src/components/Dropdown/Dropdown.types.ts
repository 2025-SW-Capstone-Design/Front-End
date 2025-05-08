import type { projectInfo } from '../../apis/project/project.types';

interface DropdownProps {
  options: projectInfo[];
  placeholder?: string;
  onSelect: (optionId: number) => void;
  width?: string;
  dropdownType?: 'default' | 'primary';
}

interface DropdownStylesProps {
  width?: string;
}

export { DropdownProps, DropdownStylesProps };
