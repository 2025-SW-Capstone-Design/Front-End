interface SubButtonProps {
  children: React.ReactNode;
  buttonType: 'primary' | 'default';
  width?: string;
  disabled?: boolean;
}

interface SubButtonStylesProps {
  width?: string;
}

export { SubButtonProps, SubButtonStylesProps };
