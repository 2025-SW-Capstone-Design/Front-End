interface DropdownProps {
  options: string[];
  placeholder?: string;
  onSelect: (option: string) => void;
  width?: string;
  dropdownType?: 'default' | 'primary';
}

interface DropdownStylesProps {
  width?: string;
}

export { DropdownProps, DropdownStylesProps };
