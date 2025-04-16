interface IconButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  buttonType: 'primary' | 'secondary';
  width?: string;
}

interface IconButtonStylesProps {
  width?: string;
}

export { IconButtonProps, IconButtonStylesProps };
