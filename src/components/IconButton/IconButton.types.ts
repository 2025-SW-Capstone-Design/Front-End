interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: 'primary' | 'secondary' | 'tertiary';
  width?: string;
}

interface IconButtonStylesProps {
  width?: string;
}

export { IconButtonProps, IconButtonStylesProps };
