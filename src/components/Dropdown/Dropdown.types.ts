import type { projectInfo } from '../../apis/project/project.types';

interface DropdownProps {
  options: projectInfo[];
  placeholder?: string;
  onSelect: (optionId: number, repositoryName: string) => void;
  width?: string;
  dropdownType?: 'default' | 'primary';
  value?: number | null;
}

interface DropdownStylesProps {
  width?: string;
}

export { DropdownProps, DropdownStylesProps };
